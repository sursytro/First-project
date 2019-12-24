const initialState = {
    count: 0
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "set_counter":
        return {
          ...state,
          count: action.payload
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;