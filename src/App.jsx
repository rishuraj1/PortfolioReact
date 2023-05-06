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
} from "./assets";
import {
  Project,
  Service,
  Coffee,
  QRcode,
  DesignParticles,
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
      <DesignParticles linkColor={darkMode ? "#ff00ff" : "#000000"} particleColor={darkMode ? "#00008B" : "#ff00ff"} />
      <main className="bg-cyan-200 px-10 md:px-20 lg:px-40 dark:bg-gradient-to-t from-black to-gray-900 dark:text-white">
        {/* Header section */}
        <section className="min-h-screen">
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
          <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96 relative flex cursor-pointer transition duration-500 hover:scale-105">
            <img
              className="object-cover w-full h-full overflow-hidden flex items-center"
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
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-teal-600">
              As a front end developer, I can make beautiful, simplistic and
              minimal frontend designs with maximum functionality to offer.
            </p>
            <p className="text-md py-2 leading-8 dark:text-teal-600 text-gray-800">
              Here are some key features. If you like this, feel free to reach
              out from the feedback section below.
            </p>
          </div>

          <div className="lg:flex gap-16 md:flex">
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
            <p className="text-md p-4 leading-8 text-gray-800 dark:text-teal-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur molestias tenetur ea voluptas nobis iusto aut aliquid
              commodi earum numquam.
            </p>
          </div>

          <div className="lg:flex">
            <Project
              image={botImage}
              link={"https://github.com/rishuraj1/LilBot-Discord-Bot"}
              name={"LilBot - Discord Bot"}
            />

            <Project
              image={botImage}
              link={"https://github.com/rishuraj1/LilBot-Discord-Bot"}
              name={"LilBot - Discord Bot"}
            />
          </div>
        </section>

        {/* Communication and footer */}
        <section className="">
          <div className="lg:flex gap-16 md:flex mt-20 shadow-xl p-5">
            <div className="flex flex-col items-center">
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
                  className="bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-teal-500 px-4 py-2 rounded-md p-4 cursor-pointer"
                />
              </form>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-5">
                <h3 className="font-pacifico text-4xl underline items-center flex">
                  Thanks for visiting
                </h3>
                <Coffee image={darkMode ? buyMeACoffee : bmcbuttonwhite} />
                <QRcode image={bmcQrCode} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;