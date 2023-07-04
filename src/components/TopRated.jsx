import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NetflixSlider from "./NetflixSlider";
import { getTopRated } from "../Store/movieSlice";

const TopRated = ({type}) => {
    const [topRatedList ,setTopRatedList] =useState(null)
    const dispatch =useDispatch();
    useEffect(()=> {
        dispatch(getTopRated(type)).unwrap()
        .then(data => {
            setTopRatedList(data.results);
        })
    },[])
    return ( 
        <div className="flex flex-col gap-[10px]">
            <h1 className="text-[25px] text-white font-medium">Top Rated</h1>
            {topRatedList && <NetflixSlider dataList={topRatedList} type='backdrop' datatype={type} />}
        </div>
    );
}
export default memo(TopRated);