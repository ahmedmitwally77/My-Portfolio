import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { gridItems } from "../../../data";

export default function Grid() {
  return (
    <section id="about" className="py-20 px-2 md:px-4">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            className={item.className}
            title={item.title}
            description={item.description}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
