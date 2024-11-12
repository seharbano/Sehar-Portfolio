"use client";
import * as React from "react";

import { ServiceData } from "@/utilis/MockData";
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


const MyServicesSlider = () => {
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
                    {ServiceData.map((service, index) => (
                        <CarouselItem key={index} className="pl-1 my-4 basis-1/2 max-[1440px]:basis-1/2 max-[1280px]:basis-1/3 max-[850px]:basis-1/2 max-[560px]:basis-full ">
                            <div className="p-1 px-2 ">
                                <ServicesCard
                                    serviceImg={service.serviceImg}
                                    serviceName={service.serviceName}
                                    description={service.description}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default MyServicesSlider;
