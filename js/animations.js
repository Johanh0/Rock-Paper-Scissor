document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.querySelector(".play--btn");
  const heroView = document.querySelector(".hero");
  const gameView = document.querySelector(".game");

  const timeLine = gsap.timeline();
  //   Initial animation for all the content on the homepage
  timeLine
    .fromTo(
      ".nav",
      { duration: 0.8, y: -100, opacity: 0, ease: "power1.inOut" },
      { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
    )
    .fromTo(
      ".footer",
      { duration: 0.8, y: 100, opacity: 0, ease: "power1.inOut" },
      { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
    )
    .fromTo(
      ".hero__title h1",
      { duration: 0.8, y: 50, opacity: 0, ease: "power1.inOut" },
      { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
    )
    .fromTo(
      ".hero__title p",
      { duration: 0.8, y: 50, opacity: 0, ease: "power1.inOut" },
      { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
    )
    .fromTo(
      ".hero__cta",
      { duration: 0.8, y: 50, opacity: 0, ease: "power1.inOut" },
      { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
    );

  playBtn.addEventListener("click", () => {
    timeLine
      .fromTo(
        ".hero__cta",
        { duration: 0.8, y: 0, opacity: 1, ease: "power1.inOut" },
        { y: 50, opacity: 0, ease: "power1.inOut", duration: 0.8 }
      )
      .fromTo(
        ".hero__title p",
        { duration: 0.8, y: 0, opacity: 1, ease: "power1.inOut" },
        { y: 50, opacity: 0, ease: "power1.inOut", duration: 0.8 }
      )
      .fromTo(
        ".hero__title h1",
        { duration: 0.8, y: 0, opacity: 1, ease: "power1.inOut" },
        {
          y: 50,
          opacity: 0,
          ease: "power1.inOut",
          duration: 0.8,
          onComplete: () => showGameView(),
        }
      );
  });

  function showGameView() {
    // Disabled the view of the hero view
    heroView.style.display = "none";
    gameView.style.display = "flex";

    timeLine
      .fromTo(
        ".game__board--points",
        { duration: 0.8, y: 50, opacity: 0, ease: "power1.inOut" },
        { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
      )
      .fromTo(
        ".game__board--result",
        { duration: 0.8, y: 50, opacity: 0, ease: "power1.inOut" },
        { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
      )
      .fromTo(
        ".game__board--options",
        { duration: 0.8, y: 50, opacity: 0, ease: "power1.inOut" },
        { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
      )
      .fromTo(
        ".game__board--btn",
        { duration: 0.8, y: 50, opacity: 0, ease: "power1.inOut" },
        { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
      );
  }
});
