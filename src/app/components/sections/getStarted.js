"use client";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Image from "next/image";

export default function ({ Bio, SliderImg }) {
  return (
    <div className="getStartedBackgroud pt-5 ">
      <div className="container-fluid " style={{ marginLeft: "13em" }}>
        <div className="row d-flex align-items-center mt-2">
          <div className="col-xl-7 mt-5">
            <div className="d-grid gap-3">
              <h1>{Bio.title}</h1>
              <p>{Bio.bio}</p>
              <div className="align-text-bottom">
                <a href="/#interested-section">
                  <button className="btn btn-primary" type="button">
                    {Bio.buttonText}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {SliderImg.map((img, idx) => (
                  <div
                    key={idx}
                    className={"carousel-item" + (idx == 0 ? " active" : "")}
                  >
                    <Image
                      className="d-block w-100"
                      src={img.img}
                      width={400}
                      height={500}
                      alt={img.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
