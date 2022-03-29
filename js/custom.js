
$(document).ready(function () {
    // Main Hero slider Start
    $("#mySlider").slick({
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        centerMode: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,

            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                dots: true,
                infinite: true,

            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1000,
                centerMode: false,
            }
        }]
    });
    // Main Hero slider end

    // Featured Proudct Slider Start
    $(".product-slider").slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,

                }
            },

            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    })
    // Featured Proudct Slider End


    // Quick Buy Items Slider Start
    $(".item-slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,

                }
            },

            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    })
    // Quick Buy Items Slider End

});