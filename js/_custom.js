document.addEventListener("DOMContentLoaded", function () {


  $('.portfolio-wrap').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'ease',
    speed: 1000,
    dots: true,
    arrows: false,
    prevArrow: '',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          dots: false,
        }
      }]
  });

  $('.partner-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease',
    dots: true,
    arrows: false,
    prevArrow: '',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          variableWidth: true,
        },
        breakpoint: 320,
        settings: {
          variableWidth: true,
        },
      }
    ],
  });

  $('.single__wrap').click(function () {
    $(this).toggleClass('transform')
  })



  function portfolio_slider() {

    let slider = $(".portfolio-item__inner ")
    let dots = $(".portfolio .slick-dots")
    let about = $(".portfolio-about");


    $(".btn_about").on('click', function (event) {
      event.preventDefault();



      slider.toggleClass("portfolio-item__inner-close")
      about.toggleClass("portfolio-about-open")
      dots.css("opacity", "0")

    })


    $('.about-back').on('click', function (event) {
      event.preventDefault();

      slider.toggleClass("portfolio-item__inner-close")
      about.toggleClass("portfolio-about-open")
      dots.css("opacity", "1")

      
      console.log(slider)
    });

  };

  portfolio_slider();

  $('.inp-wrap input').focus(function() {
    $(this).parent('.inp-wrap').each(function() {
      $('label', this).toggleClass("label-focus")
    });
  })
    .blur(function() {
    if($(this).val() == "" ) {
      $(this).parent(".inp-wrap").each(function() {
        $("label", this).toggleClass("label-focus")
      })
    }
  })

  $(".icon_down").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top + 200;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  AOS.init()

  AOS.init({
    disable: 'mobile',
  })
  


});
