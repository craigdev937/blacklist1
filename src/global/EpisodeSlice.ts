import { createSlice, PayloadAction, 
    createAsyncThunk } from "@reduxjs/toolkit";
import { IEpisode, 
    IEpisodeState } from "../models/Interfaces";

const initialState: IEpisodeState = {
    episodes: [],
    loading: false,
    error: null
};

const EpisodeSlice = createSlice({
    name: "episodes",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEpisodes.rejected.toString(), 
        (state, action: PayloadAction<IEpisodeState>) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(getEpisodes.pending, (state) => {
            state.loading = true,
            state.error = null
        }),
        builder.addCase(getEpisodes.fulfilled, 
        (state, action: PayloadAction<IEpisode[]>) => {
            state.loading = false,
            state.error = null,
            state.episodes = [...action.payload]
        })
    },
});

export const EpisodeReducer = EpisodeSlice.reducer;

const URL = "https://api.tvmaze.com/singlesearch/shows?q=young+justice&embed=episodes";
export const getEpisodes = 
createAsyncThunk("episodes/getEpisodes", 
async () => {
    const res: Response = await fetch(URL);
    if (!res.ok) {
        throw new Error(res.statusText);
    } else {
        const data = await res.json();
        console.log(data);
        return data._embedded.episodes;
    }
});

