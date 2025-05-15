import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Form from "./Form";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 xl:pt-32">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:h-[770px] shadow-2xl p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-background">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            <div className="w-full xl:max-w-[320px] xl:pr-[70px] xl:border-border/40 h-[640px]">
              <h4 className="text-[30px] uppercase font-bold mb-6">
                contact us
              </h4>

              <p className="mb-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in
                quas nam eveniet nulla odit impedit voluptatem esse voluptas,
                quidem ullam dolorem, numquam optio adipisci?
              </p>

              <div className="flex flex-col gap-[40px] mb-16">
                <div className="flex items-start gap-[20px] ">
                  <div>
                    <RiChat1Line className="text-[28px] text-primary " />
                  </div>

                  <div>
                    <h5 className="text-[22px] font-semibold leading-none mb-2">
                      Lorem, ipsum.
                    </h5>

                    <p className="mb-4 font-light">
                      Lorem ipsum dolor sit amet.
                    </p>

                    <p className="font-bold">Lorem ipsum dolor sit.</p>
                  </div>
                </div>

                <div className="flex items-start gap-[20px] ">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-primary " />
                  </div>

                  <div>
                    <h5 className="text-[22px] font-semibold leading-none mb-2">
                      Lorem, ipsum.
                    </h5>

                    <p className="mb-4 font-light">
                      Lorem ipsum dolor sit amet.
                    </p>

                    <p className="font-bold">Lorem ipsum dolor sit.</p>
                  </div>
                </div>

                <div className="flex items-start gap-[20px] ">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-primary " />
                  </div>

                  <div>
                    <h5 className="text-[22px] font-semibold leading-none mb-2">
                      Lorem, ipsum.
                    </h5>

                    <p className="mb-4 font-light">
                      Lorem ipsum dolor sit amet.
                    </p>

                    <p className="font-bold">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>

              <Socials
                containerStyles="flex gap-[40px]"
                iconStyles="text-black text-[20px]"
              />
            </div>

            <div className=" flex-1">
              <h2 className="text-3xl mb-3 font-bold capitalize">
                Lorem, ipsum dolor.
              </h2>

              <p className="mb-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde dolorem quas quia distinctio quasi aspernatur sapiente
                expedita dolores reprehenderit? Dicta, vitae provident a
                incidunt beatae fuga nisi quos quod.
              </p>

              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
