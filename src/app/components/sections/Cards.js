import Image from "next/image";
export default function Card({ logo, heading, desc }) {
  return (
    <>
      <div
        className="card grey-background"
        style={{
          minHeight: "15em",
          borderRadius: "2em",
          borderColor: "#e2e8f0",
        }}
      >
        <div className="card-body p-4">
          <div className="text-center pb-2">
            <Image alt="test" src={logo} height={60} width={60} />
          </div>
          <div className="text-center">
            <h5 className="card-title p-3">{heading}</h5>
            <p className="card-text  p-2 text-secondary">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
