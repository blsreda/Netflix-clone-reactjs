import { Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
// import AddIcon from '@mui/icons-material/Add';
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";
import { accordionList, sectionsInfo, sectionsinfo } from "../utils/constants";
import Footer from "../components/Footer";
import { Fragment, useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Netflix() {
  const [isLoading,setIsloading] =useState(true);
  useEffect(()=> {
    setIsloading(false);
  },[])
  isLoading?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll");
  return (
    <Fragment>
      {isLoading && <Loader type='page'/>}
      <main>
        {/* Home screen section */}
        <section className='w-screen min-h-[32rem] bg-cover px-[2rem] pb-[40px]'
        style={{
          backgroundImage:'linear-gradient(0deg, rgba(0, 8, 29, 0.7), rgba(0, 8, 29, 0.7)),url(/login-image.jpg)'
        }}>
            <Navbar/>
            <div className="content px-[150px] pt-[200px] max-[950px]:px-[50px] max-[950px]:pt-[50px] max-[550px]:px-[0] flex flex-col gap-2 text-[25px] font-semibold text-start text-white z-50">
                <h1 className='max-[950px]:text-[1.7em] font-extrabold max-[950px]:max-w-[100%] text-[2.5em] max-w-[70%]'
                >Unlimited movies, TV shows, and more.</h1>
                <span className="my-[5px] font-medium max[950px]:text-[17px]">Watch anywhere. Cancel anytime.</span>
                <div 
                className="flex flex-col gap-2 mt-[20px] w-full px-7 py-5"
                style={{
                  background:'linear-gradient(0deg, rgba(0, 8, 29, 1), rgba(0, 8, 29, 1)) padding-box,linear-gradient(271.65deg, #233371 5.26%, #00197a 50.02%,#e50914 97.68%) border-box',
                  border:'4px solid transparent'
                }}>
                  <p className="text-[20px] mb-[10px]">Ready to watch? Enter your email to create or restart your membership.</p>
                  <SignUpForm />
                </div>
            </div>
        </section>
        <div className="px-[2rem] max-[550px]:px-[1.3rem]"
        style={{
            backgroundImage:'linear-gradient(0deg, rgba(0, 8, 29, 1), rgba(0, 8, 29, 1))'
        }}>
            {
              sectionsInfo.map((item,index)=> {
                if(index % 2 ===0) {
                  return (
                    <section key={item.id} className="pb-[60px] pt-[60px] bg-[#090626] px-[120px] max-[700px]:px-[50px] max-[550px]:px-[10px]">
                      <div className="flex max-[1020px]:flex-wrap gap-[30px] justify-center items-center">
                        <div className="content w-[40%] max-[1020px]:w-full px-[10px] max-[550px]:text-center text-white">
                          <h1 className='text-[30px] max-[500px]:text-[25px] font-bold mb-[20px]'>{item.heading}</h1>
                          <p className='text-[18px] max-[500px]:text-[17px] font-semibold'>{item.details}</p>
                        </div>
                        <img src={item.imgLink} className="w-[400px] h-[300px] max-[550px]:w-[350px] max-[550px]:h-[250px] max-[450px]:w-[300px] max-[450px]:h-[200px]" alt=""/>
                      </div>
                      {index < sectionsInfo.length-1 ?<hr className="w-full my-[40px]"/>:null}
                    </section>
                  )
                }
                else {
                  return (
                    <section key={item.id} className="pt-[60px] pb-[60px] bg-[#090626] px-[120px] max-[700px]:px-[50px] max-[550px]:px-[10px]">
                      <div className="flex max-[1020px]:flex-wrap gap-[30px] justify-center items-center">
                        <img src={item.imgLink} className="w-[400px] h-[300px] max-[550px]:w-[350px] max-[550px]:h-[250px] max-[450px]:w-[300px] max-[450px]:h-[200px]" alt=""/>
                        <div className="content w-[40%] max-[1020px]:w-full px-[10px] max-[550px]:text-center text-white">
                          <h1 className='text-[30px] max-[500px]:text-[25px] font-bold mb-[20px]'>{item.heading}</h1>
                          <p className='text-[18px] max-[500px]:text-[17px] font-semibold'>{item.details}</p>
                        </div>
                      </div>
                      {index < sectionsInfo.length-1 ?<hr className="w-full my-[40px]"/>:null}
                    </section>
                  )
                }
              })
            }
            {/* Frequently Asked Questions section */}
            <section className="px-[100px] max-[700px]:px-[50px] max-[550px]:px-[10px] pb-[100px] pt-[50px]">
                <h1 className="text-[40px] max-[700px]:text-[30px] font-bold mb-[20px] text-white">Frequently Asked Questions</h1>
                <div>
                {accordionList.map(item => (
                    <Accordion key={item.id} sx={{marginBottom:'5px'}}>
                      <AccordionSummary
                        expandIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-9 h-9">
                        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                        </svg>
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                          background:'rgba(19, 33, 68, 1)',
                          padding:'10px 15px',
                          color:'white',
                          borderBottom:'1px solid black'
                        }}
                      >
                        <h1 className="text-[25px] max-[400px]:text-[20px] font-medium">{item.heading}</h1>
                      </AccordionSummary>
                      <AccordionDetails 
                      sx={{
                        background:'rgba(19, 33, 68, 1)',
                        padding:'15px',
                        color:'white',
                      }}>
                        <p className="text-[25px] font-medium max-[500px]:text-[20px] max-[450px]:text-[px]">
                          {item.details}
                        </p>
                      </AccordionDetails>
                    </Accordion>
                    ))}
                </div>
                <p className="text-[20px] max-[500px]:text-[17px] text-white font-medium my-[20px]">Ready to watch? Enter your email to create or restart your membership.</p>
                <SignUpForm />
            </section>
        </div>
        <Footer/>
      </main>
    </Fragment>
  )
}
