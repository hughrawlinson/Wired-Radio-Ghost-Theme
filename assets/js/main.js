var audioelement = $('#radiostream').get(0);
var togglePlayback = function(){
	!audioelement.paused?audioelement.pause():audioelement.play();
	$($('#playPause').find('i')).attr('class',$('#radiostream').get(0).paused?'glyphicon glyphicon-play':'glyphicon glyphicon-pause');
}

$(audioelement).bind('canplay',function(){
	$('#loading').hide();
})