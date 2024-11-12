"use client";
import * as React from "react";

import { ReviewsData } from "@/utilis/MockData";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServicesCard from "../cards/ServicesCard";
import ClientsReviewsCard from "../cards/ClientsReviewsCard";

const ClientReviewsSlider = () => {
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
          {ReviewsData.map((client, index) => (
            <CarouselItem key={index} className="pl-1 my-4 basis-full ">
              <div className="p-1 px-2 ">
                <ClientsReviewsCard
                  ClientImg={client.image}
                  ClientName={client.name}
                  Service={client.service}
                  Description={client.Description}
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

export default ClientReviewsSlider