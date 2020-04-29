var $slider = $(".slider");

$(window).resize(function() {
  showslider();
});

function showslider() {
  if ($slider.data("owlCarousel") !== "undefined") {
    if (window.matchMedia("(max-width: 767px)").matches) {
      initialHomeSlider();
    } else {
      destroyHomeSlider();
    }
  }
}
showslider();

function initialHomeSlider() {
  $slider.addClass("owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
  });

  var $owlDots = $(".owl-dots");
  $owlDots.remove();
}

function destroyHomeSlider() {
  $slider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}
