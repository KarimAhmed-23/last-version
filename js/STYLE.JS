$(window).on("load", function () {

  $('.preloader').fadeOut(1000, function () {

    $(this).parent().fadeOut();

  });


});




$(document).ready(function () {

  $(".language").click(function () {

    $(".dropdown-conutry").slideToggle();

  });

  

  $('.work-slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    prevArrow: '<span class="prev-arrows"><i class="fas fa-angle-right"></i></span>',
    nextArrow: '<span class="next-arrows"><i class="fas fa-angle-left"></i></span>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [

      {
        breakpoint: 357,
        settings: {
          dots: false
        }
      }

    ]
  });







  $('.partenter-slider').slick({
    dots: false,
    infinite: false,
    accessibility: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    rtl: true,
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });




  $('.blog-slider').slick({
    dots: false,
    infinite: false,
    accessibility: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    rtl: true,
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]

  });



  $('.num-counter').counterUp({
    delay: 10,
    time: 1000
  });
	
  $(".system_description p").matchHeight();
  $(".pricing-description").matchHeight();
  $(".why-us-description").matchHeight();
  $(".partner-name").matchHeight();
  $(".blog-content").matchHeight();
  $(".footer-menu h5").matchHeight();
  $(".footer-menu-ul").matchHeight();
  $(".table-head .table-data p").matchHeight();
  $(".same-h").matchHeight();
	
	
	/*** calc width **/
	//var table_width = ($('.main-head').innerWidth()-($('.packages-count').innerWidth()))/4;
	//$('.packages-tables').innerWidth(table_width);
	
	$('.package-accordion-header').click(function(){
		if($(this).hasClass('active')){
		$(this).next(".package-accordion-body").css("display" , "block");	
			
		}else{
			
		
		$('.package-accordion-body').slideUp();
		$(this).next(".package-accordion-body").slideDown();
		$('.package-accordion-header').removeClass('active');
		$(this).addClass('active');
		
		}
		

		
	});
	
	
	$(".same-height").matchHeight()
	
	

  $('.common-questions-taps').slick({
    dots: false,
    infinite: false,
    accessibility: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
	
	rtl: true,
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2	
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
		centerMode: true,
        }
      }

    ]

  });
	
	
$(".common-questions-panels .common-questions-panel").hide();
$(".common-questions-panels .common-questions-panel:first-child").show();

$(".question-tabs").click(function(){
  
  $(".question-tabs").removeClass("active");
  $(this).addClass("active");
  
  var current_tab = $(this).attr("data-list");
  $(".common-questions-panels .common-questions-panel").hide();
  $("."+current_tab).fadeIn();
})

	
	
	$(".panel-items .accordion_header").click(function(){
		    let $next = $(this).next(".accordion_body");

	/*
    $(".panel-items .accordion_header").removeClass("active");
	$(".panel-items .accordion_body").slideUp();*/
   	$(this).parent().toggleClass("active");
	$(this).next(".accordion_body").slideToggle();
	$('.panel-items .accordion_body').not($next).slideUp().parent().removeClass('active');
	
		
		
  });

$('.slick-blog-item').slick({
	rtl: true,
	dots: false,
    accessibility: true,
    speed: 500,
	autoplay: true,
	autoplaySpeed: 2500,
});


												   
  $(".subject-uesr-comment .msg-content").click(function(){
  	let $next = $(this);
	$(this).toggleClass('more');
	$('subject-uesr-comment .msg-content').not($next).removeClass('more'); 	
  
  
  	
   });
	
	 $('.qtyminus').on('click', function(){
        let numProduct = Number($(this).parent().find($('.check-number')).val());
        if(numProduct > 3) $(this).parent().find($('.check-number')).val(numProduct - 1);
		 /*
		 $('.price-change').each(function(){
		var oldPrice = parseInt($(this).text());
		var	newPrice = oldPrice - 100;
		$(this).text(newPrice);	
		if ( oldPrice < newPrice ){
			$(this).text(oldPrice);
		}
		});
		*/
    });

    $('.qtyplus').on('click',function(){
        let numProduct = Number($(this).parent().find($('.check-number')).val());
       $(this).parent().find($('.check-number')).val(numProduct + 1);
		/*
		$('.price-change').each(function(){
		var oldPrice = $('.price-change');
		var newPrice = parseInt($(this).text());	
			
			newPrice += 1000;
				
			$(this).text(newPrice);
		});*/
		
    });
	/*

	$('.more-advantage-btn a').click(function(){
		
		var current_tab = $(this).attr("data-trget");
  		$("."+current_tab).addClass('active');
		
	});	
	$('.close-fusion-modal').click(function(){
		
		$('.more-advantage-btn a').each(function(){
			
			
			var current_tab = $(this).attr("data-trget");
  			$("."+current_tab).removeClass('active');
		})
		
	});
*/
	
	
	$('.sign-slider').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
		rtl: true,
		dots: true,
		infinite: true,
		arrows:false,
    	accessibility: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2500,
	
	});
	
 
	

	
});

 