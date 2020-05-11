
(function ($) {
  'use strict'

  // Sticky menu
  var $window = $(window)
  $window.on('scroll', function () {
    var scroll = $window.scrollTop()
    if (scroll < 300) {
      $('.sticky').removeClass('is-sticky')
    } else {
      $('.sticky').addClass('is-sticky')
    }
  })

  // Off Canvas Open close
  $('.mobile-menu-btn').on('click', function () {
    $('body').addClass('fix')
    $('.off-canvas-wrapper').addClass('open')
  })

  $('.btn-close-off-canvas,.off-canvas-overlay,.mobile-menu>li>a').on('click', function () {
    $('body').removeClass('fix')
    $('.off-canvas-wrapper').removeClass('open')
  })


  // Our Partners logos 

  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('.main-menu a,.mobile-menu a').on('click', function () {
      var $that = $(this)
      $that.parent('.main-menu,.mobile-menu').find(".active").removeClass("active")
      $that.parent().addClass("active")
    })
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $('.main-menu a,.mobile-menu a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
        menu = target;
      let $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top + 2
      }, 10, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
    // //Change menu active on click
    // $('.main-menu a').on('click', function () {
    //   debugger
    //   $('.main-menu ').find('li.active').removeClass('active');
    //   $(this).parent('li').addClass('active');
    // });

    $('.customer-logos').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }]
    });

  });


  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.main-menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos + 300) {
        $('.main-menu ul li').removeClass("active");
        debugger
        currLink.parent('li').addClass("active");
      }
      else {
        currLink.parent().removeClass("active");
      }
    });
    if($(window).width() <= 767){
      $('.mobile-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos + 300) {
          $('.mobile-menu li').removeClass("active");
          debugger
          currLink.parent('li').addClass("active");
        }
        else {
          currLink.parent().removeClass("active");
        }
      });
    } 

  }

  // offcanvas mobile menu
  var $offCanvasNav = $('.mobile-menu')

  var $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown')

  /* Add Toggle Button With Off Canvas Sub Menu */
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="menu-expand"><i></i></span>')

  /* Close Off Canvas Sub Menu */
  $offCanvasNavSubMenu.slideUp()

  /* Category Sub Menu Toggle */
  $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
    var $this = $(this)
    if (
      $this
        .parent()
        .attr('class')
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr('href') === '#' || $this.hasClass('menu-expand'))
    ) {
      e.preventDefault()
      if ($this.siblings('ul:visible').length) {
        $this.parent('li').removeClass('active')
        $this.siblings('ul').slideUp()
      } else {
        $this.parent('li').addClass('active')
        $this
          .closest('li')
          .siblings('li')
          .removeClass('active')
          .find('li')
          .removeClass('active')
        $this
          .closest('li')
          .siblings('li')
          .find('ul:visible')
          .slideUp()
        $this.siblings('ul').slideDown()
      }
    }
  })

  // hero slider active js
  $('.hero-slider-active').slick({
    // fade: true,
    speed: 1000,
    dots: false,
    arrows: false,
    adaptiveHeight: true,
  })

  // testimonial cariusel active js
  $('.testimonial-carousel-active').slick({
    speed: 1000,
    autoplay: false,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
  })


  // brand logo carousel active js
  $('.brand-logo-carousel').slick({
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  })

  // Background Image JS start
  var bgSelector = $('.bg-img')
  bgSelector.each(function (index, elem) {
    var element = $(elem)

    var bgSource = element.data('bg')
    element.css('background-image', 'url(' + bgSource + ')')
  })

  // mailchimp active js
  $('#mc-form').ajaxChimp({
    language: 'en',
    callback: mailChimpResponse,
    // ADD YOUR MAILCHIMP URL BELOW HERE!
    url: 'https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'
  })

  // mailchimp active js
  function mailChimpResponse(resp) {
    if (resp.result === 'success') {
      $('.mailchimp-success')
        .html('' + resp.msg)
        .fadeIn(900)
      $('.mailchimp-error').fadeOut(400)
    } else if (resp.result === 'error') {
      $('.mailchimp-error')
        .html('' + resp.msg)
        .fadeIn(900)
    }
  }

  // Counter To Up JS
  $('.odometer').each(function () {
    $(this).appear(function () {
      var $this = $(this)

      var $dataValue = $this.data('count')

      setTimeout(function () {
        $this.html($dataValue)
      }, 1000)
    })
  })

  // waypoint active js
  function teamMember() {
    if ($window.width() < 575) {
      $('.team-member').waypoint(
        function () {
          $(this.element).toggleClass('team-open')
        }, {
        offset: '75%'
      }
      )
    }
  }
  teamMember()

  // Scroll to top active js
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.scroll-top').removeClass('not-visible')
    } else {
      $('.scroll-top').addClass('not-visible')
    }
  })
  $('.scroll-top').on('click', function (event) {
    $('html,body').animate({
      scrollTop: 0
    },
      100
    )
  })

  $window.resize(function () {
    teamMember()
  })

  // wow js active
  new WOW().init()

})(jQuery)

$(window).on("load", function () {/* activate jquery isotope */
  var $container = $("#posts").isotope({
    itemSelector: ".item",
    isFitWidth: true
  });

  $container.isotope({ filter: "*" });
  // filter items on button click
  $("#filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $container.isotope({ filter: filterValue });
  });
  $(".tab-button").on("click", function () {
    $(".tab-button.active").removeClass("active");
    $(this).addClass("active");
  });
  var $grid = $("#posts").isotope({
    itemSelector: ".item",
    percentPosition: true
  });




});