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

	
$("#msformDos").submit(function(e){

	$.ajax({
        url: "form-handler-nodb.php",
        type: "POST",
        data: $("#msformDos").serialize(),
        success: function(r)
        {
            console.log(r);
            if(r){
                $("#msformDos").fadeOut('slow') && $(".thanks").text("Gracias por contactarnos, te responderemos a la brevedad :)");
            }else{
                $(".thanks").text("Inténtalo de nuevo");
            }
        }
    });  
    
    return false; // this one
});







});






