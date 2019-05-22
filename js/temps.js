// jaz
		function animatePrevSlider(duration){

		var widthBase = $(window).width()/100;

		// CURRENT  SLIDE
			var bg = $(".slick-current .slider-bg");
			var cScreen = $(".slick-current .slider-img img");
			var globalText = $(".slick-current .slider-text");

						TweenMax
						.fromTo(bg, duration/1000,
							{x:"0",opacity:1},
							{x:30*widthBase,opacity:1, delay:duration/1000/4, ease:Power2.easeOut, onComplete:initBG}
						)
						function initBG(){
							bg.css("transform", "translateY(0)")
						}

						TweenMax
						.fromTo(cScreen, duration/1000,
							{x:"0",opacity:1},
							{x:20*widthBase,opacity:1, ease:Power1.easeOut, delay:0, onComplete:initScreen}
						)
						function initScreen(){
							cScreen.css("transform", "translateY(0)")
						}

						var tl = new TimelineMax({repeat:0, onComplete:initGlobalText});

						tl
						.to(globalText, duration/1000/20,  // duration 0.5
							{x:-1*widthBase,opacity:1, ease: Power0.easeNone}
						)
						.to(globalText, duration/1000/2,  // duration 0.5
							{x:0,opacity:1,  ease:Power1.easeOut}
						)

						function initGlobalText(){
							globalText.css("transform", "translateX(0)")
						}

			// prev (left) SLIDER
			var prevSlide = $(".slick-current").prev();
			var prevBg = prevSlide.find(".slider-bg");
			var prevScreen = prevSlide.find(".slider-img img");
			var prevGlobalText = prevSlide.find(".slider-text");

			TweenMax
			.fromTo(prevBg, duration/1000,
				{x:-30*widthBase,opacity:1},
				{x:"0",opacity:1, ease:Power2.easeOut,delay:duration/1000/3, onComplete:initprevBG}
			)

			function initprevBG(){
				prevBg.css("transform", "translateY("+ -50*widthBase +")")
			}
		}

			// *********** NEXT ARROW ************
			function animateNextSlider(duration){
				var widthBase = $(window).width()/100;

				// CURRENT  SLIDE
				var bg = $(".slick-current .slider-bg");
				var screenShot = $(".slick-current .slider-img img");
				var globalText = $(".slick-current .slider-text");

				TweenMax
				.fromTo(bg, duration/1000,
					{x:"0",opacity:1},
					{x:-30*widthBase,opacity:1, ease:Power2.easeOut, onComplete:initBG}
				)
				function initBG(){
					bg.css("transform", "translateY(0)")
				}

				TweenMax
				.fromTo(screenShot, duration/1000,
					{x:"0",opacity:1},
					{x:-20*widthBase,opacity:1, ease:Power1.easeOut, delay:0, onComplete:initScreen}
				)
				function initScreen(){
					screenShot.css("transform", "translateY(0)")
				}

				var tl = new TimelineMax({repeat:0, onComplete:initGlobalText});

				tl
				.to(globalText, duration/1000/2,  // duration 0.5
					{x:20*widthBase,opacity:1, ease: Power0.easeNone}
				)
				.to(globalText, duration/1000/2,  // duration 0.5
					{x:"0",opacity:1,  ease:Power1.easeOut}
				)

				function initGlobalText(){
					globalText.css("transform", "translateX(0)")
				}

				// NEXT SLIDE

				var nextSlide = $(".slick-current").next();
				var nextBg = nextSlide.find(".slider-bg");
				var nextScreen = nextSlide.find(".slider-img img");
				var nextGlobalText = nextSlide.find(".slider-text");


				TweenMax
				.fromTo(nextScreen, duration/1000/2,
					{x:20*widthBase,opacity:1},
					{x:"0",opacity:1, ease:Power1.easeOut,delay:duration/1000/2.5, onComplete:initNextScreen}

				)
				function initNextScreen(){
					nextScreen.css("transform", "translateX(0)")
				}

				TweenMax
				.fromTo(nextGlobalText, duration/1000/2,
					{x:20*widthBase,opacity:1},
					{x:"0",opacity:1, ease:Power2.easeOut,delay:duration/1000/8, onComplete:initNextGlobalText}
				)
				function initNextGlobalText(){
					nextGlobalText.css("transform", "translateX(0)")
				}

				TweenMax
				.fromTo(nextBg, duration/1000/2.5,
					{x:20*widthBase,opacity:1},
					{x:"0",opacity:1, ease:Power2.easeOut,delay:duration/1000/2.5, onComplete:initNextBG}
				)
				function initNextBG(){
					nextBg.css("transform", "translateY("+ -50*widthBase +")")
				}

		};
