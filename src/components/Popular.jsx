import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPopular } from "../Store/movieSlice";
import NetflixSlider from "./NetflixSlider";

const Popular = ({type}) => {
    const [popularList ,setPopularList] =useState(null)
    const dispatch =useDispatch();
    useEffect(()=> {
        dispatch(getPopular(type)).unwrap()
        .then(data => {
            setPopularList(data.results);
        })
    },[])
    return ( 
        <div className="flex flex-col gap-[10px]">
            <h1 className="text-[25px] text-white font-medium">Popular On Netflix</h1>
            {popularList && <NetflixSlider dataList={popularList} type='poster' datatype={type} />}
        </div>
    );
}
export default Popular;