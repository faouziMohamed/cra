import { useEffect } from "react";
import Swiper from "swiper/bundle";

export default function Carousel() {
  const slides = [
    { image: "/images/home_slides/cra-banner-1.jpg" },
    { image: "/images/home_slides/cra-banner-2.jpg" },
    { image: "/images/home_slides/formations-1.jpg" },
    { image: "/images/home_slides/formations-2.png" },
    { image: "/images/home_slides/formations-3.png" },
    { image: "/images/home_slides/formations-4.jpg" },
    { image: "/images/home_slides/wos-banner.jpg" },
    { image: "/images/home_slides/wos-1.jpg" },
    { image: "/images/home_slides/wos-2.jpg" },
    { image: "/images/home_slides/wos-3.jpg" },
  ];
  useSwipper();
  return (
    <div className={`caroussel`}>
      <div className="swiper-container">
        <AddSlides slides={slides} />
        <div className="swiper-pagination"></div>
        {/* <!-- Add Arrows --> */}
        <div className="swiper-button-next swiper-button-white"></div>
        <div className="swiper-button-prev swiper-button-white"></div>
      </div>
    </div>
  );
}

function AddSlides({ slides }) {
  return (
    <div className="swiper-wrapper">
      {slides.map((slide, index) => (
        <div className="swiper-slide" key={index}>
          <img
            src={slide.image}
            alt={`CRA ACEM KENITRA`}
            className="slide-img"
          />
        </div>
      ))}
    </div>
  );
}

function useSwipper() {
  useEffect(() => {
    new Swiper(".swiper-container", {
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      effect: "coverflow",
      edgeSwipeDetection: true,
      freeMode: true,
      freeModeSticky: true,
      grabCursor: true,
      keyboard: true,
      longSwipesMs: 500,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        color: "#785",
      },
      simulateTouch: true,
      spaceBetween: 20,
    });

    return () => {
      document.querySelector(".swiper-container").remove();
    };
  }, []);
}
