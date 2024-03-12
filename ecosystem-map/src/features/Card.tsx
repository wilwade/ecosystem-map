import React from "react";
import { IColorMap, IFilters, ProjectInfo, TCategory } from "types";
import { cats } from "utils/helper";
import MetricsPanel from "./MetricsPanel";
import Chip from "./Chip";

export default function Card({
  card,
  colorMap,
  filters,
  toggleFilter,
}: {
  card: ProjectInfo;
  colorMap: IColorMap;
  filters: IFilters;
  toggleFilter: {
    [P in TCategory]: (key: string) => void;
  };
}) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <div className="project-card__header--logo">
          <img
            src={`img/${card?.web?.logo}`}
            alt="logo"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "img/default.png";
            }}
          />
        </div>
        <div className="project-card__header--name">
          <a target="_blank" href={card.web.site} rel="noreferrer noopener">
            {card.name}
          </a>
        </div>
      </div>
      <div className="chip-block">
        {cats.map((cat) => (
            card[cat]?.map((i) => (
              <Chip
                key={i}
                label={i}
                filters={filters[cat]}
                colorMap={colorMap}
                toggle={toggleFilter[cat]}
              />
            ))
        ))}
      </div>
      <div className="project-card__description">{card.description}</div>
      <MetricsPanel project={card} />
    </div>
  );
}
