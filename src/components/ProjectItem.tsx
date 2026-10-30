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
  const selectedTags = new Set(tagSelected);

  return (
    <>
      <TimePoint />
      <div className="bg-gray-800 w-min mt-4 px-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 relative">
        <TimeProject>{time}</TimeProject>
        <div className="flex max-sm:flex-col">
          <div className="flex flex-col w-84 mr-8 max-sm:w-fit">
            <TitleProject>{title}</TitleProject>
            <div className="flex gap-2 my-1 mg-2 w-full flex-wrap">
              {[...tags]
                .sort((a, b) => a.localeCompare(b))
                .map((tag) => (
                  <Badge
                    key={tag}
                    variant={
                      selectedTags.has(tag) ? "secondary" : "default"
                    }
                  >
                    {tag}
                  </Badge>
                ))}
            </div>
            <DescriptionProject>{description}</DescriptionProject>
          </div>
          <div className="my-auto">
            <ProjectImages images={images} />
          </div>
        </div>
      </div>
    </>
  );
};
