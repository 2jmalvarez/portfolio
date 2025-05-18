import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { v4 } from "uuid";

export function ModalImages({
  images,
  children,
}: {
  readonly images: readonly string[];
  readonly children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px]">
        <Carousel
          className="sm:mx-2 w-full mt-4"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="mr-4 ">
            {images?.map((srcImage) => (
              <CarouselItem key={v4()}>
                <div className="w-full h-full flex items-center justify-center">
                  <img src={srcImage} alt={v4()} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="top-1/2 -left-8 cursor-pointer"
            variant={"ghost"}
          />
          <CarouselNext
            className="top-1/2 -right-8 mr-4 cursor-pointer"
            variant={"ghost"}
          />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
