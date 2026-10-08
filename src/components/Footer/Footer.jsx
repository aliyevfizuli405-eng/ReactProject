import './Footer.css'


// Lucide Icons

export const Footer = () => {
    return (
        <>
            <hr style={{ maxWidth: "1400px", margin: "0 auto", height: "10px", border: "None" }}/>
            <footer>
                <div className="footerContent">
                    <h2 className='title footerTitle'>Connect socially with youplay</h2>
                    <div className="social">
                        <div className="socialContent">
                            <div className="socialMedia"><i className="bx bxl-facebook-square"></i></div>
                            <div className="socialMedia"><i className="fa-brands fa-square-twitter"></i></div>
                            <div className="socialMedia"><i className="fa-brands fa-square-google-plus"></i></div>
                            <div className="socialMedia"><i className="fa-brands fa-square-youtube"></i></div>
                        </div>
                    </div>
                </div>
                <div className="footerBar">
                    <span style={{color:"white"}}>
                        nK © 2019. All rights reserved
                    </span>
                </div>
            </footer>
        </>

    )
}