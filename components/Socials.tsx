import Link from "next/link";
import {
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiInstagramFill,
} from "react-icons/ri";

const data = [
  {
    icon: <RiFacebookFill />,
    path: "",
  },
  {
    icon: <RiYoutubeFill />,
    path: "",
  },
  {
    icon: <RiTwitterFill />,
    path: "",
  },
  {
    icon: <RiInstagramFill />,
    path: "",
  },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {data.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
