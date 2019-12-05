$(document).ready(function () {
    $("#change_css").click(function () {
        $("#body").toggleClass("colors blackWhite");

        $("#footer").toggleClass("footerColor footerBlackWhite");
    });
});