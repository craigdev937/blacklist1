import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, 
    useDispatch } from "react-redux";
import { EpisodeReducer } from "./EpisodeSlice";
import { FavoriteReducer } from "./FavoriteSlice";

export const Reducer = configureStore({
    reducer: {
        episodes: EpisodeReducer,
        favorites: FavoriteReducer
    }
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: 
    TypedUseSelectorHook<RootState> = useSelector;



    