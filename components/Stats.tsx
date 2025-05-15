import React, { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    endCountNum: 99,
    ensCountText: "%",
    text: "Lorem, ipsum",
  },
  {
    endCountNum: 800,
    ensCountText: "+",
    text: "Lorem, ipsum",
  },
  {
    endCountNum: 32,
    ensCountText: "k",
    text: "Lorem, ipsum",
  },
  {
    endCountNum: 10,
    ensCountText: "+",
    text: "Lorem, ipsum",
  },
];
const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-black py-10 w-full">
      <div className="container mx-auto h-full">
        <div className="text-white flex flex-col items-center justify-between xl:flex-row h-full gap-12 text-center xl:text-left">
          {stats.map((item, index) => (
            <div key={index} className="w-full">
              <div className="text-5xl font-semibold">
                {inView && (
                  <CountUp
                    start={0}
                    end={item.endCountNum}
                    delay={0.5}
                    duration={3}
                  />
                )}

                <span>{item.ensCountText}</span>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
