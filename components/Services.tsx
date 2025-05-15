"use client";

import React, { useState } from "react";
import {
  PiPaintRollerFill,
  PiUserGearFill,
  PiWallFill,
  PiWrenchFill,
} from "react-icons/pi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import PreTitle from "./PreTitle";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const data = [
  {
    name: "Lorem 1",
    icon: <PiWallFill />,
    title: "Lorem, ipsum dolor. 1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, quam similique delectus minima id, quod explicabo non iure reiciendis harum maiores nihil accusantium dolorem sapiente repudiandae. Provident doloribus sit voluptas.",
    services: [
      "Lorem, ipsum 1",
      "Lorem, ipsum 1",
      "Lorem, ipsum 1",
      "Lorem, ipsum 1",
      "Lorem, ipsum 1",
      "Lorem, ipsum 1",
      "Lorem, ipsum 1",
      "Lorem, ipsum 1",
      "Lorem, ipsum 1",
    ],
    thumbs: [{ url: "/assets/assets.jpg" }, { url: "/assets/construct1.jpg" }],
  },
  {
    name: "Lorem 2",
    icon: <PiPaintRollerFill />,
    title: "Lorem, ipsum dolor. 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, quam similique delectus minima id, quod explicabo non iure reiciendis harum maiores nihil accusantium dolorem sapiente repudiandae. Provident doloribus sit voluptas.",
    services: [
      "Lorem, ipsum 2",
      "Lorem, ipsum 2",
      "Lorem, ipsum 2",
      "Lorem, ipsum 2",
      "Lorem, ipsum 2",
      "Lorem, ipsum 2",
      "Lorem, ipsum 2",
      "Lorem, ipsum 2",
      "Lorem, ipsum 2",
    ],
    thumbs: [
      { url: "/assets/construct2.jpg" },
      { url: "/assets/construct1.jpg" },
    ],
  },
  {
    name: "Lorem 3",
    icon: <PiWrenchFill />,
    title: "Lorem, ipsum dolor. 3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, quam similique delectus minima id, quod explicabo non iure reiciendis harum maiores nihil accusantium dolorem sapiente repudiandae. Provident doloribus sit voluptas.",
    services: [
      "Lorem, ipsum 3",
      "Lorem, ipsum 3",
      "Lorem, ipsum 3",
      "Lorem, ipsum 3",
      "Lorem, ipsum 3",
      "Lorem, ipsum 3",
      "Lorem, ipsum 3",
      "Lorem, ipsum 3",
      "Lorem, ipsum 3",
    ],
    thumbs: [{ url: "/assets/construct1.jpg" }, { url: "/assets/assets.jpg" }],
  },
  {
    name: "Lorem 4",
    icon: <PiUserGearFill />,
    title: "Lorem, ipsum dolor. 4",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, quam similique delectus minima id, quod explicabo non iure reiciendis harum maiores nihil accusantium dolorem sapiente repudiandae. Provident doloribus sit voluptas.",
    services: [
      "Lorem, ipsum 4",
      "Lorem, ipsum 4",
      "Lorem, ipsum 4",
      "Lorem, ipsum 4",
      "Lorem, ipsum 4",
      "Lorem, ipsum 4",
      "Lorem, ipsum 4",
      "Lorem, ipsum 4",
      "Lorem, ipsum 4",
    ],
    thumbs: [{ url: "/assets/construct2.jpg" }, { url: "/assets/assets.jpg" }],
  },
];

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.2 },
  },
};

const Services = () => {
  const [active, setActive] = useState("Lorem 1");

  return (
    <section id="services" className="pt-16 xl:pt-32 p-4">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <PreTitle text="Our services" center />
          <h2 className="text-3xl mb-3 font-bold">Lorem, ipsum dolor.</h2>

          <p className="mb-11 max-w-[480px] mx-auto">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue={data[0].name}
            onValueChange={(v) => setActive(v)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px]  rounded-none p-0 bg-transparent h-full w-full xl:w-[350px]">
              {data.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item.name}
                  className="w-full rounded-none h-[100px] flex items-center relative p-0 outline shadow-background"
                >
                  <div
                    className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                      active === item.name
                        ? "bg-black text-white"
                        : "text-black bg-background"
                    }`}
                  >
                    <div className="text-5xl ">{item.icon}</div>
                  </div>

                  <div className="uppercase text-base font-semibold tracking-[0.6px] w-[100px] ml-16">
                    {item.name}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex-1  bg-white shadow-2xs h-[500px] p-[30px]">
              {data.map((item, index) => (
                <TabsContent value={item.name} key={index} className="m-0">
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                        >
                          <Image
                            src={thumb.url}
                            alt=""
                            priority
                            fill
                            sizes="50vw"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <div>
                        <h3 className="text-4xl mb-6 text-primary">
                          {item.title}{" "}
                        </h3>

                        <p className="mb-10">{item.desc}</p>

                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.services.map((service, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <div className="w-[6px] h-[6px] bg-background"></div>
                              <div className="capitalize font-medium text-black">
                                {service}
                              </div>
                            </li>
                          ))}
                        </ul>

                        <Button text="read more" />
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
