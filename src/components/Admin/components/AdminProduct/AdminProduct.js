import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProduct,
  paginationProduct,
} from "../../../../actions/ProductAction";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.css";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import AdminCreate from "./AdminCreate";

function AdminProduct(props) {
    
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.allProduct.currentPage);
  const { products } = useSelector((state) => state.allProduct.product);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(paginationProduct(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="admin-product">
      <Link className="add-product" onClick={showModal}>
        <AppstoreAddOutlined />
      </Link>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        width={1000}
        height={1000}
        footer={null}
        title='Add Product'
      >
        <AdminCreate handleCancel={handleCancel}></AdminCreate>
      </Modal>

      {products ? (
        <ListProduct listProducts={products}></ListProduct>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default AdminProduct;
