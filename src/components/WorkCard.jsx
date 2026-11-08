import Gallery from "./Gallery";

export default function WorkCard({ item, classes }) {
  const style1 = `p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 
  ring-1 ring-inset ring-zinc-50/5 transition-colors  `;

  return (
    <div className={style1 + classes}>
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img
          className="img-cover"
          src={item?.imgSrc}
          alt={item?.title}
          loading="lazy"
        />
      </figure>
      <div className="flex items-center justify-between gap-4 ">
        <h3 className="title-1 mb-3 ">{item?.title}</h3>

        <div className="flex gap-1">
          {item?.projectLink && (
            <a
              target="_blank"
              href={item?.projectLink}
              className="w-10 h-10 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0"
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                arrow_outward
              </span>
            </a>
          )}
          {item.projectLink2 && (
            <a
              target="_blank"
              href={item?.projectLink2}
              className="w-10 h-10 rounded-lg grid place-items-center bg-yellow-400 text-zinc-950 shrink-0"
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                arrow_outward
              </span>
            </a>
          )}
        </div>
      </div>

      <Gallery images={item.tags} />

      {item.published === "live" ? (
        <button className="bg-violet-800 text-sm p-2 rounded-md">Live</button>
      ) : item.published === "vercel" ? (
        <button className="bg-sky-600 text-sm p-2 rounded-md">Vercel </button>
      ) : (
        <button className="bg-red-600 text-sm p-2 rounded-md">
          Not Published
        </button>
      )}
    </div>
  );
}
