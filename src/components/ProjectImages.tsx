import Autoplay from "embla-carousel-autoplay";
import { v4 } from "uuid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { ModalImages } from "./ModalImages";

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
        <ModalImages images={images}>
          <CarouselContent>
            {images?.map((srcImage) => (
              <CarouselItem key={v4()}>
                <img
                  src={srcImage}
                  alt={v4()}
                  className="w-full h-full flex items-center justify-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </ModalImages>
        <CarouselPrevious
          variant={"ghost"}
          className="top-1/2 -left-8 text-amber-50"
        />
        <CarouselNext
          variant={"ghost"}
          className="top-1/2 -right-8 text-amber-50"
        />
      </Carousel>
    )
  );
};
