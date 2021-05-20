$(document).ready(function () {
  //FORM SELECT
  $('select').formSelect(); // https://materializecss.com/select.html
  // MODAL
  $('.modal').modal();
  // TABS
  $('ul.tabs').tabs();
  // SCROLLSPY
  $('.scrollspy').scrollSpy();

  $('.fixed-action-btn').floatingActionButton();

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function () {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          var headerHeight = 0;
          if ($(window).width() < 767) {
            headerHeight = 80;
          }
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top - headerHeight,
            },
            1000
          );
        }
      }
    });

  $(document).click(function (e) {
    $('.site-wrapper').removeClass('show-menu');
  });

  $('a.btn.responsive-menu').click(function (e) {
    e.stopPropagation();
    $('.site-wrapper').toggleClass('show-menu');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  });

  $(window).resize(function () {
    if ($(this).width() > 1023) {
      $('.navigation-header').hide();
    } else {
      $('.navigation-header').show();
    }
  });
});

// MixItUp 3
$(function () {
  $('#Container').mixItUp({
    load: {
      // filter: 'all'
      filter: 'all',
    },
    controls: {
      toggleFilterButtons: false,
    },
  });
});
