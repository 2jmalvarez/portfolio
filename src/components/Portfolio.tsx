import { Background } from "./Background";
import { Name } from "./Name";
import { ProjectList } from "./ProjectList";
import projectsData from "../data/projects.json";
import SelectorTag from "./SelectorTag";
import { useState } from "react";

export const Portfolio = () => {
  const [tagSelected, setTagSelected] = useState<string[]>([]);
  return (
    <Background>
      <Name>Juan Manuel Alvarez</Name>
      <SelectorTag
        tags={[
          ...new Set(
            projectsData
              .flatMap((project) => project.tags)
              .map((tag) => tag.trim())
          ),
        ]}
        onFilter={(selectedTag) => {
          setTagSelected(selectedTag ?? []);
        }}
      />
      <ProjectList
        data={projectsData.filter(
          (pd) =>
            tagSelected.length === 0 ||
            tagSelected.some((tag) => pd.tags.includes(tag))
        )}
        tagSelected={tagSelected}
      />
    </Background>
  );
};
