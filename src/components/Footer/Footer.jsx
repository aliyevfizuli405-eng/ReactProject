import './Footer.css'


// Lucide Icons

export const Footer = () => {
    return (
        <>  
        <hr />
            <footer className="footer container-md flex flex-col justify-center items-center">
                <div className="footer__content py-[5rem]">
                    <h2 className='title footer__title text-center md:text-left text-[34px] text-white mb-[16px]'>Connect socially with youplay</h2>
                    <div className="social flex justify-center">
                        <div className="social__content flex justify-between gap-2 flex-wrap w-[100%]">
                            <div className="social__media text-[45px] p-8 rounded-xl   md:col-span-3 flex justify-center items-center  bg-[#08032599]  text-white fs-1   p-3 hover:bg-[#08032570] transition ease-in delay-150 duration-2   00"><i className="bx bxl-facebook-square"></i></div>
                            <div className="social__media text-[45px] p-8 rounded-xl  md:col-span-3 flex justify-center items-center  bg-[#08032599] text-white fs-1  p-3 hover:bg-[#08032570] transition ease-in delay-150 duration-2  00" ><i className="fa-brands fa-square-twitter"></i></div>
                            <div className="social__media text-[45px] p-8 rounded-xl  md:col-span-3 flex justify-center items-center  bg-[#08032599] text-white fs-1   p-3 hover:bg-[#08032570] transition ease-in delay-150 duration-2 00"><i className="fa-brands fa-square-google-plus"></i></div>
                            <div className="social__media text-[45px] p-8 rounded-xl  md:col-span-3 flex justify-center items-center  bg-[#08032599] text-white fs-1   p-3 hover:bg-[#08032570] transition ease-in delay-150 duration-2 00"><i className="fa-brands fa-square-youtube"></i></div>
                        </div>
                    </div>
                </div>
                <div className="footer__bar text-center bg-[#08032566] w-[100%] p-3">
                    <span style={{color:"white"}}>
                        nK © 2019. All rights reserved
                    </span>
                </div>
                
            </footer>
        </>

    )
}