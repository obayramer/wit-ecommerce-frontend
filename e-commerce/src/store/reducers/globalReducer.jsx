import {
    SET_LANGUAGE,
    SET_ROLES,
    SET_THEME,
  } from "../actions/globalActions.jsx";
  
  const initialState = {
    roles: [],
    theme: "",
    language: "",
  };
  
  const globalReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ROLES:
        return {
          ...state,
          roles: action.payload,
        };
      case SET_THEME:
        return {
          ...state,
          theme: action.payload,
        };
      case SET_LANGUAGE:
        return {
          ...state,
          language: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default globalReducer;