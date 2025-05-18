import React, { useState } from "react";

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
        <button
          key={tag}
          onClick={() => handleClick(tag)}
          style={{
            padding: "6px 12px",
            borderRadius: "16px",
            border: "none",
            cursor: "pointer",
            background: selected.includes(tag) ? "#0078d4" : "#e0e0e0",
            color: selected.includes(tag) ? "#fff" : "#333",
            fontWeight: selected.includes(tag) ? "bold" : "normal",
            transition: "background 0.2s",
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default SelectorTag;
