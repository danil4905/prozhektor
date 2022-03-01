//Изменение каруселей

$(document).ready(function () {
    let burger = document.getElementById('header__nav');
    let burgerBtn = $('.menu-burger__header');
    burger.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            burger.classList.remove('open-burger')
            burger.classList.add('closed-burger')
            document.getElementsByClassName('phone')[0].style.visibility = 'visible';
            burgerBtn.removeClass('open-menu')
            $('.wrapper').removeClass('wrapper--overlay');
            e.preventDefault();
            var id = $(e.target).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 10);
        }

    })

    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.wrapper').toggleClass('wrapper--overlay');
        if (burger.classList.contains('open-burger')) {
            burger.classList.remove('open-burger');
            burger.classList.add('closed-burger');
            document.getElementsByClassName('phone')[0].style.visibility = 'visible';
        } else {
            burger.classList.remove('closed-burger');
            burger.classList.add('open-burger');
            document.getElementsByClassName('phone')[0].style.visibility = 'hidden';
        }
    });
    $('#carousel-speakers').slick({
        infinite: true,
        dots: true,
        arrows: false
    });
    console.log(window.innerWidth)
    if (window.innerWidth < 990) {
        $('.about__list').slick({
            infinite: true,
            dots: true,
            arrows: false
        })
    }


    $("#phone").mask("+7 (999) 999-9999");

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
        observer.observe(elm);
    }

    console.clear();

    TweenLite.defaultEase = Linear.easeNone;
    var controller = new ScrollMagic.Controller();
    var tl = new TimelineMax();

    var ww = window.innerWidth;

    var noSlides = $(".horizontal__card").length-1;
    var slideWidth = $(".horizontal__card").width();
    console.log(slideWidth)
    var slideContainerWidth = slideWidth*noSlides+100-ww;

    console.log(noSlides, slideContainerWidth);

    var ww = window.innerWidth;


    var actionHorizontal = new TimelineMax()
        .to("#slideContainer", 1, {x: -slideContainerWidth})


    var horizontal = createHorizontal();

    function createHorizontal() {
        return new ScrollMagic.Scene({
            triggerElement: "#title__trigger",
            triggerHook: "onLeave",
            duration: slideContainerWidth
        })
            .setPin("#horizontal-scroller")
            .setTween(actionHorizontal)
            .addIndicators({
                colorTrigger: "white",
                colorStart: "white",
                colorEnd: "white",
            })
            .addTo(controller);

    }


    $(window).resize(function(){

        ww = window.innerWidth;
        slideContainerWidth = slideWidth*noSlides-ww;


        horizontal.destroy(true);
        horizontal = createHorizontal();

        console.log(ww, slideContainerWidth);

    });

});

//Скролл по пунктам страницы

function yScroll() {
    var header = document.querySelector("#header");
    yPos = window.pageYOffset;

}

window.addEventListener("scroll", yScroll);


//Выделение активного раздела

jQuery(window).scroll(function () {
    var $sections = $('section[id]');
    $sections.each(function (i, el) {
        var top = $(el).offset().top - 80;
        bottom = top + $(el).height();
        scroll = $(window).scrollTop();
        id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('a.header-menu__link--active').removeClass('header-menu__link--active');
            $('a[href="#' + id + '"]').addClass('header-menu__link--active');
        }
    })
});


//Навигация по разделам

$("#header-menu__list").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 10);
});
