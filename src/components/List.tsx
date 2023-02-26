import React from "react";
import "./List.css";
import { IEpisode } from "../models/Interfaces";

type EPI = {
    episode: IEpisode
};

export const List = ({episode}: EPI): JSX.Element => {
    return (
        <React.Fragment>
            <main key={episode.id}>
                <h1>{episode.name}</h1>
                <img 
                    alt={episode.name}
                    src={episode.image.medium} 
                />
                <a href={episode.officialSite}><button>Site</button></a>
            </main>
        </React.Fragment>
    );
};

