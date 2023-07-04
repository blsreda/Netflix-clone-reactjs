import YouTube from 'react-youtube';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Loader from '../components/Loader';

const PlayerPage = () => {
    const trailerSelected =useSelector(state => state.movie.trailerSelected);
    const [isLoading,setIsloading] =useState(true);
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
    const history=useNavigate();
    isLoading?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll");
    return (
        <Fragment>
            {isLoading && <Loader type='page'/>}
            <div className='player-container w-screen h-screen relative'>
                <button className='absolute left-[20px] top-[20px] z-40' onClick={()=> history(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
                </button>
                <YouTube 
                className='z-10 h-full'
                onReady={()=>setIsloading(false)}
                videoId={trailerSelected} opts={opts}/>
            </div> 
        </Fragment>
    );
}

export default PlayerPage;