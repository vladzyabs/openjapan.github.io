// header scroll



(function () {
	const header = document.querySelector('.header');
	function setScrollHeader() {
		if (window.pageYOffset > 50) {
			header.classList.add('header_scroll')
		}
	};
	setScrollHeader();
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header_scroll')
		}
		else {
			header.classList.remove('header_scroll')
		}
	}
}());


// burger 
(function () {

	const burgerItem = document.querySelector('.burger');
	const burgerLine = document.querySelectorAll('.burger__line');
	const menu = document.querySelector('.header__nav');
	const link = document.querySelectorAll('.header__link');


	let active = false;

	const openMenu = () => {
		menu.classList.add('header__nav_active')
		for ( let i = 0; i < burgerLine.length; i++) {
			burgerLine[i].classList.add('burger__line-close')
		}
		
		active = true
	}
	const closeMenu = () => {
		menu.classList.remove('header__nav_active')
		for ( let i = 0; i < burgerLine.length; i++) {
			burgerLine[i].classList.remove('burger__line-close')
		}
		active = false
	}

	burgerItem.addEventListener('click', () => {
		(!active) ? openMenu() : closeMenu()
	})
	for ( let i = 0; i < link.length; i++) {
		link[i].addEventListener('click', () => {
			closeMenu()
		})
	}
	window.addEventListener('scroll', () => {
		closeMenu()
	})

}());

// planned scrolling

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());