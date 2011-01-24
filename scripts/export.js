exportTable = function() {
    var table="";

    db.transaction(function (tx) {
	tx.executeSql('SELECT * FROM surveys_answers', [], function (tx, results) {
	    table += "<table>";
	    table += "<tr><td>Id survey</td></tr>";
	    for (var i = 0; i < results.rows.length; i++) {
		table += "<tr>";
                var row = results.rows.item(i);
		table += "<td>" + row.id + "</td>";
//		if(surveys.surveys[row.id].secrecy === "private") {
//		    continue;
//		}
                var row_answers = JSON.parse(row.answers);
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

