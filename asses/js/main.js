const menuIcon = document.querySelector('.menu-reponsive')
const menu = document.querySelector ('.menu-item')
 function showMenu(){
    menu.classList.toggle('active');

 }
menuIcon.addEventListener('click' , showMenu)

const iconMenu = document.querySelectorAll('.menu-icon')
const changeIconMenu = document.querySelector('.menu-reponsive')
function changeIcon(){
    for(i = 0 ; i < iconMenu.length ; i++){
        iconMenu[i].classList.toggle('active')
    }   
}
changeIconMenu.addEventListener('click' , changeIcon)


$(document).ready(function () {
    

      $('.slide-list').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '60px',
        variableWidth: true,
        prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
      });

      $('.feed-back-container').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
      });
  });
  $(document).ready(function(){
    $('.data-number p').counterUp({
      delay: 5,
      time: 6000
    });
});

  AOS.init();
