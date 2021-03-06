import React from "react";

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <header id="header" className="fixed-top">
                    <div className="container-fluid d-flex justify-content-between align-items-center">

                        <h1 className="logo me-auto me-lg-0"><a href="index.html">Kelly</a></h1>

                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <li><a className="active" href="/home">Home</a></li>
                                <li><a href="/about">About</a></li>
                                {/* <li><a href="resume.html">Resume</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="contact.html">Contact</a></li> */}
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>

                        <div className="header-social-links">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>

                    </div>

                </header>
            </React.Fragment>
        )
    }

}
export default Header;