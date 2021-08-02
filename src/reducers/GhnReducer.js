export const InfoGhnReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_ORDER_GHN": {
      return { ...state, orderGhnInfo: action.payload };
    }

    case "CREATE_ORDER_GHN_FAIL": {
      return { ...state, error: action.payload };
    }

    case "GET_TOKEN_ORDER_GHN": {
      return { ...state, tokenPrintOrderGhnInfo: action.payload };
    }

    case "PRINT_ORDER_GHN": {
      return { ...state, orderGhnInfo: action.payload };
    }

    default:
      return state;
  }
};
