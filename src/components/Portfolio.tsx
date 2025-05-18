import { Background } from "./Background";
import { Name } from "./Name";
import { ProjectList } from "./ProjectList";
import projectsData from "../data/projects.json";

export const Portfolio = () => {
  return (
    <Background>
      <Name>Juan Manuel Alvarez</Name>
      <ProjectList data={projectsData} />
    </Background>
  );
};
