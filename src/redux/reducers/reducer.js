const initialState = {
  loader: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "fetchingData": {
      return {
        ...state,
        loader: "loading",
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
