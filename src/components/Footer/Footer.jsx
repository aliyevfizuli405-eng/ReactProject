import './Footer.css'


// Lucide Icons

export const Footer = () => {
    return (
        <>  
        <hr />
            <footer className="footer container-md flex flex-col justify-center items-center">
                <div className="footer__content py-[5rem]">
                    <h2 className='title footer__title text-[34px] text-white mb-4'>Connect socially with youplay</h2>
                    <div className="social">
                        <div className="social__content grid gap-3 grid-cols-12">
                            <div className="social__media -skew-x-6 text-[35px] col-span-12  md:col-span-3 flex justify-center items-center  bg-[#08032555]  text-white fs-1  p-3"><i className="bx bxl-facebook-square"></i></div>
                            <div className="social__media -skew-x-6 text-[35px] col-span-12 md:col-span-3 flex justify-center items-center  bg-[#08032555] text-white fs-1 p-3" ><i className="fa-brands fa-square-twitter"></i></div>
                            <div className="social__media -skew-x-6 text-[35px] col-span-12 md:col-span-3 flex justify-center items-center  bg-[#08032555] text-white fs-1  p-3"><i className="fa-brands fa-square-google-plus"></i></div>
                            <div className="social__media -skew-x-6 text-[35px] col-span-12 md:col-span-3 flex justify-center items-center  bg-[#08032555] text-white fs-1  p-3"><i className="fa-brands fa-square-youtube"></i></div>
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