import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
//============================================
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Learning from "./components/Learning";
import Review from "./components/Review";
import Skills from "./components/Skills";
import Work from "./components/Work";

//=============================== GSAP Working
gsap.registerPlugin(useGSAP, ScrollTrigger);
//============================================

export default function App() {
  //=============================================================
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");
    elements?.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          scrub: true,
          // markers: true,
          start: "-200 bottom",
          end: "bottom 80%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });
  //=============================================================
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Learning />
        {/* <Review /> */}
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}
