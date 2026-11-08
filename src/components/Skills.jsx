/**
 *@copyright 2025 ZIDAN
 *@license Apache-2.0
 **/

import { skillItem } from "../data/staticData";
import SkillCard from "./SkillCard";

export default function Skills() {
  // skillItem
  return (
    <section id="skills" className="section">
      <div className="container ">
        <h2 className="headline-2 reveal-up">Tools I Use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3 ">
          {skillItem?.map((el) => {
            return <SkillCard item={el} key={el.label} classes={"reveal-up"} />;
          })}
        </div>
      </div>
    </section>
  );
}
