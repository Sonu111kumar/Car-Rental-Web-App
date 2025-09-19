import React from "react";
import {Carousel,
   CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'ui/carousel'
import { CarouselControl } from "../../controls/controls";
import Autoplay from "embla-carousel-autoplay"

const Carousels = () => {
    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  return (
    <>
  <Carousel className="w-full relative"
  opts={{
        loop: true,  
      }}
   plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}>
  <CarouselContent>
    {CarouselControl.map((img) => (
      <CarouselItem key={img.id}>
        <div className="w-full p-1">
          <img
            src={img.image}
            alt="Banner"
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselPrevious className="absolute  top-1/2 left-4 -translate-y-1/2 z-10" />
  <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10" />
</Carousel>    
    </>
  );
};

export default Carousels;
