import React, { useState } from "react";
import { Badge } from "./ui/badge";

interface SelectorTagProps {
  tags: string[];
  onFilter: (selectedTag: string[] | null) => void;
}

const SelectorTag: React.FC<SelectorTagProps> = ({ tags, onFilter }) => {
  const [selected, setSelected] = useState<string[]>([]);
  console.log({ tags });
  const handleClick = (tag: string) => {
    const newSelected = selected.includes(tag)
      ? selected.filter((s) => s !== tag)
      : [...selected, tag];
    setSelected(newSelected);
    onFilter(newSelected);
  };

  return (
    <div className="px-4 sm:pb-6 w-full sm:w-1/2 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button key={tag} onClick={() => handleClick(tag)}>
          <Badge
            variant={selected.includes(tag) ? "secondary" : "default"}
            className="cursor-pointer"
          >
            {tag}
          </Badge>
        </button>
      ))}
    </div>
  );
};

export default SelectorTag;
