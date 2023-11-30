import CostEfective from "../../../../public/cost-effective.png";
import Customer from "../../../../public/customer-obsession.png";
import OneStop from "../../../../public/one-stop-shop.png";
import Outsource from "../../../../public/outsource-with-confidence.png";
import Proven from "../../../../public/proven-track-records.png";
import Vetted from "../../../../public/vetted-professionals.png";
import Card from "./Cards";
import Heading from "./Heading";
const descObj = [
  {
    logo: CostEfective,
    heading: "Cost Effective Remote Tech Teams",
    desc: "Based in India, we offer you unique blend of highly technical and cost-effective developers. Large pools of talent available to easily scale your teams",
  },
  {
    logo: OneStop,
    heading: "C‘One Stop Shop’ for all Your Tech Needs",
    desc: "Full Stack Development, Microservices, Mobile Apps, DevOps, Test Automation - we got you covered on all tech fronts",
  },
  {
    logo: Vetted,
    heading: "Vetted Professionals",
    desc: "Driven and passionate developers who have delivered multiple large-scale projects successfully",
  },
  {
    logo: Proven,
    heading: "Proven Track Record",
    desc: "Repeat business from same clients is testimony to that",
  },
  {
    logo: Outsource,
    heading: "Outsource with Confidence",
    desc: "Staff works from vendor office with local support and supervision",
  },
  {
    logo: Customer,
    heading: "Customer Obsession",
    desc: "We consistently meet and exceed the expectations of our clients",
  },
];
const heading = "Why Avi Software?";
export default function WhyAviSoftware() {
  return (
    <div>
      <Heading heading={heading} />
      <div className="container">
        <div className="row">
          {descObj.map((card) => (
            <div className="col-4 pb-4">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
