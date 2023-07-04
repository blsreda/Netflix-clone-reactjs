import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NavbarHome from "../components/NavbarHome";
import Banner from "../components/Banner";
import Trending from "../components/Trending";
import TopRated from "../components/TopRated";
import { getGenres, setGenresMovieList, setGenresTVList } from "../Store/movieSlice";
import Genre from "../components/Genre";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import DetailsModal from "../components/DetailsModal";
import Loader from "../components/Loader";

const Home = () => {
    const genresMovieList =useSelector(state => state.movie.genresMovieList);
    const genresTVList =useSelector(state => state.movie.genresTVList);
    const bannerImageLoading=useSelector(state => state.movie.bannerImageLoading);
    const cardSelected =useSelector(state => state.movie.cardSelected)
    const dispatch =useDispatch();
    useEffect(() => {
        bannerImageLoading?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll");
        dispatch(getGenres('movie')).unwrap()
        .then((data)=> {
            dispatch(setGenresMovieList(data.genres));
        })
        dispatch(getGenres('tv')).unwrap()
        .then((data)=> {
            dispatch(setGenresTVList(data.genres));
        })
    },[bannerImageLoading,dispatch])
    
    return ( 
        <Fragment>
            {bannerImageLoading && <Loader type='page'/>}
            <div className='home'>
                <NavbarHome/>
                <Banner/>
                <div className='flex flex-col gap-[40px] px-[40px] pt-[30px] pb-[70px]'
                style ={{
                    backgroundImage:'linear-gradient(0deg, rgba(0, 8, 29, 1), rgba(0, 8, 29, 1))'
                }}>
                    <Popular type='tv'/>
                    <Trending type='tv'/>
                    <TopRated type='movie'/>
                    {cardSelected?<DetailsModal/>:null}
                    {genresMovieList?.map((genre,indx) => {
                        // these 2 genres are +18 because I didn't display them :)
                        if(genre.name !== 'Documentary' && genre.name !== 'Romance' && indx < 4) {
                            return <Genre type='movie' genreName={genre.name} genreId={genre.id} key={genre.id}/>
                        }
                    })}
                    {genresTVList?.map((genre,indx) => {
                        if(indx < 4) {
                            return <Genre type='tv' genreName={genre.name} genreId={genre.id} key={genre.id}/>
                        }
                    })}
                </div>
                <Footer/>
            </div>
        </Fragment>
    );
}
export default Home;