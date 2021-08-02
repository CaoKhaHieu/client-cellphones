import axios from "axios";
let config = {
  headers: {
    "Content-Type": "application/json",
    'Token': "b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7",
  },
};

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

export const updateOrder = (orderId, order) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    
    const { data } = await axios.post(
      `http://localhost:5000/order/update/${orderId}`,
      order,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: "ORDER_UPDATE-SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const cancelOrder = (orderId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      `http://localhost:5000/order/cancel/${orderId}`,
    );
    dispatch({ type: "CANCEL_ORDER", payload: data });
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
  dispatch({ type: "REMOVE_ALL_ORDER" });
};

// export const GetAllOrderPaypal = () => async (dispatch, getState) => {
//   try {
//     const {
//       userSignin: { userInfo },
//     } = getState();
//     const { data } = await axios.get(`http://localhost:5000/order/orderPaypal`, {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     });
//     dispatch({ type: "GET_ALL_ORDER_PAYPAL", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const GetAllOrderPendding = () => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.get(
      `http://localhost:5000/order/orderPendding`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
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
    const { data } = await axios.get(
      `http://localhost:5000/order/orderShipping`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
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

export const deleteOrder = (orderId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    console.log("callapi delete");
    const { data } = await axios.delete(
      `http://localhost:5000/order/delete/${orderId}`,
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
    const { data } = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province`,
      config
    );
    dispatch({ type: "GET_ALL_PROVINCE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const GetAllDistrict = (provinceId) => async (dispatch, getState) => {
  const newConfig = {
    headers: {
      Token: "b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7"
    },
    params: {
      province_id: provinceId
    }
  }
  try {
    const { data } = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district`,
      newConfig
    );
    console.log("all distric: ", data);
    dispatch({ type: "GET_ALL_DISTRICT", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const GetAllWard = (districtId) => async (dispatch, getState) => {
  const newConfig = {
    headers: {
      Token: "b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7"
    },
    params: {
      district_id:districtId
    }
  }
  try {
    const { data } = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?${districtId}`,
      newConfig
    );
    console.log('all ửad: ', data)
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

export const payOrder = (order, paymentResult) => async (dispatch, getState) => {
  console.log(order)
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = axios.put(
        `http://localhost:5000/order/pay/${order._id}`,
        paymentResult,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: 'ORDER_PAY_SUCCESS', payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: 'ORDER_PAY_FAIL', payload: message });
    }
};

export const OrderInfo = (orderInfo) => async (dispatch, getState) => {
  dispatch({ type: "ORDER_INFO", payload: orderInfo });
};