import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NetflixSlider from "./NetflixSlider";
import { getTrending } from "../Store/movieSlice";

const Trending = ({type}) => {
    const [trendingList ,setTrendingList] =useState(null)
    const dispatch =useDispatch();
    useEffect(()=> {
        dispatch(getTrending(type)).unwrap()
        .then(data => {
            setTrendingList(data.results);
        })
    },[])
    return ( 
        <div className="flex flex-col gap-[10px]">
            <h1 className="text-[25px] text-white font-medium">Trending Now</h1>
            {trendingList && <NetflixSlider dataList={trendingList} type='backdrop' datatype={type} />}
        </div>
    );
}
export default memo(Trending);