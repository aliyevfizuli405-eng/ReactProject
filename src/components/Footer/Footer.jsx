import './Footer.css'


// Lucide Icons

export const Footer = () => {
    return (
        <>  
        <hr />
            <footer className="footer container-xl flex flex-column justify-center items-center">
                <div className="footer__content p-4">
                    <h2 className='title footer__title text-light mb-4'>Connect socially with youplay</h2>
                    <div className="social">
                        <div className="social__content flex">
                            <div className="social__media text-light fs-1 col-3 p-2"><i className="bx bxl-facebook-square"></i></div>
                            <div className="social__media text-light fs-1 col-3 p-2" ><i className="fa-brands fa-square-twitter"></i></div>
                            <div className="social__media text-light fs-1 col-3 p-2"><i className="fa-brands fa-square-google-plus"></i></div>
                            <div className="social__media text-light fs-1 col-3 p-2"><i className="fa-brands fa-square-youtube"></i></div>
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