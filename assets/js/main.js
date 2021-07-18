$(document).ready(() => {
    let button = $('.button-group button');
    button.click((e)=>{
        button.removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.grid').isotope({
            filter:selector
        });

        return false;
    });

    $('.button-group #btnActive').trigger('click');
    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
          }
        // other options
      });

   $('.owl-carousel').owlCarousel({
       
       margin:10,
       autoplay:true,
       dotsClass: 'owl-dots',
       dots:true,
       responsiveClass:true,
       responsive : {
        480 : { items : 1  }, // from zero to 480 screen width 4 items
        768 : { items : 2  }, // from 480 screen widthto 768 6 items
        1024 : { items : 2   // from 768 screen width to 1024 8 items
        }
    },
   });
});