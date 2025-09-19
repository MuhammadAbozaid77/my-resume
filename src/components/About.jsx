/**
 *@copyright 2025 ZIDAN
 *@license Apache-2.0
 **/
import { aboutItems } from "../data/staticData";
import Logo from "./Logo";

export default function About() {
  //=================================================================
  return (
    <section id="about" className="section">
      <div className="container ">
        <div className="bg-zinc-800/50 rounded-2xl md:p-12 p-3 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Muhammad, Front-End React Developer with
            experience in building responsive, scalable, and user-friendly web
            applications. Skilled in JavaScript, TypeScript, React, Next ,
            React-Query , Redux Tailwind CSS, API integration , and More...
          </p>
          <div className="flex flex-wrap items-center gap-4 md-gap-7 ">
            {aboutItems?.map((el, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center md:mb-2 ">
                    <div className="text-2xl font-semibold md:text-4xl">
                      {el?.number}
                    </div>
                    <div className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400">{el.label}</p>
                </div>
              );
            })}
            {/* <img
              src="/src/assets/logo2.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px] "
            /> */}
            <div className="ml-auto md:w-[40px] md:h-[40px] ">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
