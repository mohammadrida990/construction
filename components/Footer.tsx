import {
  RiArrowRightUpLine,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
} from "react-icons/ri";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Logo from "./Logo";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="mt-16 xl:mt-32 bg-black p-4"
    >
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">
          <div className="flex-1">
            <div className="flex mb-6 relative h-[48px] w-[230px]">
              <Logo />
            </div>

            <p className="text-border max-w-[270px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              beatae non nihil maiores rerum? Aliquam sapiente repellendus,
              sequi magnam explicabo, atque assumenda corporis molestias sunt
              hic minima odit rem cumque!
            </p>
          </div>

          <div className="flex-1 text-border">
            <h4 className="text-2xl text-border mb-10">Contact</h4>

            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-primary text-xl" />
                <p>Lorem, ipsum.</p>
              </li>

              <li className="flex items-center gap-4">
                <RiMailFill className="text-primary text-xl" />
                <p>Lorem, ipsum.</p>
              </li>

              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-primary text-xl" />
                <p>Lorem, ipsum.</p>
              </li>
            </ul>
          </div>

          <div className="flex-1 text-border">
            <h4 className="text-2xl text-border mb-10">News</h4>

            <p className="mb-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              deleniti minus laboriosam nobis autem a maiores officia tempora
              accusamus? Officiis, non? Perspiciatis id atque vel. Optio eaque
              eligendi aliquid nostrum.
            </p>

            <div className="relative max-w-[370px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-black border border-background h-16 w-full pl-7 rounded-none outline-none flex items-center"
              />

              <button className="bg-background w-12 h-12 absolute right-2 bottom-2 text-black text-xl flex items-center justify-center">
                <RiArrowRightUpLine />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex  flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-border">
          Copyright &copy; 2025, alll rights reserved
        </p>

        <Socials
          containerStyles="flex text-white gap-6 "
          iconStyles="hover:text-primary transition-all"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
