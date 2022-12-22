import React from "react";
import "./App.css";
import Red from "../img/Red.jpg";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Raymond</h1>
            <img 
                alt="Raymond" src={Red}
                height="600rem" width="auto"
            />
        </React.Fragment>
    );
};


