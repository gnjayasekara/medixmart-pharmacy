"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export function FeaturedItems() {
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: true });
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay]);

  const featuredProducts = [
    {
      id: 1,
      name: "Mega Check Blood Pressure Monitor",
      price: "Rs. 4,500",
      image: "/products/Mega-Check-Blood-Pressure-Monitoring-System_Medixmart.jpg",
    },
    {
      id: 2,
      name: "Foracort DP Caps 200 Mcg",
      price: "Rs. 1,200",
      image: "/products/Foracort-Dp-Caps-200-Mcg_Carelink-300x300.jpg",
    },
    {
      id: 3,
      name: "Rectol Suppositories - small",
      price: "Rs. 950",
      image: "/products/Rectol_Carelink-300x300.jpg",
    },
    {
      id: 4,
      name: "Mega Check Blood Pressure Monitor",
      price: "Rs. 4,500",
      image: "/products/Mega-Check-Blood-Pressure-Monitoring-System_Medixmart.jpg",
    },
    {
      id: 5,
      name: "Seretide 250mg Inhaler - 10 pcs",
      price: "Rs. 3,800",
      image: "/products/Ceretide-250mg_carelink-300x300.jpg",
    },
  ];

  return (
    <Carousel 
      plugins={[autoplay]}
      ref={emblaRef}
      className="w-[70vw] mx-auto"
      onMouseEnter={autoplay.stop}
      onMouseLeave={autoplay.reset}
    >
      <CarouselContent>
        {featuredProducts.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Image  
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-md object-cover"
                  />
                  <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.price}</p>
                </CardContent>
                <CardFooter className="flex justify-center pb-4">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Add to Cart
                  </button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
