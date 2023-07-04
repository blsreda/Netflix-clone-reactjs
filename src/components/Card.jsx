import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getMovieTrailers, getTvTrailers,setCardSelected,setDialogOpen,setTrailerSelected } from '../Store/movieSlice';
import { getGenreName, getImage, getName, getRandomNumber } from "../utils/constants";
import { useNavigate } from 'react-router-dom';

const Card = ({data,datatype}) => {
    const genresMovieList =useSelector(state => state.movie.genresMovieList);
    const genresTVList =useSelector(state => state.movie.genresTVList);
    const [trailers,setTrailers] =useState(null);
    const history = useNavigate();
    const handleClickPlay = (key)=> {
        dispatch(setTrailerSelected(key));
        history('/player');
    }
    const handleClickMore = (key,data,datatype)=> {
        dispatch(setTrailerSelected(key));
        dispatch(setCardSelected({data,datatype}))
        dispatch(setDialogOpen(true))
        document.body.classList.add('modal-open');
    }
    const dispatch =useDispatch();
    useEffect(()=> {
        if(datatype ==='tv') {
            dispatch(getTvTrailers(data.id)).then((res) => {
                setTrailers(res.payload?.results?.filter(item => item.type === "Trailer"))
            })
        }
        else  {
            dispatch(getMovieTrailers(data.id)).then((res) => {
                setTrailers(res.payload?.results?.filter(item => item.type === "Trailer"))
            })
        }
    },[])
    return ( 
        <div className='card-hover w-[400px] h-max'>
            <img
            loading='lazy'
            className="h-[120px] w-full"
            src={`https://image.tmdb.org/t/p/original/${data?getImage(data,'backrop'):null}`}  alt=''
            onClick={()=> handleClickPlay(trailers[0]?.key)}
            />
            <div className="content pb-[20px] pt-[10px] px-[10px] bg-[#141414]">
                <h1 className="text-white text-[15px] font-medium">
                    {data ? getName(data,datatype):null }
                </h1>
                <div className='flex items-center gap-[5px] my-[5px]'>
                    <span className='text-[#66bb6a] text-[14px]'>{getRandomNumber(100)}% Match</span>
                    <span className='text-[10px] text-white p-[1px] flex items-center justify-center'
                    style={{
                        border:'1px solid rgba(69,79,91)'
                    }}>{getRandomNumber(100)}+</span>
                    <span className='text-[10px] text-white p-[1px] flex items-center justify-center'
                    style={{
                        border:'1px solid rgba(69,79,91)'
                    }}>HD</span>
                </div>
                <div className="flex justify-between items-center my-[5px] gap-[5px] text-white">
                    <div className='flex items-center'>
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                        </button>
                        <button onClick={()=> handleClickPlay(trailers[0]?.key)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </div>
                    <button onClick={()=>handleClickMore(trailers[0]?.key,data,datatype)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                    </svg>
                    </button>
                </div>
                <div className="flex flex-wrap">
                    {data.genre_ids.map((gnr,indx) => (
                        <div className="flex text-white text-[13px]" key={gnr}>
                            <span className='w-max'>
                                {
                                datatype ==='movie'?
                                genresMovieList && getGenreName(genresMovieList,'movie',gnr)
                                :genresTVList && getGenreName(genresTVList,'tv',gnr)
                                }
                            </span>
                            {(indx < data.genre_ids.length-1 ) && 
                                <span className='text-[#b3b3b3] mx-[4px]'>•</span>
                            }
                        </div>
                    ))}
                </div> 
            </div>
        </div> 
    );
}

export default Card;