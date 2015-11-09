<script type="text/javascript"
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<script type="text/javascript">
	jQuery('#props')
			.ready(
					function($) {
						// use some random spinner from the internet
						var spinner = $('<img />')
								.attr('src',
										'http://www.enilivewec.com/img/ajax-loading.gif');
						var loadingText = $(
								'<span id="loader"><font face="Helvetica"><b>Loading.... Please Wait...<b></font></span>')
								.prepend(spinner);

						// add to #messages div block
						$(loadingText).appendTo('#loadingAjax');

						// do some animations to delay it a bit then remove it
						$('#loadingAjax').slideUp(500).slideDown(1000).fadeOut(
								500).fadeIn(1000, function() {
							$(loadingText).remove();
						});

					})
</script>