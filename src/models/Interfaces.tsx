export interface IEpisode {
    id: number,
    url: string,
    name: string,
    season: number
    number: number,
    type: string,
    airdate: string,
    airtime: string,
    airstamp: string,
    runtime: number,
    rating: { average: number },
    image: {
        medium: string,
        original: string
    },
    summary: string
};

export interface IEpisodeState {
    episodes: IEpisode[],
    loading: boolean,
    error?: Error | null
};

export interface IFavorite {
    favorite: IEpisode
};

export interface IFavoriteState {
    favorites: IFavorite[],
    favoriteStatus: boolean,
};


