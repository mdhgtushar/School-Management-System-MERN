import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = sessionStorage.state ? JSON.parse(sessionStorage.state) : {
    isLoggedIn: false,
    user: {}
}


const authSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        logIn: {
            reducer(state, action) {
                state.isLoggedIn = true;
                state.user = { ...action.payload }
                sessionStorage["state"] = JSON.stringify({
                    isLoggedIn: true,
                    user: { ...action.payload }
                });
                console.log(JSON.parse(sessionStorage.state));
            },
            prepare(email, password) {
                return {
                    payload: {
                        id: nanoid(),
                        email,
                        password,
                        date: new Date().toISOString(),
                    }
                }
            }
        },
        logOut: {
            reducer(state, action) {
                state.isLoggedIn = false;
                state.user = {}
                sessionStorage["state"] = JSON.stringify({
                    isLoggedIn: false,
                    user: {}
                });
                console.log(JSON.parse(sessionStorage.state));
            },
        },
    },
})

export const isLoggedIn = (state) => state.auth.isLoggedIn;

export const { logIn, logOut } = authSlice.actions

export default authSlice.reducer