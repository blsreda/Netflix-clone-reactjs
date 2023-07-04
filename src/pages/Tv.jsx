import { Fragment, useEffect, useState } from "react";
import NavbarHome from "../components/NavbarHome";
import Trending from "../components/Trending";
import TopRated from "../components/TopRated";
import Genre from "../components/Genre";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import { useDispatch } from "react-redux";
import { getGenres, setGenresTVList } from "../Store/movieSlice";
import Loader from "../components/Loader";
const TV = () => {
    const genresTVList =useSelector(state => state.movie.genresTVList);
    const dispatch=useDispatch();
    const [isLoading,setIsLoading] =useState(true);
    useEffect(() => {
        setIsLoading(false);
        dispatch(getGenres('tv')).unwrap()
        .then((data)=> {
            dispatch(setGenresTVList(data.genres));
        })
    },[])
    isLoading?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll");
    return ( 
        <Fragment>
            {isLoading && <Loader type='page'/>}
            <div className='tv-show-home'>
                <NavbarHome/>
                <div className='flex flex-col gap-[40px] px-[40px] pt-[100px] pb-[70px]'
                style ={{
                    backgroundImage:'linear-gradient(0deg, rgba(0, 8, 29, 1), rgba(0, 8, 29, 1))'
                }}>
                    <Popular type='tv'/>
                    <Trending type='tv'/>
                    <TopRated type='tv'/>
                    {genresTVList?.map((genre,index) => {
                        if(index < 3) {
                            return <Genre type='tv' genreName={genre.name} genreId={genre.id} key={genre.id}/>
                        }
                    })}
                </div>
                <Footer/>
            </div>
        </Fragment>
    );
}
export default TV;