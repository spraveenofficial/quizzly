import { SET_AUTH, LOAD_USER } from "../Constants/types";
export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("erpToken");
  console.log(token);
  try {
    dispatch({
      type: SET_AUTH,
      payload: null,
    });
  } catch (error) {
    dispatch({
      type: SET_AUTH,
    });
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({
    type: LOAD_USER,
  });
};
