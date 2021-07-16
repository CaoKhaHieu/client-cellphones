import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  editCurrentPage,
  paginationProduct,
  saveProduct,
} from "../../../../actions/ProductAction";

function AdminCreate(props) {
  const { handleCancel } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const [image, setImage] = useState("");

  const { pages } = useSelector((state) => state.allProduct.product);
  const currentPage = useSelector((state) => state.allProduct.currentPage);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   dispatch(paginationProduct(currentPage));
  // }, [dispatch, currentPage]);

  const handleFileImageChange = (e) => {
    setImage(e.target.files[0])
  };

  const onSubmit = async (data) => {

    let formData = new FormData();
    
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("salePrice", data.salePrice);
    formData.append("type", data.type);
    formData.append("image", image);
    
    await dispatch(saveProduct(formData));
    await dispatch(editCurrentPage(pages));
    handleCancel();
  };

  return (
    <form className="admin-create-product" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <input {...register("name")} placeholder="Name"></input>
      <input {...register("price")} placeholder="Sale" type="number"></input>
      <input
        {...register("salePrice")}
        placeholder="SalePrice"
        type="number"
      ></input>
      <div className="select-type">
        <select {...register("type")} placeholder="Select type">
          <option value="iphone">Iphone</option>

          <option value="samsung">Samsung</option>

          <option value="xiaomi">Xiaomi</option>
        </select>
      </div>
      <input
        type="file"
        {...register("image")}
        onChange={handleFileImageChange}
      ></input>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AdminCreate;
