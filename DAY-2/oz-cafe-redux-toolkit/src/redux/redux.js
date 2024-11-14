import { combineReducers, legacy_createStore } from "redux";
import data from "../assets/data";

// 추가 액션 생성자 함수
export const addToCart = (options, quantity, id) => {
  return {
    type: "addToCart",
    payload: { options, quantity, id },
  };
};
// 삭제 액션 생성자 함수
export const removeFromCart = (id) => {
  return {
    type: "removeFromCart",
    payload: { id },
  };
};

// 카트 reducer
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "removeFromCart":
      return state.filter((el) => action.payload.id !== el.id);
    default:
      return state;
  }
};

// 메뉴 reducer
const menuReducer = (state = data.menu ) => {
  return state;
};

// 리듀스 합치기
const rootReducer = combineReducers({ cartReducer, menuReducer });

// 스토어 만들기
export const store = legacy_createStore(rootReducer);
