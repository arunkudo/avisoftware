import Image from "next/image";
export default function Logo({ LogoImg }) {
  return (
    <Image
      src={LogoImg}
      width={160}
      height={57}
      alt={"avisoftware brand logo"}
    ></Image>
  );
}
