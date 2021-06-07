/* Background Images */
function nextSlide() {
	if (typeof $ == "undefined") var $ = function(sel) { return document.querySelector(sel); }
	$(".bk-img").appendChild($(".bk-img img:first-child"));
}
setInterval(nextSlide, 3000);
