import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const history= useNavigate();
    return ( 
        <header className="w-full flex justify-between items-center max-[600px]:px-[0] py-[7px] px-[40px]">
            <img className='max-[950px]:w-[150px] w-[200px]' src="/logo.png" alt="" />
            <button 
            className='netflix-btn'
            onClick={()=>history('/signin')}
            >Sign In</button>
        </header>
    );
}
export default Navbar;