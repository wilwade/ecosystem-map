import React from "react";
import { IColorMap } from "types";

export default function Chip({
  label,
  filters,
  colorMap,
  toggle,
}: {
  label: string;
  filters: {
    [key: string]: boolean;
  };
  colorMap: IColorMap;
  toggle: (key: string) => void;
}) {
  const style = filters[label]
    ? {
        "--chip-color": `rgb(${colorMap[label]})`,
        background: "var(--chip-color)",
        color: "var(--background)",
      }
    : {
        "--chip-color": `rgb(${colorMap[label]})`,
        background: "var(--background)",
        color: "var(--black)",
      };

  return (
    <button
      type="button"
      className="chip"
      style={style}
      key={label}
      onClick={() => toggle(label)}
    >
      {label}
    </button>
  );
}
