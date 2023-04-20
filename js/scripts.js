$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        autoplay:true,
        autoplayTimeout:1500,

        responsive:{
            0:{
                items:3
            },

            1000:{
                items:3
            }
        }
    });
});