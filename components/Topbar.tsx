import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      id="home"
      className="py-4 xl:h-11 xl:py-0 bg-background flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 text-white bg-black flex items-center justify-center">
                <RiPhoneFill />
              </div>

              <p className="font-medium text-black">+961 (00) 000 000</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 text-white bg-black flex items-center justify-center">
                <RiMailFill />
              </div>

              <p className="font-medium text-black">test@test.com</p>
            </div>
          </div>

          <Socials
            containerStyles="flex items-center gap-8 mx-auto xl:mx-0"
            iconStyles="text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
