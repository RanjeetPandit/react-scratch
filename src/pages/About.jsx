import React from "react";
class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="hero" className="d-flex align-items-center">
                    <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                        <h1>About</h1>
                        <a href="about.html" className="btn-about">About Me</a>
                    </div>
                </section>
            </React.Fragment >
        )
    }

}
export default About;