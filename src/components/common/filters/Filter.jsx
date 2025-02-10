import React from "react";
import "./Filter.css";
import FilterItem from "./filterItem/FilterItem";

const Filter = ({ filterlist }) => {
  return (
    <div className="filters">
      {filterlist &&
        filterlist.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />;
        })}
    </div>
  );
};

export default Filter;
