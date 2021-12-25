import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import {APIKey } from '../../common/apis/MovieApiKey'
export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",
     async (term)=>{
       // const movieText = "Avengers";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
    
     return  response.data;


});
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows",
     async (term)=>{
     //   const seriesText = "Friends";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
    
     return  response.data;


});
export const fetchAsyncMovieOrShowDetails = createAsyncThunk("movies/fetchAsyncMovieOrShowDetails",
     async (id)=>{
        
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=short`)
    
     return  response.data;
     


});

const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow: {},
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        // addMovies: (state,{payload})=>{
        //     state.movies =  payload;
        // },
        removeSelectedMovieOrShow: (state)=>{
            state.selectMovieOrShow ={}
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending...")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fetched.. sucessfully")
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Async Request Rejected")
        
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fetched.. sucessfully")
            return {...state,shows:payload}
        },
        [fetchAsyncMovieOrShowDetails.fulfilled]:(state,{payload})=>{
            console.log("fetched.. sucessfully showsss")
            return {...state,selectMovieOrShow:payload}
        },
       
    }

})

export const {addMovies,removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) =>state.movies.movies
export const getAllShows = (state) =>state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow
export default movieSlice.reducer