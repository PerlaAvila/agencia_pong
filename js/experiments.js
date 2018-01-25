$(document).ready(function(){

// función para cambiar el color de fondo
  function changeColor(selector, colors, time) {
        /* Parametros:
         * selector: string,
         * colors: array de colores en string
         * cada: número íntegro (en milisegundos)
         */
        var curCol = 0,
            timer = setInterval(function () {
                if (curCol === colors.length) curCol = 0;
                $(selector).css("background-color", colors[curCol]);
                curCol++;
            }, time);
    }
    $(window).load(function () {
        changeColor("#body", ["#507FF5", "#9450F5", "#E239B1"], 8000);
    });

//Función para la animación del texto principal

$(function(){
            
  var $slogans = $("p.slogan").find("strong");
  var $holder = $("#holder");
  
  $slogans.parent().css({position : "absolute", top:"5vh", left:"0px"});
  
  //Tiempo de transición y tiempo de delay
  var transitionTime = 0.4;
  var slogansDelayTime = 2;
  
  //internos
  var totalSlogans = $slogans.length;
  
  var oldSlogan = 0;
  var currentSlogan = -1;
  
  //inicializar la función    
  switchSlogan();
  
  function switchSlogan(){
      
      oldSlogan = currentSlogan;
      
      if(currentSlogan < totalSlogans-1){
          currentSlogan ++
      } else {
          currentSlogan = 0;
      }
      
      TweenLite.to($slogans.eq(oldSlogan), transitionTime, {top:-20, alpha:0, rotationX: 90});
      TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
      
      TweenLite.delayedCall(slogansDelayTime, switchSlogan);
  }
  
});



// Texto arcoíris 

$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});
	
	
/*

More SplitText demos on Codepen: https://codepen.io/collection/KiEhr

See https://www.greensock.com/splittext/ for details. 

This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
*/
var tl = new TimelineMax({repeat:10}),
  text = $(".texto"),
  data =$('.texto').text(),
	arr = data.split(""),
  rough = RoughEase.ease.config({strength:2, clamp:true}),
  i;

tl.set(text, {autoAlpha:1})

console.log(tl);
 
for (i = 0; i < arr.length; i++) {
  tl.fromTo(arr[i], 2.4, {transformOrigin:"center -160px", z:0.1, rotation:((Math.random() < 0.5) ? 90 : -90)}, {rotation:0, ease:Elastic.easeOut}, 0.3 + i * 0.06);
  tl.to(arr[i], 0.6, {y:96,  ease:Bounce.easeOut}, 3.4 + Math.random() * 0.6);
  tl.to(arr[i], 0.6, {autoAlpha:0, ease:rough}, 4.5 + Math.random());
}



// var text = $("#quote").text(),
// 	mySplitText = text.split(" "),
//     tl = new TimelineLite(),
//     numChars = mySplitText.charAt(0).length;

// for(var i = 0; i < numChars; i++){
//   //random value used as position parameter
//   tl.from(mySplitText.charAt(i), 2, {opacity:0}, Math.random() * 2);
// }
		














});