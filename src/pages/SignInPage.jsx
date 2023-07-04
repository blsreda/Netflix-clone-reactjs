import SignInForm from "../components/SignInForm";
const SignInPage = () => {
    return ( 
        <section
        className='w-screen min-h-[32rem] bg-cover px-[2rem] pb-[40px]'
        style={{
            backgroundImage : 'linear-gradient(0deg, rgba(0, 8, 29, 0.7), rgba(0, 8, 29, 0.7)),url(/login-image.jpg)'
        }}>
            <header className="w-full flex justify-between items-center px-[40px] pb-[10px]">
                <img className='max[950px]:w-[150px] w-[200px]' src="/logo.png" alt="" />
            </header>
            <div className="w-full flex items-center justify-center">
                <SignInForm/>
            </div>
        </section>
    );
}
export default SignInPage;