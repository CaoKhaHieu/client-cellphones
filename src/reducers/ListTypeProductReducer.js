export const ListTypeProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_TYPE_PRODUCT": {
      return { ...state, List: action.payload };
    }
    
    default:
      return state;
  }
};

export const TypeProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_NEW_TYPE_PRODUCT": {
      return { ...state, typeProduct: action.payload };
    }

    case "CREATE_NEW_TYPE_PRODUCT": {
      return { ...state, typeProduct: action.payload };
    }
    default:
      return state;
  }
};
