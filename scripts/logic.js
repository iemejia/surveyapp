var id_question = 0;
var current_question = current_survey.questions[id_question];

var previousQuestion = function() {
    if (id_question > 0) {
	id_question -= 1;
	current_question = current_survey.questions[id_question];
    }
    paintQuestion();
};

var nextQuestion = function() {
    if (id_question < current_survey.questions.length-1) {
//	$("#question").fadeOut(); //"slow"
	id_question += 1;
	current_question = current_survey.questions[id_question];
    }
    paintQuestion();
};

var paintQuestion = function() {
    if(current_question !== undefined) {
//	$("#question").fadeOut(); //"slow"
	$("ul").detach();
	// input
	var html_answer = '<input type="text" id="answer"></input>';
	// radio
	if (current_question.type === "2") {
	    html_answer = "";
	    for(var i=0;i<current_question.options.length;i++) {
		html_answer += '<input type="radio" id="answer" name="answer" value="' + current_question.options[i] + '"/>' + current_question.options[i] + '<br />';
	    }
	}

	// checkbox
	if (current_question.type === "3") {
	    html_answer = "";
	    for(var i=0;i<current_question.options.length;i++) {
		html_answer += '<input type="checkbox" id="answer" name="answer" value="' + 
		    current_question.options[i] + '"/>' + current_question.options[i] + '<br />';
	    }
	}

	$("#question").append(
	    "<ul><li>Question #" + current_question.id + " / " + current_survey.questions.length + "</li>" +
		"<li>" + current_question.question + "</li>" +
		"<li>" + html_answer + "</li></ul>");

	// We update the view
	$('input:text').val(answers[id_question].answer);
	$('input:radio').filter(function() {
	    return (this.value == answers[id_question].answer);
	}).attr('checked', 'true');
	$('input:checkbox').filter(function() {
	    for (var i = 0; i<answers[id_question].answer.length ; i++) {
		if (this.value == answers[id_question].answer[i]) {
		    return true;
		}
	    }
	    return false;
	}).attr('checked', 'true');


	// We update the model
	$('input:text').keyup(function(event) {
	    answers[id_question].answer = event.target.value;
	});
	$('input:radio').click(function(event) {
	    answers[id_question].answer = $('input:radio:checked').val();
	});
	$('input:checkbox').click(function(event) {
		var answer_data = [];
		$('#answer:checked').each(function() {
		    answer_data.push($(this).val());
		});
		answers[id_question].answer = answer_data;
	});

	// We persist the model
	saveSurvey(id_survey, answers);

	$('#answer').get(0).focus();

	$('#answer').bind('keyup', 'return', function(event) {
            nextQuestion();
            event.preventDefault();
	});
	$('#answer').bind('keyup', 'ctrl+right', function(event) {
            nextQuestion();
            event.preventDefault();
	});
	$('#answer').bind('keyup', 'ctrl+left', function(event) {
            previousQuestion();
            event.preventDefault();
	});
    }
}
