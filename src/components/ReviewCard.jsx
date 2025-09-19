export default function ReviewCard({ item }) {
  const ratings = new Array(5);
  ratings.fill({
    icon: "star",
    style: {
      fontVariationSettings: `"FILL" 1`,
      //   fontVariationSettings: `"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24`,
    },
  });
  //=====================
  return (
    <div className="bg-zinc-800 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] p-5 reveal-up">
      <div className="flex items-center gap-1 mb-3 ">
        {ratings?.map((el, key) => {
          return (
            <span
              className="material-symbols-rounded text-yellow-300 text-[18px] "
              key={key}
              style={el.style}
            >
              {el.icon}
            </span>
          );
        })}
      </div>
      <p className="text-zinc-400 mb-8 ">{item.content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={item.imgSrc}
            alt={item.name}
            className="img-cover"
            width={44}
            height={44}
            loading="lazy"
          />
        </figure>

        <div>
          <p>{item?.name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{item.company}</p>
        </div>
      </div>
    </div>
  );
}
