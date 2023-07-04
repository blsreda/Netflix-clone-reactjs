import { useFormik } from "formik";
import { Fragment, useState } from "react";
import * as Yup from 'yup';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Required'),
    password: Yup.string().required('Required').min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
        /^[A-Za-z\d@$!%*#?&]{4,60}$/,
        "Your password must contain between 4 and 60 characters."
    )
});
const SignUpForm = () => {
    const history =useNavigate();
    const formik = useFormik({
        initialValues: {
        email: "",
        password: "",
        },
        validationSchema: SignInSchema,
    });
    const [isClicked,setIsClicked] =useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    }   
    return ( 
        <form 
        className={`flex items-center ${isClicked?'flex-col':null} max-[650px]:flex-col gap-3`}
        onSubmit={()=> history('/home')}
        >
            <input placeholder="Email address" id="email"
            name="email" type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={`text-[20px] text-white px-[10px] py-[15px] ${isClicked?'w-full':'w-[65%]'} outline-none max-[720px]:w-[55%] max-[650px]:w-full`}
            style={{
            backgroundColor:'rgba(0, 0, 0, 0.7)'
            }}/>
            {formik.touched.email && formik.errors.email ? (
            <p className='text-[#e87c03] w-full text-left text-[14px] my-[3px]'>{formik.errors.email}</p>
            ) : null}
            {isClicked ?
            /* Password with toggle show/hidden */
            <Fragment>
                <div 
                className="relative w-full"
                style={{
                    backgroundColor:'rgba(0, 0, 0, 0.7)'
                }}>
                    <input
                    className="text-[20px] w-full text-white px-[10px] py-[15px] outline-none"
                    style={{
                    backgroundColor:'rgba(0, 0, 0, 0.7)'
                    }} 
                    id="password" name="password" 
                    type={isPasswordVisible ? 'text' : 'password'} 
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    />
                    <button
                    type="button"
                    className="absolute top-[50%] translate-y-[-50%] right-3 text-white"
                    onClick={handleTogglePasswordVisibility}
                    >
                    {isPasswordVisible ? 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                    </svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                    </svg>
                    }
                    </button>
                </div>
                {formik.touched.password && formik.errors.password ? (
                <p className='text-[#e87c03] w-full text-left text-[14px] my-[3px]'>{formik.errors.password}</p>
                ) : null}
                <button 
                className='block mx-auto bg-[#e50914] text-[20px] text-white font-medium w-max rounded-[5px] py-[7px] px-[10px]'
                onClick={()=> history('/home')}
                >
                Sign Up
                </button>
            </Fragment>
            :
            <button 
            className='flex bg-[#e50914] w-am text-[25px] text-white font-medium max-[650px]:w-full rounded-[5px] py-[10px] px-[15px]'
            onClick={()=> setIsClicked(true)}
            >
            Get Started
            </button>
            }
        </form>
    );
}
export default SignUpForm;
