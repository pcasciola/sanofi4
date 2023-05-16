import {Component} from "react";
import React from "react";

class HeaderNav extends Component {
    render() {
        return (
            <div  className="visible-lg col-lg-2">
                {/* removed id="leftWrap" on div above for temporary fix and class: "wrap (...)"
                <div className="panel-group" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                    Scheduling Options
                                </a>
                            </h4>
                        </div>
                        <div id="collapse1" className="panel-collapse collapse in">
                            <ul className="list-group">
                                <li className="list-group-item">My Schedule</li>
                                <li className="list-group-item">Schedule with Sanofi Vaccines</li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                    Combination Vaccine Quick Select</a>
                            </h4>
                        </div>
                        <div id="collapse3" className="panel-collapse collapse">
                            <ul className="list-group">
                                <li className="list-group-item">Pediarix</li>
                                <li className="list-group-item">Pentacel</li>
                                <li className="list-group-item">ProQuad</li>
                                <li className="list-group-item">Quadracel</li>
                                <li className="list-group-item">Kinrix</li>
                            </ul>
                        </div>
                    </div>
                </div>
                   */}
            </div>
        )
    }
}

export default HeaderNav;