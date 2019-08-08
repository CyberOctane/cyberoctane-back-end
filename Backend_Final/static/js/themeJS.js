/////////// SVG object ///////////

var mq = window.matchMedia("(min-aspect-ratio:1/1)");
mq.addListener(svg_mq);
svg_mq();

function svg_mq() {
    var t_faces = document.getElementsByClassName('t');
    var ca_faces = document.getElementsByClassName('ca');
    var cb_faces = document.getElementsByClassName('cb');
    if(mq.matches){
        var i;
        for(i=0; i<ca_faces.length; i++){  
            ca_faces.style.display = "translateZ(5vw)";
        }
    }
}

/////////// scroll events ///////////

var socialBarSide = document.getElementById('social-bar-side'); 
var socialBarContact = document.getElementById('social-bar-contact'); 
var vHeight = window.innerHeight;
var contactHeight = 5.5 * vHeight;
var action = 'off';
document.addEventListener('scroll', function() {
    var scrollAmount = window.pageYOffset;
    if(scrollAmount > contactHeight && action == 'off'){
        action = 'on';
        socialBarContact.classList.toggle('zero-width');
        socialBarSide.classList.toggle('zero-height');
    } else if (action == 'on' && scrollAmount > contactHeight-300 && scrollAmount < contactHeight) {
        action = 'off';
        socialBarContact.classList.toggle('zero-width');
        socialBarSide.classList.toggle('zero-height');
    } else {
        return;
    }
});

/////////// Nav Bar ///////////

var navbar = document.getElementById('navbar');
var vh = window.innerHeight;

/////////// Menu ///////////

var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');
var menuSVG = document.getElementById('menu-svg');
var menuLinks = document.getElementById('menu-links');

menuBtn.onclick = menuOp;
    
function menuOp (){
    menu.classList.toggle("open");
    menuBtn.classList.toggle("open");
    menuSVG.classList.toggle("open");
    menuLinks.classList.toggle("open");
}


/////////// Owl Carousel ///////////

$(document).ready(function(){
    
    $('').owlCarousel({
        loop: true,
        items:1,
        nav: true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            768: {
                items:4,
            }
        }
    });
})


/////////// Services ///////////

var digiExp = document.getElementById("Digital-exp");
digiExp.onclick = function(){swiper.slideTo(1)};




//

var navItems = document.getElementsByClassName("nav-item");
var id;

navItems[0].addEventListener("mouseenter", expandHrLine);
navItems[0].addEventListener("mouseleave", shirnkHrLine);

navItems[1].addEventListener("mouseenter", expandHrLine);
navItems[1].addEventListener("mouseleave", shirnkHrLine);

navItems[2].addEventListener("mouseenter", expandHrLine);
navItems[2].addEventListener("mouseleave", shirnkHrLine);

navItems[3].addEventListener("mouseenter", expandHrLine);
navItems[3].addEventListener("mouseleave", shirnkHrLine);

function expandHrLine(evt) {
    id = evt.target.getElementsByTagName("HR")[0].id;
    console.log(id);
    document.getElementById(id).style.width = "3vw";
}

function shirnkHrLine(evt) {
    id = evt.target.getElementsByTagName("HR")[0].id;
    console.log(id);
    document.getElementById(id).style.width = "0";
}