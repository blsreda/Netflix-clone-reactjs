import { useNavigate } from "react-router-dom";
import { getMovieTrailers, getTvTrailers, setTrailerSelected } from "../Store/movieSlice";
import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getImage, getName, getOverView } from "../utils/constants";

const Poster = ({data,datatype}) => {
    const [trailers,setTrailers] =useState(null);
    const history = useNavigate();
    const dispatch =useDispatch();
    const handleClickPlay = (key)=> {
        dispatch(setTrailerSelected(key));
        history('/player');
    }
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
        <div className='poster relative w-[250px] h-[350px] max-[500px]:w-[200px] max-[500px]:h-[300px]'>
            <img 
            loading="lazy"
            className='object-cover w-full h-full'
            src={`https://image.tmdb.org/t/p/original/${data?getImage(data,'poster'):null}`}  
            alt=''
            />
            <div className='overlay'></div>
            <div className="content select-none z-[50] w-full px-[15px] flex flex-col gap-[10px] absolute top-[50%] translate-y-[-50%] transition-[0.7s]">
                <h1 className="text-[20px] text-white">
                    {data?getName(data,datatype):null}
                </h1>
                <p className='text-white text-[16px]'>
                    {data?getOverView(data,60):null}
                </p>
                <button className='d-block mx-auto w-max'
                onClick={()=> handleClickPlay(trailers[0]?.key)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default memo(Poster);