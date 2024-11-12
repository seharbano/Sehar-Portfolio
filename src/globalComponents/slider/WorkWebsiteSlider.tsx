"use client";
import * as React from "react";

import { ProjectCardData } from "@/utilis/MockData";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WebsiteWorkSliderCard from "../cards/WebsiteWorkSliderCard";

const WorkWebsiteSlider = () => {
  const autoplayOptions = { delay: 2000, stopOnInteraction: false };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <div className=" w-auto">
      <Carousel
        plugins={[Autoplay(autoplayOptions)]}
        opts={{
          align: "start",
          loop: true,
        }}
        orientation="horizontal"
        ref={emblaRef}
        className="w-auto"
      >
        <CarouselContent className="-ml-1 " >
          {ProjectCardData.map((project, index) => (
            <CarouselItem className="pl-1 my-4 basis-full min-[620px]:basis-1/2">
              <div className="p-1 px-2 ">
                <WebsiteWorkSliderCard
                  ProjectImg={project.Projectimg}
                  ProjectName={project.ProjectName}
                  ProjectPart={project.ProjectParts}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default WorkWebsiteSlider