document.addEventListener("DOMContentLoaded", function() {
  var contactarBtn = document.getElementById("contactarBtn");

  contactarBtn.addEventListener("mouseover", function() {
    contactarBtn.classList.remove("btn-dark");
    contactarBtn.classList.add("btn-outline-dark");
  });

  contactarBtn.addEventListener("mouseout", function() {
    contactarBtn.classList.remove("btn-outline-dark");
    contactarBtn.classList.add("btn-dark");
  });
});


$(document).ready(function() {
  $('.icono-container').hover(
    function() {
      $(this).addClass('hovered');
    },
    function() {
      $(this).removeClass('hovered');
    }
  );
});
