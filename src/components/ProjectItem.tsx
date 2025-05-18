import { v4 } from "uuid";
import { DescriptionProject } from "./DescriptionProject";
import { ProjectImages } from "./ProjectImages";
import { TimePoint } from "./TimePoint";
import { TimeProject } from "./TimeProject";
import { TitleProject } from "./TitleProject";
import { Badge } from "./ui/badge";

export const Project = ({
  title,
  description,
  time,
  images,
  tags,
  tagSelected,
}: {
  title: string;
  description: string;
  time: string;
  images?: string[];
  tags: string[];
  tagSelected: string[];
}) => {
  return (
    <>
      <TimePoint />
      <div className="bg-gray-800 w-min px-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 relative">
        <TimeProject>{time}</TimeProject>
        <div className="flex max-sm:flex-col">
          <div className="flex flex-col w-84 mr-8">
            <TitleProject>{title}</TitleProject>
            <div className="flex gap-2 my-1 mg-2 w-full flex-wrap">
              {tags
                .toSorted((a, b) => a.localeCompare(b))
                .map((tag) => (
                  <Badge
                    key={v4()}
                    variant={
                      tagSelected.includes(tag) ? "secondary" : "default"
                    }
                  >
                    {tag}
                  </Badge>
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
