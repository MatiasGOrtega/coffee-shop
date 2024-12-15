'use client'
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
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
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {dataCarouselBanner.map((data) => (
            <CarouselItem key={data.id} onClick={() => router.push(data.link)} className="cursor-pointer">
              <div>
                <Card className="shadow-none border-none bg-transparent ">
                  <CardContent>
                    <p>{data.title} 2</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselBanner;
