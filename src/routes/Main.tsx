import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { Episodes } from "../containers/Episodes";
import { Favorites } from "../containers/Favorites";
import { ErrorPage } from "../routes/ErrorPage";
import { Navbar } from "./Navbar";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Episodes />,
                errorElement: <ErrorPage />
            },
            {
                path: "/favorites",
                element: <Favorites />,
                errorElement: <ErrorPage />
            }
        ]
    }
]);

export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


