


$(document).mousemove(function (e) {
    $('.모기').css("top", e.pageY - 150);
    $('.모기').css("left", e.pageX - 150);
});

var windowWith = $(window).width()
var mouseX = 0;

$(".stuff").attr("src", "img/2.png");

$(document).mousemove(function (e) {
    mouseX = e.pageX;

    if (mouseX > windowWith / 5 * 2 && mouseX < windowWith / 5 * 4) {
        $(".stuff").attr("src", "img/1.png")

    }

    if (mouseX > windowWith / 5 * 4 && mouseX < windowWith / 5 * 6) {
        $(".stuff").attr("src", "img/2.png")

    }

    if (mouseX > windowWith / 5 * 6 && mouseX < windowWith / 5 * 8) {
        $(".stuff").attr("src", "img/3.png")

    }

    if (mouseX > windowWith / 5 * 2 && mouseX < windowWith / 5 * 4) {
        $(".stuff2").attr("src", "img/3.png")

    }

    if (mouseX > windowWith / 5 * 4 && mouseX < windowWith / 5 * 6) {
        $(".stuff2").attr("src", "img/1.png")

    }

    if (mouseX > windowWith / 5 * 6 && mouseX < windowWith / 5 * 8) {
        $(".stuff2").attr("src", "img/2.png")

    }




})



