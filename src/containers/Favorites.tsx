import React from "react";
import ReactDOM from "react-dom";
import "./Favorites.css";
import { IoMdClose } from "react-icons/io";
import { FavoriteActions } from "../global/FavoriteSlice";
import { useAppSelector, useAppDispatch } from "../global/Toolkit";
import { IFavorite } from "../models/Interfaces";

export const Favorites = (): React.ReactPortal => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favorites.favorites);

    const onClear = (): void => {
        dispatch(FavoriteActions.clearAllFavorites());
        dispatch(FavoriteActions.changeFavStatus());
    };

    const onStatus = (): void => {
        dispatch(FavoriteActions.changeFavStatus());
    };

    const onRemove = (favorite: IFavorite): void => {
        dispatch(FavoriteActions.removeFromFav(favorite));
    };

    return ReactDOM.createPortal(
        <React.Fragment>
            <h1>Favorites</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ea eum voluptates voluptatibus. Assumenda porro aliquam ducimus sapiente consequuntur molestiae corrupti odio quasi quos illo, natus itaque suscipit ut facilis?</p>
        </React.Fragment>,
        document.getElementById("fav") as HTMLElement
    );
};


