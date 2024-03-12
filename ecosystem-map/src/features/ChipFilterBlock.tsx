import React from "react";
import { IColorMap } from "types";
import Chip from "./Chip";

export default function ChipFilterBlock({
  name,
  filters,
  toggle,
  colorMap,
}: {
  name: string;
  filters: { [key: string]: boolean };
  toggle: (key: string) => void;
  colorMap: IColorMap;
}) {
  return (
    <div>
      <div
        style={{
          fontSize: "16px",
          lineHeight: "20px",
          padding: "8px 0px 8px 0",
        }}
      >
        {name}
      </div>
      <div className="chip-block table--item">
        {Object.keys(filters)
          .sort()
          .map((i) => (
            <Chip
              key={i}
              label={i}
              filters={filters}
              colorMap={colorMap}
              toggle={toggle}
            />
          ))}
      </div>
    </div>
  );
}
