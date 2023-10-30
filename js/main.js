jQuery(document).ready(function($) 
{

	setTimeout(function() { 
        $('body').addClass('is-visible');


		// const player = new Plyr('#player', {
		// 	controls: ['play', 'progress', 'current-time', 'duration', 'speed'],
		// 	volume: false, 
		// });

        const player = new Plyr('#player');
		const player2 = new Plyr('#player2');
		const player3 = new Plyr('#player3');
		const player4 = new Plyr('#player4');
		const player5 = new Plyr('#player5');
		const player6 = new Plyr('#player6');
		const player7 = new Plyr('#player7');
		const player8 = new Plyr('#player8');
		const player9 = new Plyr('#player9');
		const player10 = new Plyr('#player10');

		$('.owl-carousel').owlCarousel({
			loop:true,
			//margin:10,
			nav:true,
			autoplay: false,
			autoHeight: true,
			dots: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		})

		

		
			$headerImgTl.play()
		
		

		// ZOOM SUR LES IMAGES DISPOSANT DE LA CLASSE ZOOM
		// if ($(window).width() > 768 )
		// {
		// 	$(".zoom").click(function() 
		// 	{
		// 		zoom.to({
		// 			element: $(this)[0]
		// 		});
		// 	});
		// } 

		// $('.box').featherlight($content, configuration);

		//console.clear();
		
		
    }, 1000);


	





	var $headerImg = $('.opening'); 

	var $headerImgTl = new TimelineMax({ paused: true })
      .to($headerImg, 10, { scale: 1, force3D: false,  ease: "power4.out" });
     
	  clearWelldoneStage();
	  function clearWelldoneStage(){
		  var clearWelldoneStageTl = new TimelineMax();
		  clearWelldoneStageTl
			  .set($headerImg, {  scale: 1.1, force3D: false});
		
		  return clearWelldoneStageTl;
		 
	}

	var controller = new ScrollMagic.Controller();
	setTimeout(function() { 
		var $pop = $('.pop'); 

		var $popTl = new TimelineMax({ paused: true })
		.to($pop, 2, { autoAlpha: 1, y: "-=100%", ease: "power4.out" });

		clearPopStage();
		
		function clearPopStage(){
			var clearPopStageTl = new TimelineMax();
			clearPopStageTl
				.set($pop, {  autoAlpha: 1, y: "+=100%", force3D: false});
		
			return clearPopStageTl;
		}

		new ScrollMagic.Scene({triggerElement: ".pop-trigger"})
		.on("enter", function (event) {
			// alert('lol');
			$popTl.play();       
		}).triggerHook(0.6).addTo(controller);

    }, 2000);

	


	


	// zoom.to({
	// 	element: document.querySelector( 'h1' )
	// });

	// ZOOM SUR LES IMAGES DISPOSANT DE LA CLASSE ZOOM
	if ($(window).width() > 768 )
	{
		$(".zoom").click(function() 
		{
			zoom.to({
				element: $(this)[0]
			});
		});
	} 	



	

	var data = $.getJSON( "json/data.json", function(response) {
	  	// console.log( "success" );
	  	// displayIntro(response);
	  	displayEntries(response);	
	  	// displayCredits(response);
	  	setScrollReveal(response);

	  	

	})
	

	function setScrollReveal(arr) {
		

		var vFactor = arr.params.vFactor;
		//alert(vFactor);
		window.sr = new scrollReveal({ opacity: 0, vFactor: vFactor });

	}

	// function displayIntro(arr) {
	// 	var source   = $("#intro-template").html();
	// 	var template = Handlebars.compile(source);

	// 	var html    = template(arr.intro);
	// 		$( ".intro-container" ).html(html);

		

	// }

	function displayEntries(arr) {
		var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);

		var html    = template({entries:arr.entries});
			$( ".cbp_tmtimeline" ).html(html);

		
	}

	 

	// function displayCredits(arr) {
	// 	var source   = $("#credits-template").html();
	// 	var template = Handlebars.compile(source);

	// 	var html    = template(arr.credits);
	// 		$( ".credits" ).html(html);


	// }

	//$(".video-container").fitVids();

	
   	// THIS IS EXECUTED ON RESIZE
   	// $(window).resize(function(){

    // });

   	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	// if($(window).width() > 500)
	// {
	// }
	
});
