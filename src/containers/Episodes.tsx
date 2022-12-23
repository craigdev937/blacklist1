import React from "react";
import { useAppSelector, useAppDispatch } from "../global/Toolkit";
import { getEpisodes } from "../global/EpisodeSlice";
import { List } from "../components/List";

export const Episodes = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const error = useAppSelector((state) => state.episodes.error);
    const loading = useAppSelector((state) => state.episodes.loading);
    const episodes = useAppSelector((state) => state.episodes.episodes);

    React.useEffect(() => {
        dispatch(getEpisodes());
    }, [dispatch]);

    if (error) return <h1>Error...{error.message}</h1>

    return (
        <React.Fragment>
            <h1>{loading ? "Loading..." : "Episodes"}</h1>
            <section>
                {episodes.map((episode) => (
                    <main key={episode.id}>
                        <List 
                            key={episode.id} 
                            episode={episode} 
                        />
                    </main>
                ))}
            </section>
        </React.Fragment>
    );
};


