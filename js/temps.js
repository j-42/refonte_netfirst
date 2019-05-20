// jaz
		function animatePrevSlider(duration){

		// CURRENT  SLIDE
			var bg = $(".slick-current .slider-bg");
			var screen = $(".slick-current .slider-img img");
			var globalText = $(".slick-current .slider-text");

						TweenMax
						.fromTo(bg, duration/1000,
							{x:"0",opacity:1},
							{x:"300",opacity:1, ease:Power2.easeOut, onComplete:initBG}
						)
						function initBG(){
							bg.css("transform", "translateY(0)")
						}

						TweenMax
						.fromTo(screen, duration/1000,
							{x:"0",opacity:1},
							{x:"200",opacity:1, ease:Power1.easeOut, delay:0, onComplete:initScreen}
						)
						function initScreen(){
							screen.css("transform", "translateY(0)")
						}

						var tl = new TimelineMax({repeat:0, onComplete:initGlobalText});

						tl
						.to(globalText, duration/1000/2,  // duration 0.5
							{x:"-100",opacity:1, ease: Power0.easeNone}
						)
						.to(globalText, duration/1000/2,  // duration 0.5
							{x:"0",opacity:1,  ease:Power1.easeOut}
						)

						function initGlobalText(){
							globalText.css("transform", "translateX(0)")
						}

			// prev SLIDE
			var prevSlide = $(".slick-current").prev();
			var prevBg = prevSlide.find(".slider-bg");
			var prevScreen = prevSlide.find(".slider-img img");
			var prevGlobalText = prevSlide.find(".slider-text");

			TweenMax
			.fromTo(prevBg, duration/1000/2.5,
				{x:"200",opacity:1},
				{x:"0",opacity:1, ease:Power2.easeOut,delay:duration/1000/2.5, onComplete:initprevBG}
			)
			function initprevBG(){
				prevBg.css("transform", "translateY(-500)")
			}

		}
//! jaz
