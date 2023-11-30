export default function Capsules({ desc }) {
  return (
    <div
      className="card grey-background col-xl-4 col-md-6 col-sm-12  g-2 "
      style={{
        borderRadius: "2em",
        borderColor: "#e2e8f0",
      }}
    >
      <div className="card-body">
        <p className="card-text text-primary text-center ">{desc}</p>
      </div>
    </div>
  );
}
