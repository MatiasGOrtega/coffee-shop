"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

export const dataCarouselBanner = [
  {
    id: 1,
    title: "Envio en 24/48 horas",
    descripcion: "Como cliente VIP, tus envios son 24 horas. ¡Aprovecha!",
    link: "#",
  },
  {
    id: 2,
    title: "Consigue hasta un -25% en ompras superiores en $40",
    descripcion:
      "-25% al gastar $100 o -30% al gastar $200. Usa el código: VIP",
    link: "#",
  },
  {
    id: 3,
    title: "Devoluciones gratuitas",
    descripcion: "Tienes 30 días para devolver tu compra. ¡Sin preguntas!",
    link: "#",
  },
  {
    id: 4,
    title: "Compra novedades",
    descripcion:
      "Descubre las últimas novedades en nuestra tienda online al mejor precio.",
    link: "#",
  },
];

function CarouselBanner() {
  const router = useRouter();

  return (
    <div className="bg-black bg-opacity-5 dark:bg-primary text-center">
      <Carousel className="mx-auto w-full max-w-4xl">
        <CarouselContent>
          {dataCarouselBanner.map((data) => (
            <CarouselItem
              key={data.id}
              onClick={() => router.push(data.link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="border-none bg-transparent shadow-none">
                  <CardContent>
                    <p className="sm:text-lg text-wrap dark:text-secondary">{data.title}</p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{data.descripcion}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarouselBanner;
