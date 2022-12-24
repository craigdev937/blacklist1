import { createSlice, 
    PayloadAction } from "@reduxjs/toolkit";
import { IFavorite, IFavoriteState, 
    IEpisode } from "../models/Interfaces";

const initialState: IFavoriteState = {
    favorites: localStorage.getItem("fav") ?
    JSON.parse(localStorage.getItem("fav") 
    || "") : [],
    favoriteStatus: false
};

const FavoriteSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        addToFav: (
            state: { favorites: IFavorite[] },
            action: PayloadAction<IFavorite>
        ) => {
            let favoriteStatus: boolean = false;
            state.favorites = state.favorites.map(
            (show: IFavorite) => {
                if (show.favorite.id === 
                        action.payload.favorite.id) {
                    favoriteStatus = true;
                    return {...show}
                }
                return show;
            });
            if (!favoriteStatus) {
                state.favorites.push(action.payload);
            };
            localStorage.setItem("fav", 
            JSON.stringify(state.favorites));
        },
        removeFromFav: (
            state: { favorites: IFavorite[] },
            action: PayloadAction<IFavorite>
        ) => {
            state.favorites = state.favorites.filter(
                (show: {favorite: IEpisode}) => {
                    return show.favorite.id !== 
                        action.payload.favorite.id;
            });
            localStorage.setItem("fav", 
                JSON.stringify(state.favorites)
            );
        },
        changeFavStatus: 
        (state: { favoriteStatus: boolean }) => {
            state.favoriteStatus = !state.favoriteStatus;
        },
        clearAllFavorites: 
        (state: { favorites: IFavorite[] }) => {
            state.favorites = [];
            localStorage.removeItem("fav");
        },
    }
});

export const FavoriteActions = FavoriteSlice.actions;
export const FavoriteReducer = FavoriteSlice.reducer;








