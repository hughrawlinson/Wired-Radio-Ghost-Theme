var stream = null;

var togglePlayback = function(){
	stream.paused?stream.play():stream.pause();
	$($('#playPause').find('i')).attr('class',stream.paused?'fa fa-play':'fa fa-pause');
}

soundManager.setup({
    url: '/assets/js/vendor/swf',
    onready: function() {
        stream = soundManager.createSound({
            id: 'stream',
            url: 'http://owl.gold.ac.uk:8000/wired'
        });
        stream.play();
        $('#loading').hide();
    },
    ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
    }
});