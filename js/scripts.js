$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        // autoplay:true,
        // autoplayTimeout:0,

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });
});