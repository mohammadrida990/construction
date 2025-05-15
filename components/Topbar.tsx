import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      id="home"
      className="py-4 xl:h-16 xl:py-0 bg-background flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-white bg-black flex items-center justify-center">
                <RiPhoneFill />
              </div>

              <p className="font-medium text-black">+1(125) 454 5646</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-white bg-black flex items-center justify-center">
                <RiMailFill />
              </div>

              <p className="font-medium text-black">test@test.com</p>
            </div>
          </div>

          <Socials
            containerStyles="flex items-center gap-8 mx-auto xl:mx-0"
            iconStyles="text-blacl"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
