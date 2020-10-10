// Animation Text

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			}else {
				if(!animItem.classList.contains('_anim-no-hide'))
				animItem.classList.remove("_active")
			}
		}
	}
	function offset (el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft =window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

// Spoiler

 $(document).ready(function() {
 	$('.block__title').click(function(event) {
 		if($('.block__item').hasClass('one')){
 			$('.block__title').not($(this)).removeClass('.active');
 			$('.block__content').not($(this).next()).slideUp(300);
 		}
 		$(this).toggleClass('active').next().slideToggle(300);
 	});
 });

  $(document).ready(function() {
 	$('.news-block-spoiler').click(function(event) {
 		if($('.news-block').hasClass('one')){
 			$('.news-block-spoiler').not($(this)).removeClass('.active');
 			$('.news-block-content').not($(this).next()).slideUp(200);
 		}
 		$(this).toggleClass('active').next().slideToggle(300);
 	});
 });

 // плавное перемещение страницы к нужному блоку
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
 