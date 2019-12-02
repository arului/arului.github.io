$(document).ready(function() {
  window.ga = function() {
    ga.q.push(arguments);
  };
  ga.q = [];
  ga.l = +new Date();
  ga("create", "UA-XXXXX-Y", "auto");
  ga("set", "transport", "beacon");
  ga("send", "pageview");

  if (
    localStorage !== null &&
    localStorage.getItem("theme") !== null &&
    typeof localStorage.getItem("theme") !== "undefined"
  ) {
    $("#body-content").toggleClass(localStorage.getItem("theme"));
  }

  $(".toggle").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("toggle-on");
    $("#body-content").toggleClass("dark");
    setTimeout(function() {
      if (localStorage !== null) {
        if ($("#body-content").hasClass("dark")) {
          localStorage.setItem("theme", "dark");
        } else {
          localStorage.setItem("theme", "");
        }
      }
    }, 1000);
  });

  let spans = document.querySelectorAll(".word span");
  spans.forEach((span, idx) => {
    span.addEventListener("click", e => {
      e.target.classList.add("active");
    });
    span.addEventListener("animationend", e => {
      e.target.classList.remove("active");
    });

    // Initial animation
    setTimeout(() => {
      span.classList.add("active");
    }, 750 * (idx + 1));
  });
  $(.select-menu).change( function(event) {
    console.log(event);
  });
});

