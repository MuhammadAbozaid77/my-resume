import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({ images }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ddd = images?.map((image) => ({
    src: image,
  }));

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div>
      <div className="flex gap-2 my-[10px]">
        {ddd?.map((image, index) => (
          <div
            key={image.src}
            className="relative w-[50px] h-[50px] cursor-pointer group"
            onClick={() => handleOpen(index)}
          >
            <img
              src={image.src}
              alt={image.src}
              className="w-full h-full object-cover rounded-lg opacity-30"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <MdRemoveRedEye className="text-white drop-shadow-md" size={30} />
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={ddd}
        index={currentIndex}
      />
    </div>
  );
}
