$(document).ready(function () {
    $("#content").hide();
    $("#parameters").addClass("hide");

    $('#img').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $("#img").toggleClass("rotate");
        setTimeout(
        function()
        {
          $("#img").toggleClass("nextrotate");
          setTimeout(
          function()
          {
            $("#animation").hide();
            $("#content").show();
          }, 1000);
        }, 1000);


    });

    $("#paramImg").click(function () {
        $("#parameters").toggleClass("hide show");
    });

    $("#change_css").click(function () {
        $("#body").toggleClass("colors blackWhite");
        $("#header").toggleClass("headerColor headerBlackWhite");
        $("#footer").toggleClass("footerColor footerBlackWhite");
    });


    $("#fonts").click(function(){
      //alert($('#fonts option:selected').text());
      var current_font = $('#fonts option:selected').text();
      $('*').css('font-family', current_font);
    });

    $("#boldB").click(function(){
      $('*').toggleClass("isBold");
    });

    $("#italicB").click(function(){
      $('*').toggleClass("isItalic");
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
