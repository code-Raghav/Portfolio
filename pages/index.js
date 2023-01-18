import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

import Image from "next/image";
import deved from "../public/pfp.png";
import design from "../public/design.png";
import code from "../public/code.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raghav Agrawal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 ">
        <section className=" min-h-screen">
          <nav className="py-10 mb=12 flex justify-between">
            <h1 className=" text-xl font-burtons">madebyraghav</h1>
            <ul className="flex items-center">
              <li>
                <a
                  href="https://docs.google.com/document/d/1Nc45yZ7C8P1sZbQ_LsQM7qJ93_deOO0XQC2VwRS0WYY/edit?usp=sharing"
                  target={"_blank"}
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center py-10">
            <h2 className=" text-4xl py-2 text-teal-600 font-medium">
              Raghav Agrawal
            </h2>
            <h3 className="text-xl py-2">Developer and Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Currently a B.Tech undergrad who is passionate about designing and
              <span className=" text-teal-500"> development</span> of websites
              and mobile applications and{" "}
              <span className=" text-teal-500">learning</span> new technologies
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 mb-5 ">
            <a
              href="https://www.linkedin.com/in/raghav-agrawal-657b87160/"
              rel="noopener noreferrer"
              target={"_blank"}
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/code-Raghav?tab=repositories"
              rel="noopener noreferrer"
              target={"_blank"}
            >
              <AiFillGithub />
            </a>
          </div>
          <div className=" relative bg-gradient-to-b from-teal-500 rounded-t-full overflow-hidden">
            <Image src={deved} alt="Profile Picture here" />
          </div>
        </section>

        <section className="py-10">
          <div>
            <div className="shadow-xl text-center py-5">
              <div className=" grid place-items-center pt-5">
                <Image src={code} width={100} height={100} alt="image" />
              </div>

              <h3 className=" text-lg font-medium">Development</h3>
              <p className=" py-2">Web and Mobile Applications</p>
              <h4 className=" py-4 text-teal-600">My Stack</h4>
              <p className=" text-gray-800 py-1">Modern Javascript</p>
              <p className=" text-gray-800 py-1">React Js</p>
              <p className=" text-gray-800 py-1">React Native</p>
              <p className=" text-gray-800 py-1">Next Js</p>
              <p className=" text-gray-800 py-1">Flutter </p>
              <p className=" text-gray-800 py-1">Backend: Node Js </p>
              <p className=" text-gray-800 py-1">Version Control: Git </p>
            </div>
          </div>
          <div>
            <div className="shadow-xl text-center p-5 ">
              <div className=" grid place-items-center pt-5">
                <Image src={design} width={100} alt="image" />
              </div>

              <h3 className=" text-lg font-medium">Designing</h3>
              <p className=" py-2">
                Creating graphics for use in various projects
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-800 py-1">Photoshop</p>
              <p className=" text-gray-800 py-1">Blender</p>
              <p className=" text-gray-800 py-1">Adobe Premier Pro</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
