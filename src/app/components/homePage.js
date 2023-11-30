"use client";
import GetStarted from "./sections/getStarted";
import OurPatnerAndContactForm from "./sections/ourPatnerAndContactForm";
import WhyAviSoftware from "./sections/whyAviSoftware";
import Home_new from "../../../public/home-new.svg";
import Home_web from "../../../public/home-web.svg";
const SliderImg = [
  {
    img: Home_new,
    alt: "First slide",
  },
  {
    img: Home_web,
    alt: "Second slide",
  },
];
const Bio = {
  title: "Your trusted tech partner to transform your business",
  bio: "Hire a cross-functional team of proven developers tailored to your custom requirements",
  buttonText: "Get Started",
};
export default function HomePage() {
  const rowComponents = [
    <GetStarted SliderImg={SliderImg} Bio={Bio} />,
    <WhyAviSoftware />,
    <OurPatnerAndContactForm />,
  ];

  return (
    <main>
      {rowComponents.map((comp, idx) => (
        <div key={idx}>{comp}</div>
      ))}
    </main>
  );
}
