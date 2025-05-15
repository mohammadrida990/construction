import React from "react";
import Button from "./Button";
import Image from "next/image";
import Slider from "./Slider";
import PreTitle from "./PreTitle";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { Link as ScrollLink } from "react-scroll";

const Tests = () => {
  return (
    <section className="pt-16 xl:pt-32 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-w-[480px] xl:pt-[55px] mb-12 xl:mb-0"
          >
            <PreTitle center text="tests" />

            <h2 className="text-3xl mb-6 font-bold">
              Lorem ipsum dolor sit amet.
            </h2>

            <p className="mb-10 max-w-[420px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias
              quam totam ab nisi. Quasi ipsum nesciunt laudantium quo
              perspiciatis ab quas voluptates iusto, sed sunt? Corrupti non ea
              rem.
            </p>

            <ScrollLink to="contact" smooth spy duration={1000}>
              <Button text="work with us" />
            </ScrollLink>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex flex-col xl:flex-row xl:justify-end "
          >
            <div className="relative hidden  xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src="/assets/construct1.jpg"
                alt=""
                fill
                className="object-cover"
                quality={100}
                priority
                sizes="50vw"
              />
            </div>

            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max bg-pink-500 shadow-2xl"
            >
              <div className="absolute z-20 -top-18 left-[60px] text-primary text-[80px] font-bold tracking-[0.3em] drop-shadow-lg select-none">
                ;;
              </div>

              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tests;
