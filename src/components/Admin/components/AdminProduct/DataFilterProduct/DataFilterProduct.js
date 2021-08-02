import React from "react";
import "./DataFilterProduct.css";
import CreateInfoFilter from "./CreateInfoFilter";
import CreateNewType from "./CreateNewType";
import FilterMenu from "./FilterMenu";
import AllTypeProduct from "./AllTypeProduct";

export default function DataFilterProduct() {
  

  return (
    <div className="update-filter">
      <div className="update-filter-title">
        <span>Update detail product</span>
      </div>
      
      <FilterMenu></FilterMenu>

      <CreateInfoFilter></CreateInfoFilter>

      <AllTypeProduct></AllTypeProduct>

      <CreateNewType></CreateNewType>
    </div>
  );
}
