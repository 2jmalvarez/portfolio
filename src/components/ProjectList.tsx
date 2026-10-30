import type { ProjectData } from "./Project.type";
import { Project } from "./ProjectItem";

export const ProjectList = ({
  data,
  tagSelected,
}: {
  data: ProjectData[];
  tagSelected: string[];
}) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 mx-4">
      {data.map(({ title, description, time, images, tags, website }) => (
        <li key={title} className="mb-10 ms-4">
          <Project
            title={title}
            description={description}
            time={time}
            images={images}
            tags={tags}
            tagSelected={tagSelected}
            website={website}
          />
        </li>
      ))}
    </ol>
  );
};
