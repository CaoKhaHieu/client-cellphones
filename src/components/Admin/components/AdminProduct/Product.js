import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteProduct,
  editCurrentPage,
  getAllProduct,
  paginationProduct,
} from "../../../../actions/ProductAction";
import { useHistory, Link } from "react-router-dom";
import { formatPrice } from "../../../../untils/index";
import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import AdminUpdate from "./AdminUpdate";

function Product(props) {
  const history = useHistory();
  const { product, update, number } = props;
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.allProduct.currentPage);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteProduct = async (product) => {
    await dispatch(DeleteProduct(product._id));
    dispatch(paginationProduct(currentPage));
  };

  return (
    <tr>
      <td>{number + 1}</td>
      <td>
        <img src={product.image}></img>
      </td>
      <td>{product.name}</td>
      <td>{formatPrice(product.salePrice)}</td>
      <td>{product.type}</td>
      <td
        className="delete-product"
        onClick={(e) => handleDeleteProduct(product)}
      >
        <DeleteOutlined />
      </td>
      <td className="update-product">
        <Link onClick={showModal}>
          <EditOutlined></EditOutlined>
        </Link>

        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onCancel={handleCancel}
          width={1000}
          height={1000}
          footer={null}
          title="Update Product"
        >
          <AdminUpdate
            handleCancel={handleCancel}
            product={product}
          ></AdminUpdate>
        </Modal>
      </td>
      <td className="review-product">
        <Link to="/admin/product/reviewProduct">
          <FormOutlined></FormOutlined>
        </Link>
      </td>
    </tr>
  );
}

export default Product;
