$(document).ready(function(){

$("#answer").hide();


var magic8Ball = {};

magic8Ball.answerList = ["Try Again Later", "Concentrate Harder, Ask Again", "Not Sure", "Probably Not", "idk I'm an 8-Ball","Cannot Predict Now", "Who Cares","Ask Someone Who Cares"];



magic8Ball.askQuestion = function(question){

	$("#answer").fadeIn(7000);
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.answerList.length;
	var randomIndex = Math.floor(randomNumberArray);
	var randomAnswer = this.answerList[randomIndex];
	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

	//shake ball
	$("#8ball").effect("shake");

	$("#answer").text(randomAnswer);
	console.log(question);
	console.log(randomAnswer);
};



var onClick = function(){
	$("#answer").hide();
	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(
		function(){
			//show prompt
		var question = prompt("ask me anything");
		magic8Ball.askQuestion(question);
		}, 500);

};

	$("#questionButton").click(onClick);

});	
