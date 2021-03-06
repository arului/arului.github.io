$(document).ready(function() {
  if (
    localStorage !== null &&
    localStorage.getItem("theme") !== null &&
    typeof localStorage.getItem("theme") !== "undefined"
  ) {
    $("#body-content").toggleClass(localStorage.getItem("theme"));
    $("#switch").toggleClass(localStorage.getItem("toggle-on"));
  }

  $(".toggle").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("toggle-on");
    $("#body-content").toggleClass("dark");
    setTimeout(function() {
      if (localStorage !== null) {
        if ($("#body-content").hasClass("dark")) {
          localStorage.setItem("theme", "dark");
          localStorage.setItem("toggle-on", "toggle-on");
        } else {
          localStorage.setItem("theme", "");
          localStorage.setItem("toggle-on", "");
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
  $(".select-menu").change( function(event) {
    if(event !== null && event.currentTarget !== null && event.currentTarget.value !== null && event.currentTarget.value !== ""
      && event.currentTarget.value.indexOf("lab") > 0){
      $('<a href="'+ event.currentTarget.value +'" target="_blank">External Link</a>')[0].click();
    }else{
    window.location = event.currentTarget.value;
    }
  });
  pageSize = 2;
  incremSlide = 3;
  startPage = 0;
  numberPage = 0;

  var pageCount = $(".line-content").length / pageSize;
  var totalSlidepPage = Math.floor(pageCount / incremSlide);

  for (var i = 0; i < pageCount; i++) {
    $("#pagin").append('<li><a href="#">' + (i + 1) + "</a></li> ");
    if (i > pageSize) {
      $("#pagin li")
        .eq(i)
        .hide();
    }
  }

  var prev = $("<li/>")
    .addClass("prev")
    .html('<i class="fa fa-backward">')
    .click(function() {
      startPage -= 3;
      incremSlide -= 3;
      numberPage--;
      slide();
    });

  prev.hide();

  var next = $("<li/>")
    .addClass("next")
    .html('<i class="fa fa-forward">')
    .click(function() {
      startPage += 3;
      incremSlide += 3;
      numberPage++;
      slide();
    });

  $("#pagin")
    .prepend(prev)
    .append(next);

  $("#pagin li")
    .first()
    .find("a")
    .addClass("current");

  slide = function(sens) {
    $("#pagin li").hide();

    for (t = startPage; t < incremSlide; t++) {
      $("#pagin li")
        .eq(t + 1)
        .show();
    }
    if (startPage == 0) {
      next.show();
      prev.hide();
    } else if (numberPage == totalSlidepPage) {
      next.hide();
      prev.show();
    } else {
      next.show();
      prev.show();
    }
  };

  showPage = function(page) {
    $(".line-content").hide();
    $(".line-content").each(function(n) {
      if (n >= pageSize * (page - 1) && n < pageSize * page) $(this).show();
    });
  };

  showPage(1);
  $("#pagin li a")
    .eq(0)
    .addClass("current");

  $("#pagin li a").click(function() {
    $("#pagin li a").removeClass("current");
    $(this).addClass("current");
    showPage(parseInt($(this).text()));
  });
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-155763128-1');  
  
  $(".quotes-chart ul").on("click", ".init", function() {
    $(this).closest("ul").children('li:not(.init)').toggle();
});

var allOptions = $(".quotes-chart ul").children('li:not(.init)');
$(".quotes-chart ul").on("click", "li:not(.init)", function() {
    allOptions.removeClass('selected');
    $(this).addClass('selected');
    $(".quotes-chart ul").children('.init').html($(this).html());
    allOptions.toggle();
});  
});
function myFunction() {
              var x = document.getElementById("myGrid");
              if (x.className === "erich-row") {
                x.className = "erich-row-padding";
              } else { 
                x.className = x.className.replace("erich-row-padding", "erich-row");
              }
            }
            
            // Open and close sidebar
            function erich_open() {
              document.getElementById("mySidebar").style.width = "100%";
              document.getElementById("mySidebar").style.display = "block";
            }
            
            function erich_close() {
              document.getElementById("mySidebar").style.display = "none";
            }


