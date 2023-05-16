import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactGA from "react-ga";

class Disclaimer extends Component {

    render() {

        ReactGA.initialize((window.location.hostname.indexOf("spimmunizationscheduler") != -1) ? "UA-112999132-3" : "UA-112999132-1", {
            debug: false
        });
        ReactGA.pageview("/disclaimer");

        return (
            <div className="App">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xs-4">

                            </div>
                            <div className="navbar-header text-center col-md-4 col-xs-4">
                                <h4 className="navbar-brand-sanofi">Immunization Scheduler</h4>
                            </div>
                            <div className="navbar-header text-right col-md-4 col-xs-4">
                                <img className="mainLogo text-center" src="static/sanofi_new.gif"/>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container wrap disclaimer">
                    <h4>Important Disclaimer Information</h4>
                    <p className="text-left">This Immunization Scheduler is not an electronic medical records database and is provided for
                        informational purposes only. Health care providers (HCPs) should consult <a href="http://www.cdc.gov/" target="_blank">www.cdc.gov</a> for the most current vaccination recommendations. In
                        addition, HCPs should see full accompanying Prescribing Information before administering any vaccine. Please be
                        advised that some CDC recommendations might be inconsistent with the currently licensed products.
                    </p>
                    <p className="text-left">This site is intended for U.S. Health Care Professionals only. Please click next to continue.
                    </p>

                    <br/>
                    <div className="row text-center">
                        <Link to={'/Introduction'}>
                            <button className='btn btn-md btn-purple'>Next</button>
                        </Link>
                    </div>
                    <br/>
                </div>
                <footer className="navbar navbar-fixed-bottom disclaimer"> © 2022 Sanofi Pasteur Inc. All rights reserved. <a href="https://www.sanofi.us/en/legal-notice" target="_blank">Legal disclaimer information</a> and <a href="https://www.sanofi.us/en/legal-notice#Privacypolicy" target="_blank">Privacy Policy</a>.
                    Questions or Comments? <a href="http://contactus.sanofi-aventis.us/" target="_blank">Click here</a> to contact us.
                    This site is intended for use by U.S. Health Care Professionals only.
                    MAT-US-2005119-v3.0-10/2022</footer>
            </div>
        );
    }
}

export default Disclaimer;