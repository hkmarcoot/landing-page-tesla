new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  onLeave: function (origin, destination, direction, trigger) {
    //alert("123");
    var loading2 = new TimelineMax();
    loading2
      .fromTo(
        ".upper",
        1,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
        "+=0.5"
      )
      .fromTo(
        ".lower",
        1,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
        "-=1"
      );
  },
});

document.addEventListener("DOMContentLoaded", function () {
  //click function
  var arrows = document.getElementsByClassName("arrow");
  for (i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function (e) {
      e.preventDefault();
      fullpage_api.moveSectionDown();
    });
  }
  //Effect
  var loading = new TimelineMax();
  loading
    .fromTo(
      ".upper h2",
      1,
      {
        autoAlpha: 0,
        y: 20,
      },
      {
        autoAlpha: 1,
        y: 0,
      }
    )
    .fromTo(
      ".upper p",
      1,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .fromTo(
      ".lower .btn1",
      1,
      {
        autoAlpha: 0,
        x: -20,
      },
      {
        autoAlpha: 1,
        x: 0,
      },
      "-=1"
    )
    .fromTo(
      ".lower .btn2",
      1,
      {
        autoAlpha: 0,
        x: 20,
      },
      {
        autoAlpha: 1,
        x: 0,
      },
      "-=1"
    )
    .fromTo(
      ".lower .arrow",
      1,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    );
});
