import type { ReactNode } from "react";
import "./App.css";
import { v4 } from "uuid";
import projectsData from "./data/projects.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

function App() {
  return (
    <Background>
      <Name>Juan Manuel Alvarez</Name>
      <ProjectList data={projectsData} />
    </Background>
  );
}

const Background = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col bg-gradient-to-tr from-[#23272e] via-[#3a3f47] to-[#40c96e] w-full h-full items-center justify-center">
    {children}
  </div>
);

const Name = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col m-4">
      <div className="flex justify-center">
        <Logo />
      </div>
      <h1 className="flex justify-center text-white pb-2 text-4xl font-extrabold tracking-tight first:mt-0">
        {children}
      </h1>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="size-64 rounded-full overflow-hidden flex items-center justify-center m-4">
      <img
        src="https://avatars.githubusercontent.com/u/30739456?v=4"
        alt="Profile avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const TimePoint = () => {
  return (
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
  );
};

const TimeProject = ({ children }: { children: ReactNode }) => {
  return (
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {children}
    </time>
  );
};

const TitleProject = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      {children}
    </h3>
  );
};

const DescriptionProject = ({ children }: { children: ReactNode }) => {
  return (
    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      {children}
    </p>
  );
};

const Project = ({
  title,
  description,
  time,
  images,
  tags,
}: {
  title: string;
  description: string;
  time: string;
  images?: string[];
  tags: string[];
}) => {
  return (
    <>
      <TimePoint />
      <div className="w-min px-10 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 relative">
        <TimeProject>{time}</TimeProject>
        <div className="flex max-sm:flex-col ">
          <div className="flex flex-col w-84 mr-8">
            <TitleProject>{title}</TitleProject>
            <div className="flex gap-2 my-1 mg-2 w-full">
              {tags.map((tag) => (
                <Badge key={v4()}>{tag}</Badge>
              ))}
            </div>
            <DescriptionProject>{description}</DescriptionProject>
          </div>
          <div>
            <ProjectImages images={images} />
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectImages = ({ images }: { images?: string[] }) => {
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

type ProjectData = {
  title: string;
  description: string;
  time: string;
  images?: string[];
  tags: string[];
  name?: string;
};

const ProjectList = ({ data }: { data: ProjectData[] }) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 mx-4">
      {data.map(({ title, description, time, images, tags }) => (
        <li key={v4()} className="mb-10 ms-4">
          <Project
            title={title}
            description={description}
            time={time}
            images={images}
            tags={tags}
          />
        </li>
      ))}
    </ol>
  );
};

export default App;
