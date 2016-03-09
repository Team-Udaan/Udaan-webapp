$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    
    //The default actions needed for materialize property usage
    $('.modal-trigger').leanModal();
    $(".button-collapse").sideNav();
    var car1=$("#firstcaro");
      car1.owlCarousel({
 	items : 3,
    itemsCustom : true,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
      autoPlay: 4000,
      singleItem:true,
      itemsDesktop: true,
      scrollPerPage:true,
      paginationSpeed : 1800,
  	});

    var car2=$("#seccaro");
      car2.owlCarousel({
 	things : 5,
    itemsCustom : true,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
      autoPlay: 5000,
      singleItem:true,
      itemsDesktop: true,
      scrollPerPage:true,
      paginationSpeed : 1800,
  	});
  });
       