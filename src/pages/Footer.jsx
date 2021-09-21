import React from "react";

class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <footer id="footer">
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Kelly</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }

}
export default Footer;