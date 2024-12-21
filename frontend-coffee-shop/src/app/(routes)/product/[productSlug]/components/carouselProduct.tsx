import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageProduct from "@/components/shared/imageProduct";

interface productImages {
  images: {
    id: number;
    url: string;
  }[];
}

function CarouselProduct({ images }: productImages) {
  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <ImageProduct imageUrl={images} className="w-full h-full"/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
        <div className="py-2 text-center text-gray-500">
          Deslizar para ver más imagenes
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselProduct;
