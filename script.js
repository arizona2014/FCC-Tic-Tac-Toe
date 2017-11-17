var movementsLeft = 9;
var computerCurrentTurn = false;
var computerCode = "X";
var humanCode = "O";
var computerMoves = [];
var humanMoves = [];
var winningStrategy = [];
var startingPosition;
var bestPosition;

const winStates = [
	[ 0 , 1 , 2 ],
	[ 3 , 4 , 5 ],
	[ 6 , 7 , 8 ],
	[ 0 , 3 , 6 ],
	[ 1 , 4 , 7 ],
	[ 2 , 5 , 8 ],
	[ 0 , 4 , 8 ],
	[ 2 , 4 , 6 ]
];

$(document).ready(function(){

	function writeLetterOnBoard(code, position){
		switch(position){
			case 0:
				$("#cell11").html(code);
				break;
			case 1:
				$("#cell12").html(code);
				break;
			case 2:
				$("#cell13").html(code);
				break;				
			case 3:
				$("#cell21").html(code);
				break;
			case 4:
				$("#cell22").html(code);
				break;
			case 5:
				$("#cell23").html(code);
				break;								
			case 6:
				$("#cell31").html(code);
				break;
			case 7:
				$("#cell32").html(code);
				break;
			case 8:
				$("#cell33").html(code);					
				break;								
		}		
	}
	
	function transformPosition(cell){
		switch(cell){
			case "11":
				return 0;
				break;
			case "12":
				return 1;
				break;
			case "13":
				return 2;
				break;				
			case "21":
				return 3;
				break;
			case "22":
				return 4;
				break;
			case "23":
				return 5;
				break;								
			case "31":
				return 6;
				break;
			case "32":
				return 7;
				break;
			case "33":
				return 8;					
				break;								
		}	
	}
	
	humanHasWinningStrategy(){	
	}
	
	continueWinningStrategy(){		
	} 
		
	blockHumanWinningStrategy(){		
	}	
	
	function findWinningStrategy(startPosition){
		for(i=0;i<winStates.length;i++){
			if(winStates[i].indexOf(startPosition) !== -1){
				return winStates[i];				
			}			
		}
	}
	
	function findBestPosition(){
		if(winningStrategy.length < 0){
			bestPosition = -1;
			while(bestPosition<0){
				startingPosition = Math.floor(Math.random() * 9);
				if(validMove(startingPosition)){					
					bestPosition = startingPosition;
					computerMoves.push(bestPosition);
					writeLetterOnBoard(computerCode,bestPosition);
					winningStrategy = findWinningStrategy(bestPosition);
				}
			}
		} else {
			if(!humanHasWinningStrategy()){
				continueWinningStrategy();
			} else {
				blockHumanWinningStrategy();
			}
		}
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
	
	function validMove(position){
		var valid = true;
		if(computerMoves.indexOf(position) !== -1){
			valid = false;
		}
		if(humanMoves.indexOf(position) !== -1){
			valid = false;
		}		
		return valid;
	}

	displayTop();
	
    $(".cells").click(function(e){
		if(!computerCurrentTurn && movementsLeft>0){		
			var FullString = e.currentTarget.id;
			var position = transformPosition(FullString.slice(-2));
			if(validMove(position)){
				humanMoves.push(position);
				writeLetterOnBoard(humanCode,position);
				switchRole(computerCurrentTurn);
			}
		}
    });
	
});