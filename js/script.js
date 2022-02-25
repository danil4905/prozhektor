//Изменение каруселей

 $(document).ready(function(){

	 $("#phone").mask("+7 (999) 999-9999");
	 function onEntry(entry) {
		 entry.forEach(change => {
			 if (change.isIntersecting) {
				 change.target.classList.add('element-show');
			 }
		 });
	 }
	 let options = { threshold: [0.5] };
	 let observer = new IntersectionObserver(onEntry, options);
	 let elements = document.querySelectorAll('.element-animation');
	 for (let elm of elements) {
		 observer.observe(elm);
	 }
 });
document.getElementById("horizontal-scroller")
	.addEventListener('wheel', function(event) {
		if (event.deltaMode == event.DOM_DELTA_PIXEL) {
			var modifier = 1;
			// иные режимы возможны в Firefox
		} else if (event.deltaMode == event.DOM_DELTA_LINE) {
			var modifier = parseInt(getComputedStyle(this).lineHeight);
		} else if (event.deltaMode == event.DOM_DELTA_PAGE) {
			var modifier = this.clientHeight;
		}
		if (event.deltaY != 0) {
			// замена вертикальной прокрутки горизонтальной
			this.animate({scrollLeft: modifier * event.deltaY},100);

			 this.scrollLeft += modifier * event.deltaY;
			event.preventDefault();
		}
	});

//Скролл по пунктам страницы

function yScroll(){
	var header = document.querySelector("#header");
		yPos = window.pageYOffset;

}
window.addEventListener("scroll", yScroll);



//Выделение активного раздела

jQuery(window).scroll(function(){
        var $sections = $('section[id]');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-80;
        	bottom = top +$(el).height();
        	scroll = $(window).scrollTop();
        	id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.header-menu__link--active').removeClass('header-menu__link--active');
			$('a[href="#'+id+'"]').addClass('header-menu__link--active');
        }
    })
 });



//Навигация по разделам

$("#header-menu__list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top},10);
    });
