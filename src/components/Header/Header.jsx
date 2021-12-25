import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import user from "../../images/use.png"
import'./Header.scss'
const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch()
    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log(term)
        if(term ==="") return alert("Please Enter the search Term")
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("")

    }
    return (
        <div className="header">

    <div className="logo"><Link to = "/">Movie App    </Link> </div>
   <div className="search-bar">
       <form onSubmit={submitHandler}>
           <input type="text" value = {term} placeholder="Search Movie or Shows"
            onChange={(e)=> setTerm(e.target.value)} />

<button type="submit"><i className="fa fa-search" ></i></button>
       </form>
   </div>
    <div className="user-image">
        <img src= {user} alt="user image" />
        </div>           
        </div>
    )
}

export default Header
