import Image from "next/image";
import Yapsody from "../../../../public/yapsody.svg";
import Spendego from "../../../../public/spendego-new.svg";
import Fdb from "../../../../public/first-data-bank.svg";
import American from "../../../../public/american-eagle-light.svg";
import Amala from "../../../../public/amala-header.svg";
import Contact from "./contactForm";
export default function OurPatnerAndContactForm() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-5 grey-background">
          <div className="text-center brand-height">
            <Image alt="american" src={American} height={"200"} width={"200"} />
          </div>
          <div className="text-end">
            <Image alt="yapsody" src={Yapsody} height={"150"} width={"150"} />
          </div>
          <div className="row">
            <div className="col-9 text-center brand-height">
              <h2>
                Want to hire team that works for renowned global product
                organizations?
              </h2>
            </div>
            <div className="col-3 text-end ">
              <Image alt="fdb" src={Fdb} height={"100"} width={"100"} />
            </div>
          </div>
          <div className="text-end brand-height">
            <Image alt="amala" src={Amala} height={"150"} width={"150"} />
          </div>
          <div className="text-center brand-height">
            <Image alt="spendego" src={Spendego} height={"150"} width={"150"} />
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
