import React, { useEffect, useState } from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSelectListItemById,
  getAllSelectList,
  UpdateSelectListItem,
} from "../../../../../actions/SelectListAction";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";

export default function FilterMenu() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const [chooseSelectItem, setChooseSelectItem] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const filterMenuList = useSelector((state) => state.selectList.List);

  useEffect(() => {
    dispatch(getAllSelectList());
  }, [dispatch]);

  const showModal = (item) => {
    setChooseSelectItem(item);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setChooseSelectItem(undefined);
  };

  const handleAddOption = () => {
    const newOption = "";
    setChooseSelectItem({
      ...chooseSelectItem,
      options: [...chooseSelectItem.options, newOption],
    });
  };

  const handleRemoveOption = (option, index) => {
    console.log(option, index);
    let newChooseSelectItem = { ...chooseSelectItem };
    const newOptions = newChooseSelectItem.options.filter(
      (item, indexItem) => indexItem !== index
    );
    console.log(newOptions);
    setChooseSelectItem({ ...chooseSelectItem, options: newOptions });
  };

  const handleChangeValueOption = (option, index, e) => {
    console.log(option, index, e);
    const content = e.target.value;
    let newChooseSelectItem = { ...chooseSelectItem };
    newChooseSelectItem.options[index] = content;

    setChooseSelectItem(newChooseSelectItem);
  };

  const onSubmit = async (data, e) => {
    await dispatch(UpdateSelectListItem(chooseSelectItem));
    handleCancel()
    dispatch(getAllSelectList())
  };

  const filterMenuItemAntd = (item) => (
    <div className="filter-menu-item">
      <div className={`filter-menu-item-name`}>
        <Dropdown overlay={menuShow(item)} trigger={["click"]}>
          <span className="ant-dropdown-link">
            {item.name}
            <DownOutlined />
          </span>
        </Dropdown>
      </div>
    </div>
  );

  const removeSelectItem = async (item) => {
    console.log(item)
    await dispatch(deleteSelectListItemById(item._id))
    dispatch(getAllSelectList())
  }

  const menuShow = (menuItem) => (
    <div className="menu-show">
      <div className="menu-show-list">
        {menuItem.options.map((item) => (
          <div className={`menu-show-item`}>{item}</div>
        ))}
      </div>

      <div className="menu-show-btn">
        <button className="cancel" onClick={() => showModal(menuItem)}>
          Update
        </button>
        <button className="cancel" onClick={() => removeSelectItem(menuItem)}> Delete</button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="filter-menu">
        {filterMenuList && filterMenuList.length > 0
          ? filterMenuList.map((item) => filterMenuItemAntd(item))
          : ""}
        {chooseSelectItem ? (
          <Modal
            title={`Update ${chooseSelectItem.name}`}
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={false}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form-update-select"
            >
              <input
                {...register("name")}
                placeholder="Name ... "
                defaultValue={chooseSelectItem.name}
              />
              <input
                {...register("property")}
                placeholder="Property ..."
                defaultValue={chooseSelectItem.property}
              />
              <div className="option-list">
                {chooseSelectItem.options.map((option, index) => (
                  <div className="option-list-item" key={index}>
                    <input
                      value={option}
                      placeholder="Option ..."
                      onChange={(e) => {
                        handleChangeValueOption(option, index, e);
                      }}
                    />
                    <span onClick={() => handleRemoveOption(option, index)}>
                      <CloseOutlined />
                    </span>
                  </div>
                ))}
              </div>
              <span onClick={handleAddOption}>Add Options</span>
              <button type="submit">Add</button>
            </form>
          </Modal>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
