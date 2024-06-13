import React from "react";
import { NavLink } from "react-router-dom";

import db from "../Data/db.json";

function Filter({ sortBy, handleSortChange }) {
  return (
    <div className="main__filter">
      <div className="filter">
        <li onClick={() => handleSortChange("")}>По умолчанию</li>
        <li onClick={() => handleSortChange("price")}>Цене</li>
        <li onClick={() => handleSortChange("name")}>Фирма</li>
      </div>
    </div>
  );
}

export default Filter;
