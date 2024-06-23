$(document).ready(function() {
	$(".bi-search").click(function() {
	   $("input[type='search']").focus();
	 });
	 $('.a,.b').click(function () {
		$('.a,.b').toggleClass('d-none');
	});
});