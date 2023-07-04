import { useEffect, useRef, useState } from "react";
import Player from "../pages/PlayerPage";
import { useDispatch } from "react-redux";
import { getRelatedMovies, getRelatedTv } from "../Store/movieSlice";
import { useSelector } from "react-redux";
import RelatedCard from "./RelatedCard";
import Dialog from '@mui/material/Dialog';
import PlayerComp from "./PlayerComp";
const DetailsModal = () => {
    const cardSelected =useSelector(state => state.movie.cardSelected)
    const dialogOpen =useSelector(state => state.movie.dialogOpen)
    console.log(cardSelected);
    const dispatch=useDispatch();
    const [relatedData,setRelatedData] =useState(null);
    useEffect(()=> {
        if(cardSelected.datatype ==='movie') {
            dispatch(getRelatedMovies(cardSelected?.data.id)).unwrap()
            .then((data)=> {
                dispatch(setRelatedData(data.results));
            })
        }
        else {
            dispatch(getRelatedTv(cardSelected?.data.id)).unwrap()
            .then((data)=> {
                dispatch(setRelatedData(data.results));
            })
        }
    },[])
    return ( 
        <Dialog
        open={dialogOpen}
        fullWidth
        maxWidth='md'
        scroll='body'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        >
            <PlayerComp/>
            <div className="bg-[#141414] p-[30px]">
                <h1 className="text-white text-[20px] mb-[15px]">More Like This</h1>
                <div className="grid grid-cols-3 max-[750px]:grid-cols-2 max-[550px]:grid-cols-1 gap-[10px]">
                    {relatedData?.map((item,index)=> {
                        if(index < 9) {
                            return <RelatedCard data={item} datatype={cardSelected.datatype} key={index}/>
                        }
                    })}
                </div>
            </div>
        </Dialog>
    );
}

export default DetailsModal;