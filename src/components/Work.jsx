import { works } from "../data/staticData";
import WorkCard from "./WorkCard";

/**
 *@copyright 2025 ZIDAN
 *@license Apache-2.0
 **/
export default function Work() {
  return (
    <section id="work" className="section ">
      <div className="container">
        <h2 className="headline-2 reveal-up">My Projects</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up"></p>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]">
          {works?.map((el, index) => {
            return <WorkCard item={el} key={index} classes={"reveal-up"} />;
          })}
        </div>
      </div>
    </section>
  );
}
