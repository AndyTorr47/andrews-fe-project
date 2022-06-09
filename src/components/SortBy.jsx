import React, { useState } from "react";
import { sorteArticlesBy } from "../utils/api";

function SortBy() {
  const [sortValue, setSortValue] = useState("");

  const handleSort = (e) => {
    let value = e.target.value;
    console.log(value, " << value");

    sorteArticlesBy(value)
      .then((response) => {
        console.log(response);
        setSortValue(response.data);
      })
      .catch((err) => {
        console.log(err, " << the err");
      });
  };

  return (
    <div>
      <select className="sortby-box" value={sortValue} onChange={handleSort}>
        <option> select sort preference </option>
        <option value="votes"> votes </option>
        <option value="created_at"> ccreated_at </option>
      </select>
    </div>
  );
}

export default SortBy;
