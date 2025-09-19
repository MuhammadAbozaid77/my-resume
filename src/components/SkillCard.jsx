export default function SkillCard({ item, classes }) {
  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group " +
        classes
      }
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
        <img src={item?.imgSrc} alt={item?.label} width={32} height={32} />
      </figure>
      <div>
        <h3> {item?.label} </h3>
        <p className="text-zinc-400 text-sm "> {item?.desc} </p>
      </div>
    </div>
  );
}
