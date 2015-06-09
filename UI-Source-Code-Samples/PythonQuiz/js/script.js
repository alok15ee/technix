function submitAnswers () {
	
	var totalQuestion = 5;
	var score = 0;


	//Get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	//Validation

	for(i = 1; i <= totalQuestion; i++){
		if (eval('q'+i) == null || eval('q'+i) == ''){	
			alert('You missed question ' +i);
			return false;
		}
	}

	//Setting the correct answers inside an array
	var answers = ["b","c","b","b","b"];

	//Check userAnswers  (This code is kind of repetative, so let's optimize it)


	/*for(i = 1; i <= totalQuestion; i++){
		if (eval('q'+i) == answers[i - 1]){	
			score++;
			//return false;
		}
	}*/

	for(i = 1; i <= totalQuestion;i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}

	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+totalQuestion+'</span></h3>';
	/*alert("You scored " +score);*/
	return false;
}
