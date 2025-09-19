import { educationItem } from "../data/staticData";
import SkillCard from "./SkillCard";

export default function Learning() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up"> Eduction </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[80ch] reveal-up">
          I graduated from the Faculty of Science, Al-Azhar University.
          Currently, I am pursuing postgraduate studies in Computer Science at
          the Graduate School for Statistical Research, Cairo University. In
          addition, I studied Frontend Development at Route Academy.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3 ">
          {educationItem?.map((el, index) => {
            return <SkillCard item={el} key={index} classes={"reveal-up"} />;
          })}
        </div>
      </div>
    </section>
  );
}
