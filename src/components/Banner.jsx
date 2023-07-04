// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBannerTvShow, getTvTrailers, setBannerImageLoading, setTrailerSelected } from '../Store/movieSlice';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const [bannerMovie,setBannerMovie] =useState(null);
    const [bannerTrailer,setBannerTrailer] =useState(null);
    const dispatch =useDispatch();
    useEffect(() => {
        // Get Banner Random Data
        dispatch(getBannerTvShow()).unwrap()
        .then((data)=>
            setBannerMovie(data.results[Math.floor(Math.random()* data.results.length -1)]),
        )
    },[])
    if(bannerMovie) {
        // Get Banner Trailer
        dispatch(getTvTrailers(bannerMovie.id)).then((res) => {
            setBannerTrailer(res.payload?.results?.filter(item => item.type === "Trailer"))
        })
        dispatch(setBannerImageLoading(false))
    }
    else {
        dispatch(setBannerImageLoading(true))
    }
    const history =useNavigate();
    const handleClick =(key)=> {
        dispatch(setTrailerSelected(key))
        history('/player');
    }
    return ( 
        <div className="w-screen h-screen bg-cover bg-center flex items-end justify-start px-[30px] py-[50px]"
        style={{
            backgroundImage:`linear-gradient(0deg, rgba(0, 8, 29, 0.7), rgba(0, 8, 29, 0.7)),url('https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}')`
        }}>
            <div className="banner-content">
                <div className="container text-white">
                    <h3 className='font-semibold text-[40px] mb-[10px]'>{bannerMovie?.name}</h3>
                    <div className="flex gap-4 my-[5px]">
                        <button 
                        className="bg-[#e50914] px-[10px] py-[7px] text-white text-[17px] flex items-center rounded"
                        onClick={()=> handleClick(bannerTrailer[0]?.key)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                            </svg>
                            Play
                        </button>
                        <button className="bg-[#fffefe40] px-[10px] py-[7px] text-white text-[17px] flex items-center rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>
                            My List
                        </button>
                    </div>
                    <span className="font-medium text-[20px]">Watch Now</span>
                    <p className='text-[17px] text-[#b3b3b3] max-w-[500px]'>{bannerMovie?.overview ? bannerMovie.overview.slice(0,150)+"....": " "}</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;