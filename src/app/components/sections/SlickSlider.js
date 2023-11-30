"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import webDev from "../../../../public/web-development.svg";
import iotDev from "../../../../public/iot-development.svg";
import mobileDev from "../../../../public/mobile-development.svg";
import customDev from "../../../../public/custom-development.svg";
import nonFunctionalTesting from "../../../../public/non-functional-testing.svg";
import tectConsulting from "../../../../public/tech-consultation.svg";
import staffAugment from "../../../../public/staff-augmentation.svg";
import funcTesting from "../../../../public/functional-testing.svg";
import contractHiring from "../../../../public/contract-hiring.svg";
import autotest from "../../../../public/automation-testing.svg";
import servivePage from "../../../../public/service-page.svg";
import Slider from "react-slick";
import SlickCards from "./SlickCards";
const silderData = [
  {
    img: webDev,
    caption: "Web Development",
  },
  {
    img: iotDev,
    caption: "IOT Development",
  },
  {
    img: mobileDev,
    caption: "Mobile Development",
  },
  {
    img: customDev,
    caption: "Custom Development",
  },
  {
    img: nonFunctionalTesting,
    caption: "Non-Functional Testing",
  },
  {
    img: tectConsulting,
    caption: "Tech Consulting",
  },
  {
    img: staffAugment,
    caption: "Staff Augmentation",
  },
  {
    img: funcTesting,
    caption: "Functional Testing",
  },
  {
    img: contractHiring,
    caption: "Contract Hiring",
  },
  {
    img: autotest,
    caption: "Automation Testing",
  },
];
export default function SlickSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {silderData.map((silder, idx) => (
          <SlickCards key={idx} {...silder} />
        ))}
      </Slider>
    </div>
  );
}
