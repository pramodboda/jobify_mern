import { DISPLAY_ALERT, CLEAR_ALERT } from "./Actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "error",
      alertText: "Please provide all input values!"
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: ""
    };
  }
  throw new Error(`No such action found: ${action.type}`);
};

export default reducer;
