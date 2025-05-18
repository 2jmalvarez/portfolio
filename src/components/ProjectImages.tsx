import Autoplay from "embla-carousel-autoplay";
import { v4 } from "uuid";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

export const ProjectImages = ({ images }: { images?: string[] }) => {
  return (
    !!images?.length && (
      <Carousel
        className=" max-w-xs sm:mx-2 w-64"
        plugins={[
          Autoplay({
            delay: 2000 + images.length * 100,
          }),
        ]}
      >
        <CarouselContent>
          {images?.map((srcImage) => (
            <CarouselItem key={v4()}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 ">
                    <img src={srcImage} alt={v4()} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="top-1/2 -left-8" />
        <CarouselNext className="top-1/2 -right-8" />
      </Carousel>
    )
  );
};
