import YouTube from 'react-youtube';
import { useSelector } from "react-redux";
// import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setCardSelected, setDialogOpen } from '../Store/movieSlice';
import { useState } from 'react';
import Loader from './Loader';

const PlayerComp = () => {
    const trailerSelected =useSelector(state => state.movie.trailerSelected);
    const [videoLoading,setVideoLoading] =useState(true);
    const dispatch =useDispatch();
    const opts = {
        width:'100%',
        height:'100%',
        playerVars: {
            controls:0,
            showinfo:0,
            disablekb:1,
            modestbranding:1,
            autoplay: 1,
            muted:1,
            loop:1,
            autohide:1,
            rel:0,
            enablejsapi:1,
            playsinline:0,
            iv_load_policy:3,
            frameborder:0
        },
    };
    const handleClose =()=> {
        dispatch(setCardSelected(null))
        dispatch(setDialogOpen(false))
        document.body.classList.remove('modal-open');
    }
    return (
        <div className='player-container w-[full] h-[400px] relative'>
            {videoLoading && <Loader type='player'/>}
            <button 
            className={`absolute right-[20px] top-[10px] bg-stone-200 p-[7px] rounded-full ${videoLoading?'hidden':'flex'} justify-center items-center z-40`}
            onClick={()=> handleClose()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
            </button>
            <YouTube className='z-10 h-full' 
            videoId={trailerSelected}
            onReady={()=> {
                setVideoLoading(false);
            }} 
            opts={opts}/>
        </div> 
    );
}

export default PlayerComp;