$(document).ready(function(){


	function findBestPosition(){
		console.log('Computers turn');
	}
	
	function switchRole(computerCurrentTurn){
		computerCurrentTurn = !computerCurrentTurn;	
		displayTop();
	}

	function displayTop(){	
		if(computerCurrentTurn){
			$("#messageTop").html("Computer's turn");
			findBestPosition();
		} else {
			$("#messageTop").html("Human's turn");
		}
	}
	
	var movementsLeft = 9;
	var computerCurrentTurn = false;
	displayTop();
	
    $(".cells").click(function(e){
		console.log(e.currentTarget.id);
		switchRole(computerCurrentTurn);
    });
	
});