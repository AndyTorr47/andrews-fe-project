import React, { useState } from "react";
import { sorteArticlesBy } from "../utils/api";

function SortBy({ setArticles }) {
  const [sortValue, setSortValue] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (e) => {
    let value = e.target.value;
    console.log(value, " << value");

    sorteArticlesBy(value, sortOrder)
      .then((response) => {
        setSortValue(value);
        setArticles(response);
      })
      .catch((err) => {
        console.log(err, " << something wrong with sorting value");
      });
  };

  const handleSortOrder = (e) => {
    let order = e.target.value;

    sorteArticlesBy(sortValue, order)
      .then((response) => {
        setSortOrder(order);
        setArticles(response);
      })
      .catch((err) => {
        console.log(err, " << something wrong with sorting order");
      });
  };

  return (
    <div className="sortby-boxes">
      <select className="sortby-box" value={sortValue} onChange={handleSort}>
        <option> select sort preference </option>
        <option value="created_at"> created_at </option>
        <option value="votes"> votes </option>
      </select>
      <select
        className="sortby-box"
        value={sortOrder}
        onChange={handleSortOrder}
      >
        <option> select order preference </option>
        <option value="asc"> ascending </option>
        <option value="desc"> descending </option>
      </select>
    </div>
  );
}

export default SortBy;
