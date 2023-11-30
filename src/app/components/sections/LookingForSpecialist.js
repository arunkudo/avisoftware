import Image from "next/image";
import work from "../../../../public/work.png";
import Contact from "./contactForm";
export default function LookingForSpecialist() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-5 grey-background">
          <div className=" text-center brand-height text-secondary mt-4">
            <h2>
              Looking for a specialist developer or a cross-functional team to
              work from your prefered location?
            </h2>
          </div>
          <div className="text-center mt-5">
            <Image alt="work" src={work} height={"auto"} width={"auto"} />
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-5 grey-background">
          <Contact />
        </div>
      </div>
    </div>
  );
}
