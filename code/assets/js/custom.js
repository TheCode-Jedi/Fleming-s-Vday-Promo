/* FOR TESTING
console.log("test");
*/

//COLLAPSES ACCORDION ON MOBILE RES (iphone,ipads in portrait and landscape)
$(window).bind('resize load', function() {
    if ($(this).width() > 767) {
        $('#collapseOne').addClass('show');
        $('#collapseTwo').addClass('show');
    } else {
        $('#collapseOne').removeClass('show');
        $('#collapseTwo').removeClass('show');
    }
});