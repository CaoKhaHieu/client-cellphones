import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  getproductById,
  paginationProduct,
  removeProductById,
  saveProduct,
} from "../../../../actions/ProductAction";

function AdminUpdate(props) {
  const { handleCancel, product } = props;
  console.log(product)
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [image, setImage] = useState("");
  const currentPage = useSelector((state) => state.allProduct.currentPage);

  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
    formData.append("_id", product._id);

    console.log(formData)

    await dispatch(saveProduct(formData));
    await dispatch(paginationProduct(currentPage));
    handleCancel()
  };

  return (
    <form className="admin-create-product" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <input {...register("name")} placeholder="Name" defaultValue={product.name}></input>
      <input {...register("price")} placeholder="Sale" type="number" defaultValue={product.price}></input>
      <input
        {...register("salePrice")}
        placeholder="SalePrice"
        type="number"
        defaultValue={product.salePrice}
      ></input>
      <div className="select-type">
        <select {...register("type")} placeholder="Select type" defaultValue={product.type}>
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
      <button type="submit">Update Product</button>
    </form>
  );
}

export default AdminUpdate;
