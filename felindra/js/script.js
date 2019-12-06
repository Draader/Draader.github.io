$(document).ready(function () {
    $("#content").hide();
    $("#parameters").addClass("hide");

    $('#img').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $("#animation").hide();
        $("#content").show();
    });

    $("#paramImg").click(function () {
        $("#parameters").toggleClass("hide show");
    });

    $("#change_css").click(function () {
        $("#body").toggleClass("colors blackWhite");
        $("#header").toggleClass("headerColor headerBlackWhite");
        $("#footer").toggleClass("footerColor footerBlackWhite");
    });

    $("#change_font").click(function () {

        var size = $("p").css("font-size");
        alert("Size=" + size)
        $("p").css("font-size", size + 10);

    });


    var originalSize = $('div').css('font-size');
    // reset
    $(".resetMe").click(function () {
        $('div').css('font-size', originalSize);
    });

    // Increase Font Size
    $(".increase").click(function () {
        var currentSize = $('div').css('font-size');
        var currentSize = parseFloat(currentSize) * 1.2;
        $('div').css('font-size', currentSize);
        return false;
    });

    // Decrease Font Size
    $(".decrease").click(function () {
        var currentFontSize = $('div').css('font-size');
        var currentSize = $('div').css('font-size');
        var currentSize = parseFloat(currentSize) * 0.8;
        $('div').css('font-size', currentSize);
        return false;
    });


});
