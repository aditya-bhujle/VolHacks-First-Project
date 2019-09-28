var busy = true;
var hoverNull = false;

const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'feisty-ward-254300',
  keyFilename: 'feisty-ward-254300-e730983e4e17.json',
});

let docRef = db.collection('users').doc('alovelace');

let setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

let aTuringRef = db.collection('users').doc('aturing');

let setAlan = aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});

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