import React,{useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import {APIKey } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies,fetchAsyncMovieOrShowDetails,fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
const Home = () => {
    const movieText = "Harry";
     const dispatch = useDispatch()

useEffect(() => {
  // the function fetch movies is now not used and its used by create async thunk in movie slice
    // const fetchMovies = async ()=>{
    //     const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //     .catch((err)=>{
    //         console.log("Err :",err);
    //     })
    //    // console.log("Response from api: ",response)
    //    dispatch(addMovies(response.data))
    // };
    // fetchMovies()
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
   // dispatch(fetchAsyncMovieOrShowDetails("tt1201607"))
},[dispatch])


    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    )
}

export default Home
