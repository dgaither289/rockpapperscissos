

var correctAnswer =  prompt("Pick! rock, papper, scissors");
console.log(correctAnswer)


var pc = Math.floor(Math.random()*2)

var pcanswer = null


if (pc == 1 ){
 	pcanswer ="rock";
 }
 else if (pc == 2 ){
 	pcanswer = "papper";
 }
 else {
 	pcanswer = "scissors"
 }
 console.log(pcanswer)
 

  if (pcanswer === correctAnswer) {
  	console.log("Its a Darw")
  } 
  if (pcanswer === "rock"){
  	if  (correctAnswer === "papper") {
  		console.log("Player Wins!")
  	}
  	if (correctAnswer === "scissors") {
  		console.log("Player Looses!")
  	}
  }
  if (pcanswer === "scissors"){
  	 if (correctAnswer === "rock") {
  		console.log("Player Wins!")
  	}
  	if (correctAnswer === "papper") {
  		console.log("Player Looses!")
  	}
  }
  if (pcanswer === "papper"){
  	if (correctAnswer === "scissors") {
  		console.log("Player Wins!")
  	}
  	if (correctAnswer === "rock") {
  		console.log("Player Looses!")
  	}
  }