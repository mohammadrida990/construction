"use client";

import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import NavMobile from "./NavMobile";
import Button from "./Button";

const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "about",
    path: "about",
  },
  {
    name: "services",
    path: "services",
  },
  {
    name: "projects",
    path: "projects",
  },
  {
    name: "contact",
    path: "contact",
  },
];
const Header = () => {
  return (
    <header className="bg-black text-white py-4 w-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>

          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((link) => (
                <li
                  key={link.path}
                  className="
                    text-white text-sm uppercase font-medium tracking-[1.2px] 
                    after:content-['/'] after:mx-4 last:after:content-none  after:text-accent
                  "
                >
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    duration={500}
                    className="cursor-pointer"
                    activeClass="text-primary"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            <ScrollLink to="contact" smooth spy duration={1000}>
              <Button text="got a quote" />
            </ScrollLink>
          </nav>

          <div className="xl:hidden ">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
