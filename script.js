// Magic 8 Ball jQuery Version

$(document).ready(function(){
var magic8Ball = {};
magic8Ball.answerList = ["Yes", "No", "Maybe", "Totes Magotes!", "Are you f-ing kidding me?", "I don't know – whatevs.", "Hell yeah, baby!", "Not a chance!"];



	
magic8Ball.askQuestion = function(question){
	console.log(question);
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.answerList.length;
	var randomIndex = Math.floor(randomNumberArray);
	var randomAnswer = this.answerList[randomIndex];
	 
	 $("#answer").text(randomAnswer);
		//$("#questionId").text(question);
	
	 $("#answer").fadeIn(4000);
	};

var questionPopup = function(){
	
var popup = prompt("Ask me a yes or no question.");
	
$("#8ball").effect("shake");
			

		magic8Ball.askQuestion(popup);
		
	
setTimeout(function() {$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");}, 500);
		
	};	
	
$("#answer").hide();
$("#questionButton").click(questionPopup);	


	

});

