import MenuItems from "./MenuItems";
import Logo from "./logo";
import LogoImg from "../../../../public/logo.svg";
import Email from "../../../../public/email.svg";
import Skype from "../../../../public/skype.svg";
import Tel from "../../../../public/tel.svg";

export default function Header() {
  const HOME = "Home";
  const ABOUT_US = "About us";
  const CONTACT_US = "Contact us";
  const PORTFOLIO = "Portfolio";
  const SERVICES = "Services";
  const CONTACT_EMAIL = "tech@avi.software";
  const CONTACT_TEL = "+1 415 655 1112";
  const CONTACT_SKYPE = "Avi Software";
  const CONTACT_SKYPE_ID = "sharma_avinash";

  const menu = [
    { title: HOME, path: "/" },
    { title: ABOUT_US, path: "/about-us" },
    { title: CONTACT_US, path: "/contact-us" },
    { title: PORTFOLIO, path: "/portfolio" },
    { title: SERVICES, path: "/services" },
  ];
  const contactMenu = [
    {
      title: CONTACT_EMAIL,
      icon: Email,
      path: `mailto:${CONTACT_EMAIL}`,
      alt: "email",
    },
    { title: CONTACT_TEL, icon: Tel, path: `tel:${CONTACT_TEL}`, alt: "tel" },
    {
      title: CONTACT_SKYPE,
      icon: Skype,
      path: `skype:${CONTACT_SKYPE_ID}?chat`,
      alt: "skype",
    },
  ];
  return (
    <>
      <nav className="navbar navbar-expand fixed-top navbar-light bg-white shadow-sm ">
        <div className="container">
          <a href="/">
            <Logo LogoImg={LogoImg} />
          </a>
          <div className="d-flex flex-column flex-wrap" id="navbarCollapse">
            <ul className="navbar-nav mb-auto mt-0 ml-auto">
              {contactMenu.map((item, idx) => (
                <MenuItems key={idx} {...item} />
              ))}
            </ul>
            <ul className="navbar-nav mb-auto mt-0 ml-auto">
              {menu.map((item, idx) => (
                <MenuItems key={idx} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
