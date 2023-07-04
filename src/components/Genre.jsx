import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NetflixSlider from "./NetflixSlider";
import { getGenereMovies, getGenereTv } from "../Store/movieSlice";

const Genre = ({type,genreName,genreId}) => {
    const dispatch =useDispatch();
    const [genreData,setGenreData] =useState(null); 
    useEffect(() => {
        if(type==='movie') {
            dispatch(getGenereMovies(genreId)).unwrap()
            .then(data => {
                setGenreData(data.results);
            })
        }
        else {
            dispatch(getGenereTv(genreId)).unwrap()
            .then(data => {
                setGenreData(data.results);
            })
        }
    }, [])
    return ( 
        <div className="flex flex-col gap-[10px]">
            <h1 className="text-[25px] text-white font-medium">{genreName}</h1>
            {genreData && <NetflixSlider datatype={type} dataList={genreData} type='backdrop' />}
        </div>
    );
}
export default Genre;