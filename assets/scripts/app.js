'use strict';

var Piano = (function($) {

	$(function() {

		var $wkey = $('.wkey');
		var $skey = $('.skey');
    var sound = new Audio('assets/audios/piano.wav');

		var keyArray = [
			'key_1',
			'key_2',
			'key_3',
			'key_4',
			'key_5',
			'key_6',
			'key_7',
			'key_8',
			'key_9',
			'key_10',
			'key_11',
			'key_12'
		];

		var handleWideKeyAction = function(keySize) {

				for (var i = 0; i < keyArray.length; i++) {
					if( $(this).hasClass(keyArray[i]) ) {
						console.log(keyArray[i]);
            sound.play();
					}
				}
		}

		var handleSmallKeyAction = function() {
			for (var i = 0; i < (keyArray.length / 2); i++) {
					if( $(this).hasClass(keyArray[i]) ) {
						console.log(keyArray[i]);
					}
			}
		}

		$wkey.on('mouseover', handleWideKeyAction);
		$skey.on('mouseover', handleSmallKeyAction);

	});

})(jQuery);
