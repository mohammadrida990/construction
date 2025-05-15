import React from "react";
import PreTitle from "./PreTitle";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <div id="about" className="pt-16 xl:pt-32 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[540px]"
            >
              <PreTitle text="about us" center />

              <h2 className="text-4xl mb-6 uppercase text-primary">
                Lorem, ipsum.
              </h2>

              <p className="mb-11">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam numquam eveniet nam cumque? Ea, error nesciunt cumque
                quae nostrum ipsam eveniet exercitationem, dolorem laudantium
                quasi dicta quidem! Accusantium, fugiat nostrum.
              </p>

              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/construct1.jpg"
                  alt=""
                  priority
                  width={100}
                  height={38}
                  className="h-auto w-auto"
                />

                <p>Company</p>
              </div>

              <ScrollLink to="contact" smooth spy duration={1000}>
                <Button text="contact us" />
              </ScrollLink>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-[444px] xl:h-50px relative">
              <div className="hidden xl:flex w-[444px] h-[500px] bg-background absolute -top-4 -left-4 -z-10"></div>
              <Image
                src="/assets/assets.jpg"
                alt=""
                priority
                width={444}
                height={500}
                className="w-[444px] h-[500px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
