import React from "react";
import "./SortByPrice.css";
import { useDispatch } from "react-redux";
import {
  ascendingProduct,
  descendingProduct,
} from "../../../actions/ProductAction";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function SortByPrice() {
  const dispatch = useDispatch();

  const menuShow = () => (
    <div className="sort-price-list">
      <div className="sort-price-list-item" onClick={ThapDenCao}>
        <span>Thấp đến cao</span>
      </div>
      <div className="sort-price-list-item" onClick={CaoDenThap}>
        <span>Cao đến thấp</span>
      </div>
    </div>
  );

  const ThapDenCao = () => {
    dispatch(descendingProduct());
  };

  const CaoDenThap = () => {
    dispatch(ascendingProduct());
  };

  return (
    <div className="sort-price">
      <Dropdown overlay={menuShow} trigger={["click"]}>
        <span className="sort-price-title" onClick={(e) => e.preventDefault()}>
          Sắp xếp theo giá <DownOutlined />
        </span>
      </Dropdown>
    </div>
  );
}
