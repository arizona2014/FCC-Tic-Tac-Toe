	
var movementsLeft = 9;
var computerCurrentTurn = false;
var computerCode = "X";
var humanCode = "O";

$(document).ready(function(){

	function writeLetterOnBoard(code, position){
		switch(position){
			case "11":
				$("#cell11").html(code);
				break;
			case "12":
				$("#cell12").html(code);
				break;
			case "13":
				$("#cell13").html(code);
				break;				
			case "21":
				$("#cell21").html(code);
				break;
			case "22":
				$("#cell22").html(code);
				break;
			case "23":
				$("#cell23").html(code);
				break;								
			case "31":
				$("#cell31").html(code);
				break;
			case "32":
				$("#cell32").html(code);
				break;
			case "33":
				$("#cell33").html(code);					
				break;								
		}		
	}

	function findBestPosition(){
		console.log('Computers turn');
		console.log(movementsLeft);
		var bestPosition = "11";
		writeLetterOnBoard(computerCode,bestPosition);
	}
	
	function switchRole(){
		movementsLeft--;
		computerCurrentTurn = !computerCurrentTurn;	
		displayTop();
	}

	function displayTop(){	
		if(computerCurrentTurn){
			$("#messageTop").html("Computer's turn");
			findBestPosition();
			switchRole(computerCurrentTurn);
		} else {
			$("#messageTop").html("Human's turn");
		}
	}

	displayTop();
	
    $(".cells").click(function(e){
		if(!computerCurrentTurn && movementsLeft>0){		
			var FullString = e.currentTarget.id;
			var position = FullString.slice(-2);
			writeLetterOnBoard(humanCode,position);
			switchRole(computerCurrentTurn);
		}
    });
	
});