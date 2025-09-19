/**
 *@copyright 2025 ZIDAN
 *@license Apache-2.0
 **/
import { ButtonOutline, ButtonPrimary } from "./Button";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3 ">
            {/* <figure className="img-box w-[50px] h-[50px] rounded-md">
              <img
                src="/src/assets/logo1.png"
                alt=""
                height={40}
                width={40}
                className="img-cover"
              />
            </figure> */}
            <Logo />

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400 ">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping "></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            My Portfolio: Learning, Experiences, Skills, and Projects
          </h2>
          <div className="flex items-center gap-3 ">
            <ButtonPrimary
              label={"01033662585"}
              icon="phone_enabled
"
            />
            <ButtonOutline
              href={"#about"}
              label={"Scroll Down"}
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto bg-gradient-to-t
           from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden"
          >
            <img
              src="/src/assets/myImage2.jpg"
              alt="ZIDAN"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
