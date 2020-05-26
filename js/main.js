$(document).ready(function () {
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function () {
            // On-page links
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                // Does a scroll target exist?
                if (target.length) {
                    var headerHeight = 0;
                    if ($(window).width() < 767) {
                        headerHeight = 80;
                    }
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top - headerHeight
                        },
                        1000
                    );
                }
            }
        });

    $(document).click(function (e) {
        $(".site-wrapper").removeClass("show-menu");
    });

    $("a.btn.responsive-menu").click(function (e) {
        e.stopPropagation();
        $(".site-wrapper").toggleClass("show-menu");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $("body").addClass("scrolled");
        } else {
            $("body").removeClass("scrolled");
        }
    });

    var $grid = $(".cm-portfolio-listing").isotope({
        itemSelector: ".cm-portfolio-item",
        percentPosition: true,
        masonry: {
            gutter: 15
        }
    });


    $(window).resize(function () {

        if ($(this).width() > 1023) {

            $('.navigation-header').hide();

        } else {

            $('.navigation-header').show();

        }

    });

    // filter items on button click
    $("#filters-container").on("click", ".cm-btn", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
        $(this)
            .siblings()
            .removeClass("active");
        $(this).addClass("active");
    });

    $(window).load(function () {
        setTimeout(function () {
            $('.cm-btn[data-filter="*"]').trigger("click");
        }, 250);
    });
});




