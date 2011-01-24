/*
var surveys = {"surveys": [
    {"id": "1", "question": "What's your name ?", "type": "1", "secrecy": "private", "validation": "true" },
    {"id": "2", "question": "Favorite singer ?", "type": "2", "options": ["uno","dos","tres"]},
    {"id": "3", "question": "Favorite food ?", "type": "1", "next": "2"},
    {"id": "4", "question": "Name your purpose ?", "type": "3", "options": ["uno","dos","tres"]},
]};
*/

var surveys = {"surveys": [
    {"id": "1", "question": "Kode Rumah Tangga", "type": "1", "secrecy": "private" }, //, "validation": "true"

    {"id": "2", "question": "Anak dibawah umur lima tahun:  Berapa usia anak?", "type": "2", "options": ["kurang 1 tahun","1 tahun sampai 2 tahun","2 tahun sampai 3 tahun","3 tahun sampai 4 tahun", "4 tahun sampai 5 tahun"]},

    {"id": "3", "question": "Kalau kurang 1 tahun, berapa bulan?", "type": "1"},
    {"id": "4", "question": "Jenis Kelamin", "type": "2", "options": ["Laki-laki","Perempuan"]},
    {"id": "5", "question": "Tanggal Lahir", "type": "1"},
    {"id": "6", "question": "Apakah [NAMA ANAK] makan", "type": "2", "options": ["3 kali atau lebih dalam sehari","2 kali dalam sehari", "1 kali sehari", "5-6 kali dalam seminggu", "3-4 kali dalam seminggu", "2 kali atau kurang dalam seminggu", "TIDAK TAHU"]},
    {"id": "7", "question": "Apakah [NAMA ANAK] menyikat giginya*?", "type": "2", "options": ["Di pagi hari","Di malam hari", "Di sore hari", "Sesudah makan", "Tidak pernah", "Kadang-kadang", "TIDAK TAHU"]},
    {"id": "8", "question": "Sekarang kita ingin melihat perkembangan kesehatan anak dengan menimbang dan mengukur tinggi badan anak. BERAT (KG)", "type": "1"},
    {"id": "9", "question": "Tinggi (cm)", "type": "1"},
    {"id": "10", "question": "Lingkar Lengan Atas (cm)", "type": "1"},

]};

var answers = [];
for (var i=0; i<surveys.surveys.length; i+=1) {
    answers[i] = {"id": i, "answer": ""}; //extra will be added in the future an saved in serialization
}

//create_database = function() {
    var DB_NAME    = "surveysapp";
    var DB_VERSION = "1.0";
    var DB_TITLE   = "Survey's Database";
    var DB_BYTES   = 20 * 1024 * 1024;
    var db = window.openDatabase(DB_NAME, DB_VERSION, DB_TITLE, DB_BYTES);
    db.transaction(function (tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS surveys_answers (id TEXT PRIMARY KEY, answers TEXT, creation_date DATETIME)');
    });
//}

/*
tx.executeSql('SELECT * FROM foo', [], function (tx, results) {
  var len = results.rows.length, i;
  for (i = 0; i < len; i++) {
    alert(results.rows.item(i).text);
  }
});
*/

var id_question = 0;
var current_question = surveys.surveys[id_question];

var previousQuestion = function() {
    if (id_question > 0) {
	id_question -= 1;
	current_question = surveys.surveys[id_question];
    }
    paintQuestion();
};

var nextQuestion = function() {
    if (id_question < surveys.surveys.length-1) {
//	$("#question").fadeOut(); //"slow"
	id_question += 1;
	current_question = surveys.surveys[id_question];
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
	    "<ul><li>Question #" + current_question.id + " / " + surveys.surveys.length + "</li>" +
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
	db.transaction(function (tx) {
	    tx.executeSql('REPLACE INTO surveys_answers (id, answers) VALUES (?,?)',[id_survey, JSON.stringify(answers)]);
	});

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

// creates the answer array (a clone of the size of the questions)
// get current element and paint it



// for (i = 0; i < surveys.surveys.length; i++) {
//     $('.text').append('<p>Test</p>');
// }
//$('.question').append('<p>' + surveys.surveys[i].question + '</p>');


