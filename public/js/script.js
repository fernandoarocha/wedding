(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update header style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var mainHeader = $('.main-header').height();
			var windowpos = $(window).scrollTop();
			if (windowpos >= mainHeader) {
				$('.sticky-header').addClass('now-visible');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.sticky-header').removeClass('now-visible');
				$('.scroll-to-top').fadeOut(300);
			}
		}
		
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	
	
	//Modal
	$('#modal1').on('click', function(){
		$('.modal-content').append(' <section class="map-section"> <div class="auto-container"> <div class="map-container"> <div class="map-canvas"data-zoom="17"data-lat="-19.921253"data-lng="-43.951914"data-type="roadmap"data-hue="#ffc400"data-title="Igreja São Sebastião"data-content=""style="height: 460px; width: 100%"> </div> </div> </div> </section>');
	});

	
	//Revolution Slider
	if($('.main-slider .tp-banner').length){

		jQuery('.main-slider .tp-banner').show().revolution({
			dottedOverlay:"yes",
			delay:10000,
			startwidth:1200,
			startheight:830,
			hideThumbs:600,
			
			thumbWidth:80,
			thumbHeight:50,
			thumbAmount:5,
			
			navigationType:"bullet",
			navigationArrows:"0",
			navigationStyle:"preview3",
			
			touchenabled:"on",
			onHoverStop:"off",
			
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
			
			parallax:"mouse",
			parallaxBgFreeze:"on",
			parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
			
			keyboardNavigation:"off",
			
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:40,
			
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
			
			shadow:0,
			fullWidth:"on",
			fullScreen:"off",
			
			spinner:"spinner4",
			
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			
			shuffle:"off",
			
			autoHeight:"off",
			forceFullWidth:"on",
			
			hideThumbsOnMobile:"on",
			hideNavDelayOnMobile:1500,
			hideBulletsOnMobile:"on",
			hideArrowsOnMobile:"on",
			hideThumbsUnderResolution:0,
			
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			videoJsPath:"",
			fullScreenOffsetContainer: ""
	  });
		
	}


	//Event Countdown Timer
	if($('.time-countdown').length){  
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%m</span>Meses</div>' + '<div class="counter-column"><span class="count">%d</span>Dias</div> ' + '<div class="counter-column"><span class="count">%H</span>Horas</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutos</div>  ' + '<div class="counter-column"><span class="count">%S</span>Segundos</div>'));
		});
	 });
	}

	//Menu Slide
	var navbarheight = $(".main-menu").outerHeight()+1;
	var menuItems = $('nav li a');
	menuItems.click(function(e){
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top-navbarheight+25;
		$('body,html').stop().animate({ scrollTop: offsetTop }, 1000, 'easeInOutExpo');
		e.preventDefault();
	});

	//Wishes Slider With Custom Pager
	if($('.wishes-area .slider').length){

	}


	//Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				},
				1200:{
					items:6
				}
			}
		});


		$('.sponsors-carousel .owl-stage').css('width', '315px')
	}
	
	
	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	//Three Column Carousel
	if ($('.three-column-carousel').length) {
		$('.three-column-carousel').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 6000,
			smartSpeed: 700,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				760:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	
	//Gallery Carousel
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			loop:false,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				},
				1400:{
					items:6
				}
			}
		});    		
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	
	
	//Masonary
	function enableMasonry() {
		if($('.masonry-items-container').length){
	
			var winDow = $(window);
			// Needed variables
			var $container = $('.masonry-items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : 0 
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.bind('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	
	enableMasonry();
	
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});

/* ==========================================================================
 Firebase methods
 ========================================================================== */

	var signInButton = document.getElementById('sign-in-button');
	var signOutButton = document.getElementById('sign-out-button');
	var splashPage = document.getElementById('page-splash');
	var userSplash = document.getElementById('user-logged');
	var sendmessage = document.getElementById('send-message');
	var recentPostsSection = document.getElementById('leavemessage');
	var listeningFirebaseRefs = [];

	// Bind sing in button
	signInButton.addEventListener('click', function() {
		var provider = new firebase.auth.FacebookAuthProvider();
		// [END createprovider]
		// [START addscopes]
		provider.addScope('user_birthday');
		// [END addscopes]
		// [START signin]

		firebase.auth().signInWithPopup(provider).then(function(result) {
			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;

			location.reload();

		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// [START_EXCLUDE]
			if (errorCode === 'auth/account-exists-with-different-credential') {
				alert('You have already signed up with a different auth provider for that email.');
				// If you are using multiple auth providers on your app you should handle linking
				// the user's accounts here.
			} else {
				console.error(error);
			}
			// [END_EXCLUDE]
		});
		
	});

	signOutButton.addEventListener('click', function(){
		firebase.auth().signOut();
		location.reload();
	});

	sendmessage.addEventListener('click', function(){
		var message = $('#user-message').val();
		newPostForCurrentUser(message);
	});


	// Listen for auth state changes
	firebase.auth().onAuthStateChanged(onAuthStateChanged);
	var currentUID;

	function onAuthStateChanged(user) {
		// We ignore token refresh events.
		if (user && currentUID === user.uid) {
			return;
		}
		cleanupUi();

		if (user) {
			currentUID = user.uid;
			splashPage.style.display = 'none';
			userSplash.style.display = '';

			writeUserData(user.uid, user.displayName, user.email, user.photoURL);
			startDatabaseQueries();
		} else {
			// Display the splash page where you can sign-in.
			splashPage.style.display = '';
			userSplash.style.display = 'none';
			startDatabaseQueries();
		}
	}

	function newPostForCurrentUser(text) {
		// [START single_value_read]
		var userId = firebase.auth().currentUser.uid;
		return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
			var username = snapshot.val().username;
			// [START_EXCLUDE]
			return writeNewPost(firebase.auth().currentUser.uid, username,
				firebase.auth().currentUser.photoURL, text);
			// [END_EXCLUDE]
		});
		// [END single_value_read]
	}

	function writeNewPost(uid, username, picture, body) {
		// A post entry.
		var postData = {
			author: username,
			uid: uid,
			body: body,
			starCount: 0,
			authorPic: picture
		};

		// Get a key for a new Post.
		var newPostKey = firebase.database().ref().child('posts').push().key;

		// Write the new post's data simultaneously in the posts list and the user's post list.
		var updates = {};
		updates['/posts/' + newPostKey] = postData;
		updates['/user-posts/' + uid + '/' + newPostKey] = postData;

		firebase.database().ref().update(updates);

		location.reload();
	}

	/**
	 * Writes the user's data to the database.
	 */
	// [START basic_write]
		function writeUserData(userId, name, email, imageUrl) {
			firebase.database().ref('users/' + userId).set({
				username: name,
				email: email,
				profile_picture : imageUrl
			});
			$('#user-img').attr('src', imageUrl);
			$('#user-name').text(name);

		}
	// [END basic_write]

	/**
	 * Starts listening for new posts and populates posts lists.
	 */
	function startDatabaseQueries() {
		var recentPostsRef = firebase.database().ref('posts').limitToLast(20);
		var ul = $('.slider-message');

		var fetchPosts = function(postsRef, sectionElement) {
			postsRef.on('child_added', function(data) {
				var author = data.val().author || 'Anonymous';
				ul.append(createPostElement(data.key, data.val().body, author, data.val().authorPic));
			});
		};

		fetchPosts(recentPostsRef, recentPostsSection);
		listeningFirebaseRefs.push(recentPostsRef);
	}


	function createPostElement(postId, body, text, authorPic) {
		var html = '<div class="inner-box"> <figure class="author-thumb"><img src="" class="image-message" alt=""></figure> <div class="content"> <div class="slide-text"></div> <div class="info"> <div class="author-title title"></div></div></div></div>';

		var slider = document.createElement('li');
		slider.className = 'slide-item';
		slider.innerHTML = html;


		var message = slider.getElementsByClassName('slide-text')[0].innerText = body;
		var person = slider.getElementsByClassName('title')[0].innerText = text;
		var picture = slider.getElementsByClassName('image-message')[0].src = authorPic;


		return slider;
	}

	function cleanupUi() {
		$('.slider-message li').remove();
		$('.slider-message div').remove();
		$('.slider-message').removeClass('owl-carousel owl-theme owl-loaded');

		mountSlider();
	}

	function mountSlider(){
	var timeout = setTimeout(function () {
			var slider1 = $('.slider-message').owlCarousel({
				loop:true,
				margin:20,
				nav:true,
				autoplayHoverPause:false,
				autoplay: 6000,
				smartSpeed: 700,
				navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					760:{
						items:2
					},
					1024:{
						items:3
					},
					1200:{
						items:3
					}
				}
			});
			clearTimeout(timeout);
		},3000)
	}

})(window.jQuery);