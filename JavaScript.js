$(document).ready(function(){
	var $status = $('.status');
	
	$('.status').hover(
		function(){
			statusChange();
		},
		function(){
			statusChange();
		}
	)
})

function statusChange(){
	if($('#status-text').text() == 'busy'){
		$('#status-text').html('not busy');
		$('.status').css('color', '#2ECC71');
	}else
		$('#status-text').html('busy');
		$('.status').css('color', '#E74C3C');
}