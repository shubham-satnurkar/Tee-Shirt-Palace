
$(document).ready(function () {
    // Main Hero slider Start
    $("#mySlider").slick({
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
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
                dots: false,
                infinite: true,

            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
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


    // your T-shirt your idea section start
    $(".design-idea-slider").slick({
        dot: false,
        arrow:true,
        speed : 300,
        autoplay:true,
        autoplaySpeed:1000,
        infinite:true,
    })
    // your T-shirt your idea section end



    // Search Bar Onclick events...
    $searchBtn = $(".searchBtn");
    $closeBtn = $(".closeBtn");
    $searchForm = $(".search-form");
    // When click On Search Icon Search Bar Show and Cose Button Show
    $searchBtn.on('click', function(){
        $searchForm.addClass("show");
        $searchBtn.hide();
        $closeBtn.show();
    });
   // When click On Close Icon Search Bar hide and Cose Button hide
    $closeBtn.on('click', function(){
        $searchForm.removeClass("show");
        $searchBtn.show();
        $closeBtn.hide();
    });
    

    
});




// Subscribe/ Join Us Form validation
$subscibeForm = $("#subscribe");
$emailNode=$("#email");
$errorNode= $("#error");
$border1 = "1px solid #f00";
$border2 = "1px solid #0f0";

function subscribe(){
    $errorNode.text("");
    email = $emailNode.val();
    subStr = email.substring(email.indexOf('@')+1);
    console.log(subStr);
    if(email == ""){
        $errorNode.text("this field is required");
        $emailNode.css('border', $border1);
        return false
    }
    else if(!email.includes('@') || subStr == ''){
        $errorNode.text("Please Put Valid Email Id");
        $emailNode.css('border', $border1);
        return false
    }
    else{
        $emailNode.css('border', $border2);
        return true
    }
}

function formValidate(){
    let st1 = subscribe();
    return st1;
}
$subscibeForm.submit(function(){
    return formValidate();
});