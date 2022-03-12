import {Component} from "react";
import Scheduler from "./Scheduler";
import '../App.css';
import React from "react";
import {Link} from "react-router-dom";
import ReactGA from "react-ga";

//getDisclaimer state no longer needed. also removed this from button for easier routing = onClick={this.handleNext}

class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getDisclaimer: false
        };
        this.handleNext = this.handleNext.bind(this);
    }

    handleNext() {
        this.setState({getDisclaimer: !this.state.getDisclaimer});
    };

    render() {

        ReactGA.pageview("/intro");

        return (
            <div className="App">
                <Scheduler isTutorial={true}/>
                        <div className="row justify-content-end marginTop">
                            <Link to={'/login'}>
                                <button type="button" className="btn btn-md btn-purple">Next</button>
                            </Link>
                        </div>
                        <br/>
                </div>
        );
    }
}

export default Introduction;