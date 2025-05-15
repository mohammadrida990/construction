import React from "react";
import PreTitle from "./PreTitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const data = [
  {
    title: "Lorem ipsum dolor sit amet. 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1",
  },
  {
    title: "Lorem ipsum dolor sit amet. 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2",
  },
  {
    title: "Lorem ipsum dolor sit amet. 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 3",
  },
  {
    title: "Lorem ipsum dolor sit amet. 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 4",
  },
  {
    title: "Lorem ipsum dolor sit amet. 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 5",
  },
];

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32 p-4">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <PreTitle text="Faq" center />

          <h2 className="text-3xl mb-3 font-bold">
            Lorem ipsum dolor sit amet .
          </h2>

          <p className="mb-11 max-w-[480px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            quisquam praesentium perferendis ipsum? Eligendi voluptatibus cumque
            blanditiis beatae saepe excepturi quo nemo, asperiores repellendus
            ipsum atque libero, nostrum totam facilis.
          </p>
        </motion.div>

        <ul className="w-full flex flex-col">
          {data.map((item, index) => (
            <motion.li
              key={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.8 }}
              custom={index}
            >
              <FaqItem title={item.title} desc={item.desc} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
