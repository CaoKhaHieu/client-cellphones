import axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    console.log(order);
    const { data } = await axios.post(
      "http://localhost:5000/order/create",
      order,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: "ORDER_CREATE-SUCCESS", payload: data });
    dispatch({ type: "CART_EMTY" });
    localStorage.removeItem("cartItems");
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrder = () => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(`http://localhost:5000/order/`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: "GET_ALL_ORDER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const RemoveAllOrder = () => async (dispatch, getState) => {
  dispatch({ type: "REMOVE_ALL_ORDER"});
};


export const GetAllOrderPendding = () => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(`http://localhost:5000/order/orderPendding`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: "GET_ALL_ORDER_PENDDING", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const GetAllOrderShipping = () => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(`http://localhost:5000/order/orderShipping`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: "GET_ALL_ORDER_SHIPPING", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const GetAllOrderPaid = () => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(`http://localhost:5000/order/orderPaid`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: "GET_ALL_ORDER_PAID", payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteOrder = (order) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    console.log("callapi delete");
    const { data } = await axios.delete(
      `http://localhost:5000/order/delete/${order._id}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: "DELETE_ORDER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const ShippingOrder = (orderId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();

    const { data } = await axios.put(
      `http://localhost:5000/order/shipping/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: "SHIPPING_ORDER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const PaidOrder = (orderId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();

    const { data } = await axios.put(
      `http://localhost:5000/order/paid/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: "PAID_ORDER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const GetAllProvince = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`https://vapi.vnappmob.com/api/province/`);
    dispatch({ type: "GET_ALL_PROVINCE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const GetAllDistrict = (provinceId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://vapi.vnappmob.com/api/province/district/${provinceId}`
    );
    dispatch({ type: "GET_ALL_DISTRICT", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const GetAllWard = (districtId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://vapi.vnappmob.com/api/province/ward/${districtId}`
    );
    dispatch({ type: "GET_ALL_WARD", payload: data });
  } catch (error) {
    console.log(error);
  }
};



//-----------------------  user

export const getOrderByUser = (idUser) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(`http://localhost:5000/order/${idUser}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: "GET_ORDER_BY_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getOrderPenddingByUser = (idUser) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(`http://localhost:5000/order/orderPendding/${idUser}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: "GET_ORDER_PENDDING_BY_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getOrderShippingByUser = (idUser) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(`http://localhost:5000/order/orderShipping/${idUser}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: "GET_ORDER_SHIPPING_BY_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getOrderPaidByUser = (idUser) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(`http://localhost:5000/order/orderPaid/${idUser}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: "GET_ORDER_PAID_BY_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};
