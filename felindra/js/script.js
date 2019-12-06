$(document).ready(function () {
    $("#content").hide();

    $('#img').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $("#animation").hide();
        $("#content").show();
    });
    // $("#animation img").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
    //     function(event) {
    //         alert("aya");
    //     });

    $("#change_css").click(function () {
        $("#body").toggleClass("colors blackWhite");

        $("#footer").toggleClass("footerColor footerBlackWhite");
    });


    var originalSize = $('*').css('font-size');
    var originalSize = parseFloat(originalSize)*1.5;
    $('*').css('font-size', originalSize);
      // reset
     $(".resetMe").click(function(){
       $('*').css('font-size', originalSize);
     });

     // Increase Font Size
     $(".increase").click(function(){
      var currentSize = $('*').css('font-size');
      var currentSize = parseFloat(currentSize)*1.2;
      $('*').css('font-size', currentSize);
      return false;
    });

     // Decrease Font Size
     $(".decrease").click(function(){
       var currentFontSize = $('*').css('font-size');
       var currentSize = $('*').css('font-size');
       var currentSize = parseFloat(currentSize)*0.8;
       $('*').css('font-size', currentSize);
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
