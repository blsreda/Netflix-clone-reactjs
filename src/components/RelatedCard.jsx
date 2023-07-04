import { getDate, getImage, getName, getOverView, getRandomNumber } from "../utils/constants";

const RelatedCard = ({data,datatype}) => {
    return ( 
        <div className='card-related'>
            <img
            loading="lazy" 
            src={`https://image.tmdb.org/t/p/original/${data?getImage(data,datatype):null}`}  
            className='h-[150px] w-full object-cover'  alt=''/>
            <div className="content pb-[20px] pt-[10px] px-[10px]">
                <h1 className="text-white text-[15px] font-medium">
                    {data ? getName(data):null }
                </h1>
                <div className="flex items-center justify-between">
                    <div className='flex flex-col gap-[5px]'>
                        <span className='text-[#66bb6a] text-[14px]'>{getRandomNumber(100)}% Match</span>
                        <div className="flex gap-3 items-center">
                            <span className="text-[13px] text-white">{data?getDate(data,datatype):null}</span>
                            <span className='text-[10px] text-white p-[1px] flex items-center justify-center'
                            style={{
                                border:'1px solid rgba(69,79,91)'
                            }}>{getRandomNumber(100)}+</span>
                        </div>
                    </div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <p className="text-[14px] text-white">
                    {data ? getOverView(data,90):null }
                </p>
            </div>
        </div> 
    );
}

export default RelatedCard;