"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export function AutoplayCarousel() {
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: true });
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay]);


  return (
    <Carousel 
    plugins={[autoplay]}
    ref={emblaRef} className="w-[70vw] mx-auto"
    onMouseEnter={autoplay.stop}
    onMouseLeave={autoplay.reset}
    >
      <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-auto items-center justify-center p-6">
                  <Image  
                    src={`/newyear-2.jpg?height=300&width=300&text=Slide ${1}`}
                    alt={`Slide ${1}`}
                    width={1000}
                    height={1000}
                    className="rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-auto items-center justify-center p-6">
                  <Image  
                    src={`/pharmacy-2.jpg?height=300&width=300&text=Slide ${2}`}
                    alt={`Slide ${2}`}
                    width={1000}
                    height={1000}
                    className="rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-auto items-center justify-center p-6">
                  <Image  
                    src={`/medixmart-background-2.jpg?height=300&width=300&text=Slide ${1}`}
                    alt={`Slide ${1}`}
                    width={1000}
                    height={1000}
                    className="rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-auto items-center justify-center p-6">
                  <Image  
                    src={`/medixmart-background-3.jpg?height=300&width=300&text=Slide ${1}`}
                    alt={`Slide ${1}`}
                    width={1000}
                    height={1000}
                    className="rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
