import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-[url('/assets/assets.jpg')] bg-no-repeat bg-cover bg-center relative ">
      <div className="absolute inset-0  bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10">
        <div className="container mx-auto h-full flex items-center">
          <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex  flex-col  items-center xl:items-start max-w-[600px]">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="text-white mb-4 font-henny-penny"
            >
              <p className="text-primary font-bold text-6xl mb-3">Building</p>
              <p className="capitalize text-5xl ml-20">robust solution</p>
            </motion.h1>

            <motion.p
              className="mb-9"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              dolores consequatur, esse explicabo corrupti, at eum velit
              assumenda expedita officiis doloremque, autem cum quisquam sit
              nesciunt! Molestias nam vero accusantium!
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
            >
              <Button text="see our work" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
