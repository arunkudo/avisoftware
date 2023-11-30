"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const companyInfo = {
  C_NAME: "Avi Software",
  linkedin: "https://www.linkedin.com/company/avi-software/",
  facebook: "https://www.facebook.com/avisoftwares",
  email: "tech@avi.software",
  address:
    "Software Technology Parks of India, C-184, PhaseVIII A,Mohali, Punjab, India - 160071",
  tel: "+1 415 655 1112",
};
export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom mt-5">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href={companyInfo.facebook} className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebook} className="fab fa-facebook-f" />
          </a>
          <a href={companyInfo.linkedin} className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin" />
          </a>
          <a href={companyInfo.email} className="me-4 text-reset">
            <FontAwesomeIcon icon={faEnvelope} className="fab fa-envelope" />
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start ">
          <div className="row pt-5">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i></i>
                {companyInfo.C_NAME}
              </h6>
              <p>
                Avi Software is a Technology and Software company based in India
                serving clients globally. Over years, we have delivered
                solutions that have helped our clients transform and scale their
                businesses.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Avi Skills
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>

              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="fab fa-location-dot me-3"
                />
                {companyInfo.address}
              </p>
              <p>
                <a href={"mailto:" + companyInfo.email} className="text-reset">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="fab fa-envelope me-3"
                  />
                  {companyInfo.email}
                </a>
              </p>
              <p>
                <a href={"tel:" + companyInfo.tel} className="text-reset">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="fab fa-phone me-3"
                  />
                  {companyInfo.tel}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <p className="text-reset">
          © {new Date().getFullYear()} Copyright: Avi Software
        </p>
      </div>
    </footer>
  );
}
