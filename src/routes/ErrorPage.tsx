import React from "react";
import { useRouteError, Link } from "react-router-dom";

export const ErrorPage = (): JSX.Element => {
    let error = useRouteError() as Error;

    return (
        <React.Fragment>
            <main id="error">
                <h1>That Page doesn't exist! 🥶</h1>
                <pre>{error.message}</pre>
                <Link to="/">
                    <button>Episodes</button>                
                </Link>
            </main>
        </React.Fragment>
    );
};


