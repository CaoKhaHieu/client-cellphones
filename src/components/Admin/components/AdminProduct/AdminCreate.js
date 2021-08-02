import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import {
  editCurrentPage,
  saveProduct,
} from "../../../../actions/ProductAction";
import { useHistory } from "react-router-dom";
import { getAllSelectList } from "../../../../actions/SelectListAction";
import { getAllTypeProduct } from "../../../../actions/ListTypeProductAction";

function AdminCreate(props) {
  const { register, handleSubmit } = useForm({ defaultValues: {} });
  const dispatch = useDispatch();
  const history = useHistory();

  const [image, setImage] = useState("");
  const [activeTypeProduct, setActiveTypeproduct] = useState("");
  const SelectList = useSelector(state => state.selectList.List)
  const { pages } = useSelector((state) => state.allProduct.product);
  const { List } = useSelector((state) => state.allTypeProduct);

  useEffect(() => {
    dispatch(getAllSelectList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, [dispatch]);

  const handleFileImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    let formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("amount", data.amount);
    formData.append("salePrice", data.salePrice);
    formData.append("type", activeTypeProduct);
    formData.append("image", image);

    formData.append("os", data.os);
    formData.append("ram", data.ram);
    formData.append("battery", data.battery);
    formData.append("rom", data.rom);
    formData.append("camera", data.camera);
    formData.append("special", data.special);
    formData.append("design", data.design);
    formData.append("screen", data.screen);

    await dispatch(saveProduct(formData));
    await dispatch(editCurrentPage(pages));
    history.push("/admin/product");
  };

  const MenuFirmProduct = (item) => (
    <div
      className={
        activeTypeProduct === item.name
          ? `filter-menu-firm-item active`
          : "filter-menu-firm-item"
      }
      onClick={() => HandleFilterProductByType(item.name)}
    >
      <img src={item.img}></img>
    </div>
  );

  const HandleFilterProductByType = (name) => {
    setActiveTypeproduct(name);
  };

  return (
    <div className="admin-create">
      <span>Create Product</span>
      <form
        className="admin-create-product"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <input {...register("name")} placeholder="Name"></input>
        <input
          {...register("amount")}
          placeholder="Amount"
          type="number"
        ></input>
        <input {...register("price")} placeholder="Price" type="number"></input>
        <input
          {...register("salePrice")}
          placeholder="SalePrice"
          type="number"
        ></input>

        <div className="filter-menu-firm">
          {
            List ? (List.map((item) => MenuFirmProduct(item))) : ''
          }
        </div>

        {SelectList && SelectList.length > 0
          ? SelectList.map((item) => (
              <div className="select-type">
                <select {...register(`${item.property}`)}>
                  <option>{item.name}</option>
                  {item.options.map((x) => (
                    <option value={x}>{x}</option>
                  ))}
                </select>
              </div>
            ))
          : ""}

        <input
          type="file"
          {...register("image")}
          onChange={handleFileImageChange}
        ></input>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminCreate;
