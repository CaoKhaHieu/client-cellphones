import axios from "axios";



export const createOrderGhn = (orderId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `http://localhost:5000/order/update/${orderId}`
    );
    dispatch({ type: "CREATE_ORDER_GHN", payload: data });
  } catch (error) {
    dispatch({ type: "CREATE_ORDER_GHN_FAIL", payload: error });
  }
};


export const PrintOrderGhn = (orderId) => async (dispatch) => {
  console.log(orderId);
  try {
    const { data } = await axios.get(
      `http://localhost:5000/order/print/${orderId}`
    );
      window.open(data)
    dispatch({ type: "PRINT_ORDER_GHN", payload: data });
  } catch (error) {
    console.log(error);
  }
};
