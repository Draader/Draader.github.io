$( document ).ready(function() {

  $("body").css("background","url(img/fond1.jpg) no-repeat fixed center ")
  $("body").css("background-size","cover");

  $("#change_font").click(function() {

    var size = $("p").css( "font-size" );
    alert("Size="+size)
    $("p").css( "font-size" , size+10 );

  });


  var originalSize = $('div').css('font-size');
    // reset
   $(".resetMe").click(function(){
     $('div').css('font-size', originalSize);
   });

   // Increase Font Size
   $(".increase").click(function(){
    var currentSize = $('div').css('font-size');
    var currentSize = parseFloat(currentSize)*1.2;
    $('div').css('font-size', currentSize);
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

   $('#cley').bind('click', function(){
     //alert("TEST");
     $('#cley').toggleClass('test2');
     //

     setTimeout(
      function()
      {
        $('#cley').toggleClass('test3');
        $("#B").toggleClass("test-b2");
      }, 1000);




   });







});
