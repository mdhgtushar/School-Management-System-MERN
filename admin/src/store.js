import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import counterSlice from "./slices/counterSlice";
import teacherSlice from "./slices/teacherSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        counter: counterSlice,
        teacher: teacherSlice,
    }
})