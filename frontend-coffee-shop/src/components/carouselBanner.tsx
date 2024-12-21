"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { dataCarouselBanner } from "@/utils/dataCarouselBanner";
import AutoPlay from "embla-carousel-autoplay";

function CarouselBanner() {
  const router = useRouter();

  return (
    <div className="bg-black bg-opacity-5 text-center dark:bg-primary">
      <Carousel
        className="mx-auto w-full max-w-4xl"
        plugins={[
          AutoPlay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselBanner.map((data) => (
            <CarouselItem
              key={data.id}
              onClick={() => router.push(data.link)}
              className="cursor-move"
            >
              <Card className="border-none bg-transparent shadow-none">
                <CardContent className="p-6">
                  <p className="text-wrap font-bold dark:text-white sm:text-lg">
                    {data.title}
                  </p>
                  <p className="text-wrap text-xs dark:text-white sm:text-sm">
                    {`"${data.descripcion}"`}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarouselBanner;
