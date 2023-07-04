// import SearchIcon from '@mui/icons-material/Search';
import { listOfNavbarHome } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const NavbarHome = () => {
    const [scrollTarget, setScrollTarget] =useState(false);
    const [showToggle, setShowToggle] =useState(false);
    window.onscroll =() => {
        if(window.scrollY >=200) setScrollTarget(true);
        else setScrollTarget(false);
    }
    return ( 
        <header 
        className='fixed left-0 top-0 z-30 w-full flex justify-between items-center py-[10px] px-[35px]'
        style={{
            background: scrollTarget?'linear-gradient(0deg, rgba(0, 8, 29, 0.9), rgba(0, 8, 29, 0.9))':'transparent'
        }}>
            
            <div className='flex items-center gap-2 max-[550px]:gap-1'>
                <img className='max[950px]:w-[50px] w-[100px]' src="/logo.png" alt="" />
                <ul className='max-[550px]:hidden flex gap-3'>
                    {listOfNavbarHome.map(item => (
                        <li className='p-[10px]' key={item.id}>
                            <Link to={item.link} className='text-white text-[17px] no-underline hover:no-underline'>{item.value}</Link>
                        </li>
                    ))}
                </ul>
                <div className='relative max-[550px]:block hidden'>
                    <button onClick={()=>setShowToggle(!showToggle) }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <ul className={`${showToggle?'flex-col':'hidden'} gap-2 bg-[#090626] py-2 absolute left-[30%] top-[100%] w-[100px]`}>
                        {listOfNavbarHome.map((item,index) => (
                            <li className={`w-full py-[7px] ${index<listOfNavbarHome.length-1?'border-b border-solid border-[#ffffff30]':null}`} key={item.id}>
                                <Link to={item.link} className='text-white px-[10px]  text-[17px] no-underline hover:no-underline'>{item.value}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className='flex gap-5 items-center'>
                <button className='text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                </svg>
                </button>
                <img className='w-[40px]' src="/avatar.png" alt="" />
                {/* <Tooltip title="Open setting" placement="bottom">
                </Tooltip> */}
            </div>
        </header>
    );
}
export default NavbarHome;