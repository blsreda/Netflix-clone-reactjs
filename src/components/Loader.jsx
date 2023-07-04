import { ClipLoader } from "react-spinners";
import BeatLoader from "react-spinners/BeatLoader";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = ({type}) => {
    if(type=='page') {
        return (
            <div className='fixed left-0 top-0 w-screen h-screen z-[9999] bg-black flex items-center justify-center'>
                <BeatLoader
                color='#e50914'
                size={30}
                />
            </div> 
        );
    }
    else if(type ==='player') {
        return (
            <div className='absolute left-0 top-0 w-full h-full bg-black flex items-center justify-center'>
                <PuffLoader
                color='#e50914'
                size={80}
                />
            </div>  
        );
    }
    else {
        return (
            <div className='w-max h-max flex items-center justify-center'>
                <ClipLoader
                color='black'
                size={30}
                />
            </div>  
        );
    }
}

export default Loader;