import React from "react";
import { useState, useEffect } from "react";
import Typed from "typed.js";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  photo,
  myPhoto,
  consulting,
  code,
  design,
  botImage,
  bmcbuttonwhite,
  buyMeACoffee,
  bmcQrCode,
  JPMorgan,
  IBM,
  GoldmanSachs,
} from "./assets";
import {
  Project,
  Service,
  Coffee,
  QRcode,
  DesignParticles,
  Carousel,
} from "./components";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [messege, setMessege] = useState("");
  const [over, setOver] = useState(false);

  const el = React.useRef(null);
  const typed = React.useRef(null);
  React.useEffect(() => {
    const options = {
      strings: [
        "Student.",
        "Developer.",
        "Programmer.",
        "History Enthusiast.",
        "Bohemian.",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: false,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  const designTools = ["Figma", "Adobe XD", "Adobe Illustrator"];
  const codeTools = ["React", "Node", "Express", "MongoDB", "Firebase"];
  const consultingTools = ["Google Docs", "Google Sheets", "Google Slides"];

  return (
    <div className={darkMode ? "dark" : ""}>
      <DesignParticles
        linkColor={darkMode ? "#ffffff" : "#000000"}
        particleColor={darkMode ? "#ffffff" : "#000000"}
      />
      <main className="bg-cyan-200  px-10 md:px-20 lg:px-40 dark:bg-gradient-to-t from-black to-gray-900 dark:text-white">
        {/* Header section */}
        <section>
          <nav className="py-10 mb-6 flex justify-between">
            <h1 className="text-3xl font-burtons">
              <a href="#">Rishu Raj</a>
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md 
              ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Above page */}
          <div className="text-center p-8">
            <h2 className="text-6xl py-4 text-gray-800 dark:text-teal-300 font-medium mb-4">
              Rishu Raj
            </h2>
            <span
              className="text-2xl md:text-3xl sm:text-2xl py-8 m-4 font-pacifico text-gray-600"
              ref={el}
            ></span>

            <p className="text-medium md:text-xl max-w-lg dark:text-teal-600 mx-auto leading-8 text-gray-800 mt-8">
              Hello World! I am Rishu Raj and I am a Computer Science undergrad
              student from India. I am a frontend developer and a programmer. I
              love to code and design. I am a self taught developer and I am
              always learning new things. Here are my socials. Do check them out
              and thanks for visiting this page.
            </p>
          </div>
          <div className="flex text-5xl justify-center gap-16 py-3 text-gray-600">
            <a href="https://twitter.com/rrishu561" target="_blank">
              <AiFillTwitterCircle className="hover:fill-[#1d9bf0] transform transition duration-500 hover:scale-125 flex justify-center items-center" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishu-raj-b380041a1/"
              target="_blank"
            >
              <AiFillLinkedin className="hover:fill-[#0a66c2]  transform transition duration-500 hover:scale-125 flex justify-center items-center" />
            </a>
            <a href="https://github.com/rishuraj1" target="_blank">
              <AiFillGithub className="dark:hover:fill-[#f0f6fc] hover:fill-black  transform transition duration-500 hover:scale-125 flex justify-center items-center" />
            </a>
          </div>

          {/* Avatar */}
          <div
            className="bg-gradient-to-b from-teal-500 rounded-full mt-16 mx-auto overflow-hidden relative flex cursor-pointer 
          transition duration-500 hover:scale-105 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 justify-center items-center"
          >
            <img
              className="object-cover w-full h-full flex items-center"
              src={over ? myPhoto : photo}
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}
            />
          </div>
        </section>

        {/* About section */}

        <section>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl py-1 mt-20 mb-4">Services</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-teal-600 text-md flex text-center">
              As a front end developer, I can make beautiful, simplistic and
              minimal frontend designs with maximum functionality to offer. Here
              are some key features. If you like this, feel free to reach out
              from the feedback section below.
            </p>
          </div>

          <div className="lg:flex gap-16 md:flex items-start justify-center">
            <Service
              image={code}
              name={"Beautiful Designs"}
              about={
                "Creating elegant designs according to your needs. Following core design theory."
              }
              toolsHeader={"Design tools I use: "}
              tools={designTools}
            />

            <Service
              image={code}
              name={"Latest Technology"}
              about={
                "I always work on improving my skills. One of the ways to do that is to always learn new things. I keep myself updated with latest technologies so I can achieve my goals."
              }
              toolsHeader={"Coding Tools/Tech I use: "}
              tools={codeTools}
            />

            <Service
              image={consulting}
              name={"Easy to interact UI"}
              about={
                "I always try to make my UI as simple as possible. I try to make it easy to interact with. I try to make it as minimal as possible."
              }
              toolsHeader={"Consulting tools I use: "}
              tools={consultingTools}
            />
          </div>
        </section>

        {/* Projects section */}
        <section>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl py-1 mt-20 mb-3">Projects</h3>
            <p className="text-md p-4 leading-8 text-gray-800 dark:text-teal-600 flex text-center">
              In my projects section, you will find a showcase of my technical
              abilities and creativity across a diverse range of fields,
              including AI development, software engineering, web development,
              and more. Each project represents my passion for innovation and my
              commitment to pushing the boundaries of what is possible with
              technology. With a focus on practicality and usefulness, my
              projects demonstrate my ability to develop intelligent and
              effective solutions to real-world problems. Browse through my
              portfolio to discover the range and depth of my technical
              expertise.
            </p>
          </div>

          <div className="lg:flex">
            <Project
              image={botImage}
              link={"https://github.com/rishuraj1/LilBot-Discord-Bot"}
              name={"LilBot - Discord Bot"}
              details={
                "I created a Discord bot project using ChatGPT AI that I am excited to showcase in my portfolio. The bot is designed to engage users in natural and intelligent conversation, responding to user input with relevant and contextual responses with a bit of sarcasm. It utilizes the powerful Da Vinci model from GPT-3 architecture."
              }
            />
          </div>
        </section>

        {/* Certifications section  */}
        <section>
          <div className="lg:flex gap-16 md:flex mt-20 shadow-xl p-5 flex-col items-center relative">
            <h3 className="text-3xl py-1 mt-20 mb-3">Certifications</h3>
            <p className="text-md p-4 leading-8 text-gray-800 dark:text-teal-600 flex text-center">
              I have completed many courses and certifications. Here are some of
              them. I am always learning new things and trying to improve my skills. I am currently learning React js.
            </p>
              <Carousel />
          </div>
        </section>

        {/* Communication and footer */}
        <section className>
          <div className="lg:flex gap-16 md:flex mt-20 shadow-xl p-5">
            <div className="flex flex-col items-center mb-5">
              <h3 className="font-semibold text-lg p-4">Feedback Form</h3>
              <form
                className="items-start flex p-4 flex-col"
                action="mailto:rrishu561@gmail.com"
                method="post"
                encType="text/plain"
              >
                Name:
                <input
                  className="w-full border border-solid border-black p-2 mb-2  dark:bg-inherit dark:border-white"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                email:
                <input
                  className="w-full border border-solid border-black p-2 mb-2 dark:bg-inherit dark:border-white"
                  type="email"
                  placeholder="your email address"
                />
                Messege:
                <textarea
                  className="w-full border border-black p-2 mb-2  dark:bg-inherit dark:border-white"
                  rows="4"
                  cols="50"
                  value={messege}
                  onChange={(e) => setMessege(e.target.value)}
                />
                <input
                  type="submit"
                  className="bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-teal-500 px-4 py-2 rounded-md p-4 cursor-pointer text-white"
                />
              </form>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-6">
                <h3 className="font-pacifico text-4xl underline items-center flex text-center">
                  Thanks for visiting
                </h3>
                <Coffee image={darkMode ? buyMeACoffee : bmcbuttonwhite} />
                <QRcode image={bmcQrCode} />
              </div>
            </div>
          </div>
        </section>
        <div className="h-10"></div>
      </main>
    </div>
  );
};

export default App;
