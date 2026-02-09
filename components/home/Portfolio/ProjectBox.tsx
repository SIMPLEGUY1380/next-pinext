"use client";

import Image from "next/image";
import { useRef, useState } from "react";

function ProjectBox({
  description,
  image,
}: {
  description: string;
  image: string;
}) {
  const imageRef = useRef<null | HTMLImageElement>(null);
  const [boxWidth, setBoxWidth] = useState(0);

  const handleImageLoad = () => {
    if (imageRef.current) setBoxWidth(imageRef.current.offsetWidth);
  };

  return (
    <div
      className="h-97.5 flex flex-col justify-between overflow-hidden rounded-xl relative bg-background"
      style={{ width: boxWidth ? `${boxWidth}px` : "unset" }}
    >
      <div className="h-full">
        <img
          src={image}
          onLoad={handleImageLoad}
          className="h-full bg-center rounded-t-xl object-cover"
          alt={description}
        />
      </div>
      <div className="h-13.75 min-h-13.75 w-full border rounded-b-xl bg-primary-100 border-[#5E5E66] absolute bottom-0 left-0 flex justify-end pr-30 md:justify-center md:p-0 items-center">
        <p>{description}</p>
        <button className="absolute font-iransans cursor-pointer right-2 flex justify-around items-center gap-1 w-fit border border-[#5E5E66] rounded-full px-5 py-1">
          صدا{" "}
          <span>
            <Image width={13} height={14} src="/voice.svg" alt="دکمه پخش صدا" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProjectBox;
