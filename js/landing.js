$(document).ready(function(){

	$('.boton').click(function() {
        $('.er').show();
         $('.boton').hide();
	   $(this).toggleClass('active');
	   $('#overlay').toggleClass('open');
	  });

    $('#er').click(function(){
        $('.er').hide();
         $('.boton').show();
         $(this).toggleClass('active');
         $('#overlay').removeClass('open');
    });


     $('#Carousel').carousel({
        interval: 5000
    });


	
$(".submit").click(function(){
    $("#msform, #msformUno").fadeOut('slow');
	$.ajax({
        url: "form-handler-nodb.php",
        method: "post",
        data: $(".msform").serialize(),
        success: function(r){
        }
    });  
    $(".thanks").text("Gracias por contactarnos, te responderemos a la brevedad :)");
    return false; // this one
});







});






