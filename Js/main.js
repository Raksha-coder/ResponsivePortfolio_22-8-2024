$(document).ready(function(){


    let $btn = $('.project-area .button-group button');

    $btn.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter:selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $(".project-area .grid .test-popup-link").magnificPopup({
        type:'image',
        gallery:{enabled:true}
    });


    // owl carousel
     $('.site-main .feed-back .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1,
            },
            544:{
                items:2,
            }
        }

     })


     //
     let nav_offset_top = ;
    


})




