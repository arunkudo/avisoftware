import Image from "next/image";
export default function ({ img, caption }) {
  return (
    <div className="text-center d-flex flex-column align-items-center">
      <div className="text-center mb-3">
        <Image src={img} width={60} height={60} />
      </div>
      <p className="text-center">{caption}</p>
    </div>
  );
}
