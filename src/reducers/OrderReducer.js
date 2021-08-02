
export const getAllOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_ORDER": {
      return { ...state, order: action.payload };
    }

    case "REMOVE_ALL_ORDER": {
      return {};
    }

    case "GET_ALL_ORDER_PENDDING": {
      return { ...state, orderPendding: action.payload };
    }

    case "GET_ALL_ORDER_SHIPPING": {
      return { ...state, orderShipping: action.payload };
    }

    case "GET_ALL_ORDER_PAID": {
      return { ...state, orderPaid: action.payload };
    }

    case "ORDER_CREATE_SUCCESS":
      return { ...state, order: action.payload };

    case "ORDER_UPDATE_SUCCESS":
      return { ...state, order: action.payload };

    case "CANCEL_ORDER": {
      return { ...state, order: action.payload };
    }

    case "DELETE_ORDER": {
      return { ...state, order: action.payload };
    }

    case "SHIPPING_ORDER": {
      return { ...state, order: action.payload };
    }

    case "PAID_ORDER": {
      return { ...state, order: action.payload };
    }

    default:
      return state;
  }
};

export const addressReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_PROVINCE": {
      return { ...state, province: action.payload };
    }

    case "GET_ALL_DISTRICT":
      return { ...state, district: action.payload };

    case "GET_ALL_WARD": {
      return { ...state, ward: action.payload };
    }

    default:
      return state;
  }
};

export const getOrderByUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ORDER_BY_USER": {
      return { ...state, myOrders: action.payload };
    }

    case "GET_ORDER_PENDDING_BY_USER": {
      return { ...state, myOrdersPendding: action.payload };
    }

    case "GET_ORDER_SHIPPING_BY_USER": {
      return { ...state, myOrdersShipping: action.payload };
    }

    case "GET_ORDER_PAID_BY_USER": {
      return { ...state, myOrdersPaid: action.payload };
    }

    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_PAY_SUCCESS":
      return { ...state, success: true };

    case "ORDER_PAY_FAIL":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const OrderInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_INFO":
      return { ...state, order: action.payload };

    default:
      return state;
  }
};