import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import PreTitle from "./PreTitle";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const data = [
  {
    img: "/assets/assets.jpg",
    name: "Lorem 1",
    desc: "Lorem ipsum dolor sit. 1",
    href: "",
  },
  {
    img: "/assets/construct1.jpg",
    name: "Lorem 2",
    desc: "Lorem ipsum dolor sit. 2",
    href: "",
  },
  {
    img: "/assets/construct2.jpg",
    name: "Lorem 3",
    desc: "Lorem ipsum dolor sit. 3",
    href: "",
  },
  {
    img: "/assets/assets.jpg",
    name: "Lorem 4",
    desc: "Lorem ipsum dolor sit. 4",
    href: "",
  },
];

const Work = () => {
  return (
    <div id="projects" className="py-16 xl:pt-32">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[550px] mx-auto xl:mb-20"
        >
          <PreTitle center text="Our work" />

          <h2 className="text-3xl mb-3 font-bold"> Lorem, ipsum dolor.</h2>

          <p className="mb-11 max-w-[480px] mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nisi
            numquam velit dolores. Quasi commodi expedita quos culpa mollitia
            architecto, dolorum eveniet suscipit accusantium ad. Ad ex debitis
            distinctio dolorem.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full h-[490px] flex-1 relative overflow-hidden group flex justify-center "
          >
            <Image
              src={item.img}
              alt=""
              priority
              fill
              quality={100}
              sizes="50vw"
            />

            <div
              className="w-[90%] h-[85px] bg-black absolute bottom-4 flex  justify-between 
                items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 
                transition-all duration-500
              "
            >
              <div className="pl-8">
                <h4 className="text-white font-semibold tracking-[1px] uppercase">
                  {item.name}
                </h4>

                <div className=" flex items-center gap-1">
                  <RiCheckboxCircleFill className="text-primary text-xl" />

                  <p>{item.desc}</p>
                </div>
              </div>

              <Link
                href={item.href}
                className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-background text-black text-2xl flex justify-center items-center absolute right-3"
              >
                <RiArrowRightUpLine />
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
