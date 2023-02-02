import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Links = [
  {
    title: "Company",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About us",
        link: "/about-us",
      },
      {
        name: "Contact us",
        link: "/contact-us",
      },
      {
        name: "Movies",
        link: "/movies",
      },
    ],
  },
  {
    title: "Top categories",
    links: [
      {
        name: "Action",
        link: "#",
      },
      {
        name: "Romantic",
        link: "#",
      },
      {
        name: "Drama",
        link: "#",
      },
      {
        name: "Historical",
        link: "#",
      },
    ],
  },
  {
    title: "My Account",
    links: [
      {
        name: "Dashboard",
        link: "/dashboard",
      },
      {
        name: "My Favorites",
        link: "/favorite",
      },
      {
        name: "Profile",
        link: "/profile",
      },
      {
        name: "Chang Password",
        link: "/password",
      },
    ],
  },
];
const Footer = () => {
  return (
    <div className="bg-dry py-4 border=t-2 border-black">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0">
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5 ">
                {link.title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li key={index} className="flex  items-baseline ">
                    <Link
                      to={text.link}
                      className="text-border inline-block w-full hover:text-subMain">
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pb-3-5 sm:pb-o md:col-span-2 lg:col-span-3">
            <Link to="/">
              <img
                src="/imgs/logo.png"
                alt="logo"
                className="h-6 object-contain"
              />
            </Link>

            <p className="leading-7 text-sm text-border mt-3">
              <span>I am Said Salah , I from Egypt</span>
              <br />
              <span>Till : +201066536008 </span>
              <br />
              <span>Emil : saidsalah375@gmail.com</span>
            </p>

            {/* create sotiol icons */}
            <div className="flex mt-6 space-x-6 sm:justify-start sm:mt-1">
              <a
                href="https://github.com/SaidSalahAli"
                className="text-gray-500 hover:text-gray-900 transitions dark:hover:text-subMain">
                <BsGithub  size={30}/>
              </a>
              <a
                href="https://www.instagram.com/Said_Salah_Ali"
                className="text-gray-500 hover:text-gray-900 transitions dark:hover:text-subMain">
                <AiOutlineInstagram size={30} />
              </a>
              <a
                href="AiFillFacebook"
                className="text-gray-500 hover:text-gray-900 transitions dark:hover:text-subMain">
                <AiFillFacebook size={30} />
              </a>
              <a
                href="https://github.com/SaidSalahAli"
                className="text-gray-500 hover:text-gray-900 transitions dark:hover:text-subMain">
                <AiFillLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/Said_Salah_Ali"
                className="text-gray-500 hover:text-gray-1000 dark:hover:text-white"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;