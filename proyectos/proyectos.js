$(document).ready(function(){


$('#me').click(function() {
        $('.er').show();
         $('#me').hide();
	   $(this).toggleClass('active');
	   $('#overlay').toggleClass('open');
	  });

    $('#er').click(function(){
        $('.er').hide();
         $('#me').show();
         $(this).toggleClass('active');
         $('#overlay').removeClass('open');
    });
})    
