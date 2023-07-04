import Card from "./Card";
import { memo } from "react";
import { getImage} from "../utils/constants";

const Backdrop = ({data,datatype}) => {
    return ( 
        <div className='backdrop relative w-[300px] h-[200px] max-[500px]:w-[250px] max-[500px]:h-[150px]'>
            <img 
            loading="lazy"
            className='object-cover w-full h-full'
            src={`https://image.tmdb.org/t/p/original/${data?getImage(data,'backdrop'):null}`}  
            alt=''
            />
            <Card datatype={datatype} data={data}/>
        </div>
    );
}

export default memo(Backdrop);