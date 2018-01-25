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


// slider
$(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });







$(window).load(function() {

    // TOPPER STUFF
    fillTopper();
    var topperHeight = $(window).height()
    var scrollProgress = 5;
    var topperScrollMagicController = new ScrollMagic({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
    function getTopperHeight() {
        return topperHeight / 1.5;
    }
    $(window).resize(function() {
        topperHeight = $(window).height();
        $('#topper').height($(window).height());

        // Force better DOM repainting hack. Helps on mobile
        $('html').addClass('force-gpu').removeClass('force-gpu');
    });
    var topperTextTween = TweenMax.staggerFromTo('#topper h1 span', 0.5,
        {
            y: 25,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1
        },
        0.075
    );
    var starScene = new ScrollScene({
        triggerElement: '#topper',
        duration: getTopperHeight,
        offset: 0
    })
    .addTo(topperScrollMagicController)
    .setTween(topperTextTween)
    //.setPin('#topper')
    // .on('progress', function(e) {
    //     console.log('Holaaa')
    //     scrollProgress = e.progress * 100 * 2;
    //     if (scrollProgress <= 5) {
    //         scrollProgress = 5;
    //     }
    // })
    .on('start', function(e) {
        $('body').addClass('hide-those-particles');
    });
    var camera, scene, renderer, mouseX = 0, mouseY = 0, particles = [];
    initStars();
    function initStars() {
        camera = new THREE.PerspectiveCamera(80, $('#topper').width() / $('#topper').height(), 1, 4000 );
        camera.position.z = 1000;
        scene = new THREE.Scene();
        scene.add(camera);
        renderer = new THREE.CanvasRenderer();
        renderer.setSize( $('#topper').width(), $('#topper').height() );
        document.getElementById('topper').appendChild( renderer.domElement );
        makeParticles();
        document.addEventListener( 'mousemove', onMouseMove, false );
        setInterval(update,1000/30);
    }
    function update() {
        updateParticles();
        renderer.render( scene, camera );
    }
    function makeParticles() {
        var particle, material;
        for ( var zpos= -1000; zpos < 1000; zpos+=5 ) {
            material = new THREE.ParticleCanvasMaterial( { color: 0xf787cc, program: particleRender } );
            particle = new THREE.Particle(material);
            particle.position.x = Math.random() * 1000 - 500;
            particle.position.y = Math.random() * 1000 - 500;
            particle.position.z = zpos;
            particle.scale.x = particle.scale.y = 1;
            scene.add( particle );
            particles.push(particle);
        }
    }
    function particleRender( context ) {
        context.beginPath();
        context.arc( 0, 0, 1, 0,  Math.PI * 2, true );
        context.fill();
    };
    function updateParticles() {
        for(var i=0; i<particles.length; i++) {
            particle = particles[i];
            particle.position.z +=  scrollProgress * 1.5;
            if(particle.position.z>1500) particle.position.z-=2500;
        }
    }
    function onMouseMove( event ) {
        // Do nothing, based on scroll
    }
    
    introStuff();














});






function introStuff() {
    $('body').addClass('show-background');
    setTimeout(function() {
        $('body').addClass('show-stars');

    }, 500);
}
function fillTopper() {
    $('#topper').height($(window).height());
}
function initParticles() {
    particlesJS('contact', {
        particles: {
            color: '#fff',
            shape: 'circle',
            opacity: 1,
            size: 2.5,
            size_random: true,
            nb: 75,
            line_linked: {
                enable_auto: true,
                distance: 250,
                color: '#fff',
                opacity: 0.5,
                width: 1,
                condensed_mode: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                }
            },
            anim: {
                enable: true,
                speed: 2.5
            }
        },
        interactivity: {
            enable: true,
            mouse: {
                distance: 250
            },
            detect_on: 'canvas',
            mode: 'grab',
            line_linked: {
                opacity: 0.5
            },
            events: {
                onclick: {
                    push_particles: {
                        enable: true,
                        nb: 4
                    }
                }
            }
        },
        retina_detect: true
    });


}






//FADEEEEE








});






