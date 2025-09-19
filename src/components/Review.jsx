import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ReviewCard from "./ReviewCard";
import { reviews } from "./../data/staticData";

//===================================================================
gsap.registerPlugin(useGSAP, ScrollTrigger);

//===================================================================
export default function Review() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".scrub-slide");
    elements?.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: ".scrub-slide",
          scrub: true,
          start: "-200 80%",
          end: "400%  80%",
        },
        x: "-1000",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });
  // =================================
  return (
    <section className="section overflow-hidden " id="reviews">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Reviews</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up"></p>

        <div className="scrub-slide flex items-stretch gap-3 w-fit ">
          {reviews?.map((el, index) => {
            return <ReviewCard key={index} item={el} />;
          })}
        </div>
      </div>
    </section>
  );
}
