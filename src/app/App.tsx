import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Main } from "../routes/Main";
import { Reducer } from "../global/Toolkit";

export const App = (): JSX.Element => {
    return (
        <Provider store={Reducer}>
            <React.Fragment>
                <Main />
            </React.Fragment>
        </Provider>
    );
};


