import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Required'),
    password: Yup.string().required('Required').min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
        /^[A-Za-z\d@$!%*#?&]{4,60}$/,
        "Your password must contain between 4 and 60 characters."
    )
});

const SignInForm = () => {
    const history =useNavigate();
    const formik = useFormik({
        initialValues: {
        email: "",
        password: "",
        },
        validationSchema: SignInSchema,
    });
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    return ( 
        <form 
        className="flex flex-col p-[50px] h-[600px] pb-[50px] max-w-[450px] text-[#b3b3b3]"
        style={{
            backgroundColor:'rgb(0,0,0,0.6)'
        }}
        onSubmit={()=> history('/home')}
        >
            <h1 className="text-[35px] font-medium text-white mb-[20px]">Sign In
            </h1>
            <input className={`${
                formik.touched.password && formik.errors.password?"border-b-[2px] border-[#e87c03] border-solid":null
            } appearance-none text-[17px] rounded mb-[10px] w-full py-4 px-3  bg-[#333333] leading-tight focus:outline-none`} 
            id="email" name="email" type="email" placeholder="admin"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
            <p className='text-[#e87c03] text-[14px] my-[5px]'>{formik.errors.email}</p>
            ) : null}
            {/* Password with toggle show/hidden */}
            <div className="relative mb-[10px]">
                <input className={`${
                formik.touched.password && formik.errors.password?"border-b-[2px] border-[#e87c03] border-solid":null
                } appearance-none text-[17px] rounded w-full py-4 px-3 bg-[#333333] leading-tight focus:outline-none`} 
                id="password" name="password" 
                type={isPasswordVisible ? 'text' : 'password'} 
                placeholder="admin"
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
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                </svg>
                }
                </button>
            </div>
            {formik.touched.password && formik.errors.password ? (
            <p className='text-[#e87c03] text-[14px] my-[5px]'>{formik.errors.password}</p>
            ) : null}
            <button 
            className='bg-[#e50914] text-[20px] my-[10px] text-white font-medium rounded-[5px] py-[10px] px-[15px]' 
            type='submit'
            onClick={()=> history('/home')}>Sign In</button>
            {/* Remember me & need help */}
            <div className="flex items-center justify-between text-[15px] mb-[25px]">
                <div className="flex items-center">
                    <input
                    className="mr-2"
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    />
                    <label htmlFor="rememberMe">
                    Remember me
                    </label>
                </div>
                <a
                    className=" text-white text-[15px] hover:underline"
                    href="#"
                >
                    Need help?
                </a>
            </div>
            <span className='my-[10px]'>
                New to Netflix? <a className='text-white hover:underline' href="">Sign up now</a>.
            </span>
            <span className='text-[14px]'>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className='hover:underline text-[#0071eb]' href="">Learn more.</a>
            </span>
        </form>
    );
}
export default SignInForm;