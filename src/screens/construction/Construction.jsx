import React from "react";
import Container from "react-bootstrap/Container";
import Logo from "../../components/logo/Logo";
import './_construction.scss'

const ConstructionScreen = () => {
    return (
        <Container className='constructWrapper'>
            <Logo />
            <section className="d-flex justify-content-between gap">
                <section className="">
                    <h1 className="logo_text mt-5 mb-5">COMING SOON</h1>
                    <p className="text-typo-text-base welcome-text">
                        Welcome to DISHAK Technologies Pvt Ltd
                        <br /><a href="https://www.dishak.com">(www.dishak.com)!</a>
                    </p>
                    <p>
                        We are currently working hard to bring you an enhanced online experience. Our website is currently under construction, and we apologize for any inconvenience caused. Rest assured, our team is diligently working to finalize the website and provide you with valuable information about our products and services.
                        <br /><b>In the meantime, if you have any questions or require immediate assistance, please feel free to reach out to us via email at contact@dishak.com or give us a call at +91 8971166342. Our friendly team is always ready to assist you.</b>
                        <br />Thank you for your patience and understanding. We look forward to showcasing our new website soon and serving you better.
                    </p>
                </section>
                <section>
                    <img
                        src={process.env.PUBLIC_URL + '/images/under-construct.png'}
                        alt=""
                        className="underconstruction"
                    />
                </section>
            </section>
        </Container>
    )
}

export default ConstructionScreen