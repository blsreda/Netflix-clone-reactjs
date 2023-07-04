import movieSlice from "./movieSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store =configureStore({
    reducer:{
        movie:movieSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    })
})