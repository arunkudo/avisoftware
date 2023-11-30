import Image from "next/image";
export default function MenuItems({ title, path, icon, alt }) {
  return (
    <li className="nav-item px-2">
      <a
        className={"nav-link py-0 " + (icon ? " text-primary" : "")}
        href={path}
      >
        {icon && (
          <span>
            <Image
              src={icon}
              className="mx-1  align-item-center"
              height={15}
              width={15}
              alt={alt}
            />
          </span>
        )}
        {title}
      </a>
    </li>
  );
}
