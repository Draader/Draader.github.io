$(document).ready(function () {
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


});
