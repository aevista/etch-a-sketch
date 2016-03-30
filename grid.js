$(document).ready(function(){

	//default variables
	var initSquares = 50;
	var brushcolor = "black";

	//initializing grid
	initgrid(initSquares, brushcolor);

	//color from pallet 
	$('.palletColor').click(function(event){
		event.stopPropagation();
		brushcolor = $(this).css("background-color");
		brush(brushcolor);	
	});

	$('#eraser').click(function(){
		brushcolor = "eraser";
		brush(brushcolor);
	});
	
	$('#rainbow').click(function(){
		brushcolor = "rainbow";
		brush(brushcolor);
	});

	$('#trail').click(function(){
		trail(); 
	});

	$('#density').click(function(){
		do{
		initSquares = prompt("Choose a density from 0 to 100!");
		}while(initSquares >100 || initSquares < 0)

		reset(initSquares, brushcolor);
	});

	$('#reset').click(function(){
		reset(initSquares, brushcolor);
	});
});

function initgrid(numSquares, bcolor){

	for(var i = 0; i < numSquares*numSquares; ++i)
		$('#container').append("<div class='block'></div>");
	var width = $('#container').width()/numSquares;
	$('.block').css({"width":width, "height": width});
	brush(bcolor);
}

function trail(){
	$(".block").hover(function() {
		$(this).toggleClass('faded');
	}, function () {
		$(this).fadeTo('slow', 1);
	});
}

function brush(color){
	$('.block').hover(function(){
	
		$(this).css({background: color});

		if(color === "rainbow"){
			var red = Math.floor((Math.random()*255) + 1);
			var green = Math.floor((Math.random()*255) + 1);
			var blue =  Math.floor((Math.random()*255) + 1);
			$(this).css({background: "rgb(" + red + "," + green + "," + blue + ")"});
		}
		if(color === "eraser")
			$(this).css({background : "#E8E8E8"});

	});
}

function reset(newSquares, brushcolor){
	$('.block').hover(function(){
		if($(this).hasClass('faded')){
			$('#container').empty();
			initgrid(newSquares,brushcolor);
			trail();
		}	
		else{
			$('#container').empty();
			initgrid(newSquares,brushcolor);
		}
	});
}