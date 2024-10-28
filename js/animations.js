document.addEventListener("DOMContentLoaded", () => {
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
      { duration: 0.8, y: 100, opacity: 0, ease: "power1.inOut" },
      { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
    )
    .fromTo(
      ".hero__title p",
      { duration: 0.8, y: 100, opacity: 0, ease: "power1.inOut" },
      { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
    )
    .fromTo(
      ".hero__cta",
      { duration: 0.8, y: 100, opacity: 0, ease: "power1.inOut" },
      { y: 0, opacity: 1, ease: "power1.inOut", duration: 0.8 }
    );
});
