import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CreateNewTypeProduct, getAllTypeProduct } from "../../../../../actions/ListTypeProductAction";

export default function CreateNewType() {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const [image, setImage] = useState("");

  const onSubmit = async (data, e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", image);

    e.target.reset();
    await dispatch(CreateNewTypeProduct(formData));
    dispatch(getAllTypeProduct())
  };

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="create-type">
      <span>Create new type product</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name ... "></input>

        <input type="file" onChange={(e) => handleChangeImage(e)}></input>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
