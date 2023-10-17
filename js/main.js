jQuery(document).ready(function($) 
{

	setTimeout(function() { 
        $('body').addClass('is-visible');

        

    }, 1000);
	

	var data = $.getJSON( "json/data.json", function(response) {
	  	console.log( "success" );
	  	displayIntro(response);
	  	displayEntries(response);	
	  	displayCredits(response);
	  	setScrollReveal(response);

	  	

	})

	function setScrollReveal(arr) {
		

		var vFactor = arr.params.vFactor;
		//alert(vFactor);
		window.sr = new scrollReveal({ opacity: 0, vFactor: vFactor });

	}

	function displayIntro(arr) {
		var source   = $("#intro-template").html();
		var template = Handlebars.compile(source);

		var html    = template(arr.intro);
			$( ".intro-container" ).html(html);

		

	}

	function displayEntries(arr) {
		var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);

		var html    = template({entries:arr.entries});
			$( ".cbp_tmtimeline" ).html(html);

		
	}

	function displayCredits(arr) {
		var source   = $("#credits-template").html();
		var template = Handlebars.compile(source);

		var html    = template(arr.credits);
			$( ".credits" ).html(html);


	}

	//$(".video-container").fitVids();

	
   	// THIS IS EXECUTED ON RESIZE
   	// $(window).resize(function(){

    // });

   	// THIS IS EXECUTED DEPENDING ON WINDOW WIDTH
	// if($(window).width() > 500)
	// {
	// }

});
