import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import { Link as ScrollLink } from "react-scroll";
import Socials from "./Socials";

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

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        asChild
        className="text-white flex items-center justify-center text-3xl"
        onClick={() => setOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>

      <SheetContent className="bg-black border-none text-white">
        <div className="flex flex-col  pt-15 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>

            <SheetDescription className="sr-only">Lorem.</SheetDescription>
          </SheetHeader>

          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {links.map((item) => (
              <li
                key={item.name}
                className="text-white uppercase font-medium tracking-[1.2px]"
              >
                <ScrollLink
                  to={item.path}
                  smooth
                  isDynamic
                  duration={500}
                  hashSpy
                  className="cursor-pointer"
                  activeClass="text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <Socials
            containerStyles="text-white text-xl flex gap-6"
            iconStyles=""
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
