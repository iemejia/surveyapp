var DB_NAME    = "surveysapp";
var DB_VERSION = "1.0";
var DB_TITLE   = "Survey's Database";
var DB_BYTES   = 30 * 1024 * 1024;
var db = window.openDatabase(DB_NAME, DB_VERSION, DB_TITLE, DB_BYTES);

var createDatabase = function() {
    db.transaction(function (tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS surveys (id INT PRIMARY KEY, name TEXT, creation_date DATETIME, update_date DATETIME)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS answers (id TEXT PRIMARY KEY, id_survey TEXT, answers TEXT, creation_date DATETIME, update_date DATETIME)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS associated_surveys (id_survey TEXT, id_associated_survey TEXT, creation_date DATETIME)');
    });
};

var saveSurvey = function(id, answers) {
    db.transaction(function (tx) {
	tx.executeSql('REPLACE INTO answers (id, answers) VALUES (?,?)',[id, JSON.stringify(answers)]); //id_survey, JSON.stringify(answers)]);
    });
};

var getQuestions = function() {
/*	tx.executeSql('SELECT * FROM questions', [], function (tx, results) {

	}, function (tx, error) {
            // error
            alert('2.Something went wrong: '+ error.message);
        }); */
};

/*
tx.executeSql('SELECT * FROM foo', [], function (tx, results) {
  var len = results.rows.length, i;
  for (i = 0; i < len; i++) {
    alert(results.rows.item(i).text);
  }
});
*/

var getAnswers = function() {
    
};

var getExportDataAsHtml = function(type) {
// valid type is public or private
    var table="";

    db.transaction(function (tx) {
	tx.executeSql('SELECT * FROM surveys_answers', [], function (tx, results) {
	    table += "<table>";
	    for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows.item(i);
                var row_answers = JSON.parse(row.answers);

		if (i==0) {
		    // pintamos el header
		    table += "<tr><td>Id survey</td>";
                    for (var j=0; j < row_answers.length; j += 1) {
			table += "<td>Answer # " + j + "</td>";
		    }
		    table+="</tr>";
		}
		table += "<tr>";
		table += "<td>" + row.id + "</td>";
//		if(current_surveys.surveys[row.id].secrecy === "private") {
//		    continue;
//		}

                for (var j=0; j < row_answers.length; j += 1) {
		    table += "<td>" + row_answers[j].answer + "</td>";
		}
		table += "</tr>";
            }
	    table += "</table>";
	    document.write(table);
	}, function (tx, error) {
            // error
            alert('2.Something went wrong: '+ error.message);
        });
    });

};

