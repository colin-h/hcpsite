$(document).foundation();

$(document).ready(function() {

  $("#slider").owlCarousel({

      navigation : true, // Show next and prev buttons
      autoPlay : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});


// $(document).ready(function(){
//   $('.single-item').slick({
//     autoPlay : true,
//     autoPlaySpeed : 5000,
//     dots : true,
//     arrows : true,
//   });
// });
