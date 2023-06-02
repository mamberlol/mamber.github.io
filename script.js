ScrollReveal().reveal('.bottom', { delay: 375, origin:'bottom',reset: false, distance:'200px' });
ScrollReveal().reveal('.top', { delay: 375, origin:'top',reset: false, distance:'200px' });
ScrollReveal().reveal('.left', { delay: 375, origin:'left',reset: false, distance:'200px' });
ScrollReveal().reveal('.right', { delay: 375, origin:'right',reset: false, distance:'200px' });

var lastDivId = null;

function toggleDiv(divId) {
    var div = document.getElementById(divId);

    if (lastDivId !== null) {
        var lastDiv = document.getElementById(lastDivId);
        lastDiv.classList.add("hidden");
    }

    div.classList.remove("hidden");
    lastDivId = divId;
}


$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });