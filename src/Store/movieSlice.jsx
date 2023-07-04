import { fetchFromAPI } from "../api/FetchFromAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState ={
    genresMovieList:null,   
    genresTVList:null,
    trailerSelected:null,
    cardSelected:null,
    dialogOpen:false,
    bannerImageLoading:true,   
    sliderContentLoading:true,   
}

export const getGenereMovies =createAsyncThunk(
    "movie/getGenereMovies",
    async(args)=> {
        try {
            const response = fetchFromAPI(`discover/movie?with_genres=${args}`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)
export const getGenereTv =createAsyncThunk(
    "movie/getGenereTv",
    async(args)=> {
        try {
            const response = fetchFromAPI(`discover/tv?with_genres=${args}`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)
export const getTrending =createAsyncThunk(
    "movie/getTrending",
    async(args)=> {
        try {
            const response = fetchFromAPI(`trending/${args}/day`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)
export const getTopRated =createAsyncThunk(
    "movie/getTopRated",
    async(args)=> {
        try {
            const response = fetchFromAPI(`${args}/top_rated`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)
export const getNewRelease =createAsyncThunk(
    "movie/getNewRelease",
    async(args)=> {
        try {
            const response = fetchFromAPI(`discover/${args}?sort_by=release_date.desc`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)
export const getBannerTvShow =createAsyncThunk(
    "movie/getBannerTvShow",
    async()=> {
        try {
            const response = fetchFromAPI('discover/tv?with_networks=213');
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)  
export const getGenres =createAsyncThunk(
    "movie/getGenres",
    async(args)=> {
        try {
            const response = fetchFromAPI(`genre/${args}/list?language=en-US`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)  
export const getMovieTrailers =createAsyncThunk(
    "movie/getMovieTrailers",
    async(args)=> {
        try {
            const response = fetchFromAPI(`movie/${args}/videos?language=en-US`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)  
export const getTvTrailers =createAsyncThunk(
    "movie/getTvTrailers",
    async(args)=> {
        try {
            const response = fetchFromAPI(`tv/${args}/videos?language=en-US`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)  
export const getPopular =createAsyncThunk(
    "movie/getPopular",
    async(args)=> {
        try {
            const response = fetchFromAPI(`${args}/popular`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)  
export const getRelatedMovies =createAsyncThunk(
    "movie/getRelatedMovies",
    async(args)=> {
        try {
            const response = fetchFromAPI(`movie/${args}/similar`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)  
export const getRelatedTv =createAsyncThunk(
    "movie/getRelatedTv",
    async(args)=> {
        try {
            const response = fetchFromAPI(`tv/${args}/similar`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)  

const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers: {
        setGenresMovieList:(state,action) => {
            state.genresMovieList=action.payload;
        },
        setGenresTVList:(state,action) => {
            state.genresTVList=action.payload;
        },
        setTrailerSelected :(state,action) => {
            state.trailerSelected =action.payload;
        },
        setCardSelected :(state,action) => {
            state.cardSelected =action.payload;
        },
        setDialogOpen :(state,action) => {
            state.dialogOpen =action.payload;
        },
        setBannerImageLoading :(state,action) => {
            state.bannerImageLoading =action.payload;
        },
        setSliderContentLoading :(state,action) => {
            state.sliderContentLoading =action.payload;
        },
    }
})

export const {setGenresMovieList ,setGenresTVList,setTrailerSelected,setCardSelected,setDialogOpen,setBannerImageLoading,setSliderContentLoading} =movieSlice.actions;
export default movieSlice.reducer;