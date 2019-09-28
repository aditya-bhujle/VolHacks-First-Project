var busy = true;
var hoverNull = false;

$(document).ready(function(){
	start();
	
	$('.status').hover(
		function(){
			statusChange();
		},
		function(){
			statusChange();
		}
	)
	
	$('.status').click(
		function(){
			hoverNull = true;
		}
	)
})

function start(){
	if(busy){
		$('.status').css('color', '#E74C3C');
		busyHover = true;
	}else{
		$('.status').css('color', '#2ECC71');
		busyHover = false;	
	}
}


function statusChange(){
	if(hoverNull == false){
		if(busy){
			$('.status').css('color', '#2ECC71');
			$('#status-text').html('not busy');
			busy = false;
		}else{
			busy = true;
			$('#status-text').html('busy');
			$('.status').css('color', '#E74C3C');
		}
	}
	else
		hoverNull = false;
}