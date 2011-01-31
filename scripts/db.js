if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

function has(array, value) {
    for (var i = 0; i < array.length; i++) {
	if (array[i] === value) {
	    return true;
	}
    }
    return false;
}

function getParameterByName( name ) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null ) {
	return undefined;
    }
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

var dao = {
    INDEX: "KEY:index",
    KEY: "KEY:",

    init: function() {
        // initialize the storage index
	if (!this.index()) {
            window.localStorage.setItem(this.INDEX, 0);
	}
    },

    index: function() {
	var ind = window.localStorage.getItem(this.INDEX);
	if (ind) {
	    return parseInt(ind);
	}
	return undefined;
    },

    save: function(entry) {
	if (!entry.id) {
            entry.id = this.index();
	    entry.create_date = new Date();
            window.localStorage.setItem(this.INDEX, this.index()+1);
	}
	entry.update_date = new Date();
        window.localStorage.setItem(this.KEY + entry.id, JSON.stringify(entry));
    },

    remove: function(entry) {
	window.localStorage.removeItem(this.KEY + entry.id);
    },

    get: function(id) {
	return JSON.parse(window.localStorage.getItem(this.KEY + id));
    },

    exists: function(id) {
	return (this.get(id));
    },

    getAll: function() {
	var all = [];
	for(var i=0; i < this.index(); i++) {
	    var value = JSON.parse(window.localStorage.getItem(this.KEY + i));
	    if (value) {
		all.push(value);
	    }
	}
	return all;
    },

    /** TODO not tested, use getAll().filter() for the moment */
    getByCondition: function(fun) {
	var len = this.index(); //this.length
	if (typeof fun != "function") {
	    throw new TypeError();
	}
	var res = new Array();
	var thisp = arguments[1];
	for (var i = 0; i < len; i++) {
	    if (i in this) {
		// var val = this[i] in case fun mutates this
		var val = JSON.parse(window.localStorage.getItem(this.KEY + i)); 
		if (fun.call(thisp, val, i, this)) {
		    res.push(val);
		}
	    }
	}
	return res;
	//return this.getAll().filter(condition);
    },

};

// surveys.surveys.filter( function(val) { return (val.id_survey == 0 );} );

var surveys_dao = Object.create(dao);
surveys_dao.INDEX = "surveys:index";
surveys_dao.KEY = "surveys:";
surveys_dao.init();

var answers_dao = Object.create(dao);
answers_dao.INDEX = "answers:index";
answers_dao.KEY = "answers:";

/** returns the object with the new empty answers for a given survey */
answers_dao.createForSurvey = function(id_survey) {
    var survey = surveys_dao.get(id_survey);
    if(survey) {
	var answers = { id_answers: Math.uuid(), id_survey: id_survey, 
			answers: new Array(survey.questions.length) }; 
	//id is added on save time if not defined, same for creation and update dates
	for (var i=0; i<survey.questions.length; i++) {
	    var val = "";
	    // we add the default value if its established
	    if (survey.questions[i].default) {
		val = survey.questions[i].default;
	    }
	    answers.answers[i] = {id: i, answer: val}; //extra will be added in the future an saved in serialization
	}
	return answers;
    }
    return undefined;
};
answers_dao.init();

/*
var computer_id_dao = Object.create(dao);
computer_id_dao.INDEX = "computer:index";
computer_id_dao.KEY = "computer:";
computer_id_dao.init();
computer_id_dao.save({id_computer: Math.uuid()});
*/

var associated_answers_dao = Object.create(dao);
associated_answers_dao.INDEX = "associated_answers:index";
associated_answers_dao.KEY = "associated_answers:";
associated_answers_dao.associate = function(id_answer_parent, answers) {
    if (id_answer_parent) {
	var associated_answer = this.get(id_answer_parent);
	if (!associated_answer) {
	    associated_answer = {
		// the id should be the same that for the parent
		id: id_answer_parent,
		id_answers: new Array(),
	    };
	}
	if (!has(associated_answer.id_answers, answers.id)) {
	    associated_answer.id_answers.push(answers.id);
	}
	this.save(associated_answer);
    }
};
associated_answers_dao.init();

var getAnswerAsHtml = function(id_answer) {
    var table = "";
    var answer = answers_dao.get(id_answer);
    if(answer) {
	table = "<table><tbody>";
	table += "<tr><th>Id</th><th>Question</th><th>Answer</th></tr>";
	var survey = surveys_dao.get(answer.id_survey);
	for (var i=0; i < survey.questions.length; i++) {
	    table += '<tr><td>' + i + '</td><td>' + survey.questions[i].question;
	    table += '</td><td>' + answer.answers[i].answer + '</td></tr>';
	}	
	table += "</tbody></table>";
    }
    return table;
}

//params should be id_survey, typeofquestion
var getExportDataAsHtml = function(id_survey, type) {
    var survey = surveys_dao.get(id_survey);
    var filtered_questions = survey.questions.filter(function(val) {
	// if no type parameter we show all the questions
	if (!type) { return true; }
	// if questions don't have a defined secrecy parameter we make them public
	if (!val.secrecy) {
	    val.secrecy = "public";
	}
	// if the question is set to be show in the report it makes it's secrecy private
	if (val.report) {
	    val.secrecy = "report";
	}
	return (val.secrecy === type);
    });
    
    // we build the header
    var table = "<table><tbody>";
    table += "<tr><th colspan=" + filtered_questions.length+1 + '">' + id_survey + "</th></tr>";
    table += "<tr>";
    table += "<th></th>";
    for (var i = 0; i < filtered_questions.length ; i++) {
	table += "<th>" + filtered_questions[i].id +"</th>";
    }
    table += "</tr>";
    table += "<tr>";
    table += "<th>Id survey</th>";
    for (var i = 0; i < filtered_questions.length ; i++) {
	table += "<th>" + filtered_questions[i].question +"</th>";
    }

    if (type === "report") {
	table += "<th>Associated<br/>Surveys</th>";
    }

    table += "</tr>";

    // and the answers
    var answers_by_survey = answers_dao.getAll().filter(function(val) {
	return (val.id_survey === id_survey);
    });

    for (var i = 0; i < answers_by_survey.length ; i++) {
	var answer = answers_by_survey[i];
	table += "<tr>";
	table += "<td>" + answer.id + "</td>";
	for (var j = 0; j < filtered_questions.length ; j++) {
	    for (var k = 0; k < answer.answers.length ; k++) {
		if (filtered_questions[j].id == answer.answers[k].id) {
		    table += "<td>" + answer.answers[j].answer + "</td>";		    
		}
	    }
	}

//	table += '<td><a href="consult_survey.html?id_answer=' + answer.id +'">View</a></td>';
	if (type === "report") {
	    var associated_answers = associated_answers_dao.get(answer.id);
	    if (associated_answers) {
		table += '<td>';
		for (var j = 0; j < associated_answers.id_answers.length; j++) {
		    var associated_answer = answers_dao.get(associated_answers.id_answers[j]);
		    if (associated_answer) {
			table += '<a href="survey.html?id_answer=' + associated_answer.id + '">' + associated_answer.id + '</a>';
			table += "<br/>";
		    }
		}
		table += '</td>';
	    } else {
		table += '<td></td>';
	    }
	    table += '<td><a href="view_answer.html?id_answer=' + answer.id +'">View</a></td>';
	    table += '<td><a href="survey.html?id_answer=' + answer.id +'">Edit</a></td>';
	    table += '<td><a href="survey.html?id_survey=1&id_answer_parent=' + answer.id + '">Associate</a></td>';
	}
//	<a href="survey.html?id_survey=' + answer.id +'">Associate Survey</a></td>';
//	table += '<td><a href="survey.html?id_answer=' + answer.id +'">Edit</a></td>';
	table += "</tr>";
    }

    table += "</tbody></table>";
    return table;
};
