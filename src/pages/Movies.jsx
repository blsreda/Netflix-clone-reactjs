import { Fragment, useEffect, useState } from "react";
import NavbarHome from "../components/NavbarHome";
import Trending from "../components/Trending";
import TopRated from "../components/TopRated";
import Genre from "../components/Genre";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import { useDispatch } from "react-redux";
import { getGenres, setGenresMovieList } from "../Store/movieSlice";
import Loader from "../components/Loader";

const Movies = () => {
    const genresMovieList =useSelector(state => state.movie.genresMovieList);
    const sliderContentLoading =useSelector(state => state.movie.sliderContentLoading);
    const dispatch=useDispatch();
    const [isLoading,setIsLoading] =useState(true);

    useEffect(() => {
        setIsLoading(false);
        dispatch(getGenres('movie')).unwrap()
        .then((data)=> {
            dispatch(setGenresMovieList(data.genres));
        })
    },[])
    isLoading?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll");
    return ( 
        <Fragment>
            {isLoading && <Loader type='page'/>}
            <div className="movies-home">
                <NavbarHome/>
                <div className='flex flex-col gap-[40px] px-[40px] pt-[100px] pb-[70px]'
                style ={{
                    backgroundImage:'linear-gradient(0deg, rgba(0, 8, 29, 1), rgba(0, 8, 29, 1))'
                }}>
                    <Popular type='movie'/>
                    <Trending type='movie'/>
                    <TopRated type='movie'/>
                    {genresMovieList?.map((genre,index) => {
                        {/* these 2 genres are +18 because I didn't display them :) */}
                        if(genre.name !== 'Documentary' && genre.name !== 'Romance' && index < 3) {
                            return <Genre type='movie' genreName={genre.name} genreId={genre.id} key={genre.id}/>
                        }
                    })}
                </div>
                <Footer/>
            </div>
        </Fragment>
    );
}
export default Movies;