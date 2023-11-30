import ServiceImg from "../../../public/service-page.svg";
import js from "../../../public/logo-javascript.svg";
import java from "../../../public/java.svg";
import php from "../../../public/php-logo.svg";
import python from "../../../public/python-logo-only.svg";
import dotnet from "../../../public/dotnet.svg";
import golang from "../../../public/go-logo-blue.svg";
import webDev from "../../../public/web-development.svg";
import mobileDev from "../../../public/mobile-development.svg";
import autotest from "../../../public/automation-testing.svg";
import funcTesting from "../../../public/functional-testing.svg";

import Capsules from "./sections/Capsules";
import GetStarted from "./sections/getStarted";
import Heading from "./sections/Heading";
import SlickSlider from "./sections/SlickSlider";
import Card from "./sections/Cards";
import LookingForSpecialist from "./sections/LookingForSpecialist";
const SliderImg = [
  {
    img: ServiceImg,
    alt: "First slide",
  },
];
const Bio = {
  title: "IT company in India offering end-to-end tech solutions",
  bio: "Proven developers with a successful track record of delivering projects on time",
  buttonText: "Get Started",
};
const desc = [
  { desc: "IT Services" },
  { desc: "IT Consulting" },
  { desc: "Digital Transformation" },
  { desc: "Product Engineering" },
  { desc: "Application Design" },
  { desc: "Application Development" },
  { desc: "Web Applications" },
  { desc: "Mobile Applications" },
  { desc: "Custom Software Development" },
  { desc: "Project Outsourcing" },
  { desc: "Staff Augmentation" },
  { desc: "Remote Tech Teams Staff Augmentation" },
  { desc: "Full Stack Development" },
  { desc: "Frontend Development" },
  { desc: "Backend Development REST API Server" },
  { desc: "UI UX Engineering" },
  { desc: "Test Automation" },
  { desc: "API Testing" },
  { desc: "AWS" },
  { desc: "CI/CD" },
];
const descObj = [
  {
    logo: js,
    heading: "JS Full Stack",
    desc: "MERN, Node.js, React JS, Ember.js",
  },
  {
    logo: java,
    heading: "Java",
    desc: "REST APIs, Microservices",
  },
  {
    logo: python,
    heading: "JS Full Stack",
    desc: "FastAPI, Data Engineering",
  },
  {
    logo: js,
    heading: "JS Full Stack",
    desc: "MERN, Node.js, React JS, Ember.js",
  },
  {
    logo: dotnet,
    heading: ".Net Developers",
    desc: "Windows, Mac, Web Apps",
  },
  {
    logo: php,
    heading: "PHP",
    desc: "Laravel, CodeIgniter, CakePHP",
  },
  {
    logo: golang,
    heading: "Golang",
    desc: "",
  },
  {
    logo: webDev,
    heading: "Web Development",
    desc: "Next.js, WordPress",
  },
  {
    logo: mobileDev,
    heading: "Mobile Development",
    desc: "IOS, Swift, Android, Flutter, React Native, Kotlin",
  },
  {
    logo: funcTesting,
    heading: "Testing",
    desc: "Manual QA, API Testing, Performance Testing",
  },
  {
    logo: autotest,
    heading: "Test Automation",
    desc: "Java, Selenium, JavaScript, Cypress, Cucumber BDD",
  },
];
const heading1 = "Services";
const heading2 = "Tech Stack - Our Expertise";
export default function ServicePage() {
  return (
    <>
      <GetStarted Bio={Bio} SliderImg={SliderImg} />
      <Heading heading={heading1} />
      <SlickSlider />
      <div className="container mt-5">
        <div className="row ">
          {desc.map((d, idx) => (
            <Capsules key={idx} {...d} />
          ))}
        </div>
        <Heading heading={heading2} />
        <div className="container mt-5">
          <div className="row ">
            {descObj.map((card, idx) => (
              <div key={idx} className="col-4 pb-4">
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
        <LookingForSpecialist />
      </div>
    </>
  );
}
