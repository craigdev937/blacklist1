import { configureStore } from "@reduxjs/toolkit";

export const Reducer = configureStore({
    reducer: {
        episodes: () => "Favorite Episodes!"
    }
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



