import { configureStore } from "@reduxjs/toolkit";
import { userReducer, loginReducer, updateReducer } from "./reducer/user";

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    update: updateReducer,
  },
});

export default store;
