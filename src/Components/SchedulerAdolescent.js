import React, { Component } from 'react';
import '../App.css';
import SimpleSlider from "./OldSlider"

const combinedSchedule = false;

const vaccineClass = combinedSchedule ? "vaccineCellCombined" : "";

//The following settings are for screenshot purposes only
const fluSliders = 1;   //For screenshot purposes only
const unselected = false; //For flu unseledcted or fluzone

const sliderStyle = {padding : "8px 52px"};

class SchedulerAdolescent extends Component {
    render() {
        return(
                <div className="App">
                        <nav className="navbar navbar-default">
                            <div className="container">
                                <div className="row">
                                    <div className="navbar-header col-md-4 col-xs-4 text-left">
                                        <img className="mainLogo text-center" src="static/sanofi.gif"/>
                                    </div>
                                    <div className="navbar-header text-center col-md-4 col-xs-4">
                                        <h5 className="navbar-brand-sanofi">Immunization Scheduler</h5>
                                    </div>
                                    <div className="navbar-header text-center col-md-4 col-xs-4">
                                        <button type="button" className="navbar-toggle">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    <div className="container-fluid">
                        <div id="leftWrap" className="wrap visible-lg col-lg-2">
                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                                Scheduling Options</a>
                                        </h4>
                                    </div>
                                    <div id="collapse1" className="panel-collapse collapse in">
                                        <ul className="list-group">
                                            <li className="list-group-item">My Schedule</li>
                                            <li className="list-group-item">Schedule with Sanofi Pasteur Vaccines</li>
                                            <li className="list-group-item">Catch-Up Schedule</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                                Safety Information</a>
                                        </h4>
                                    </div>
                                    <div id="collapse2" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            <li className="list-group-item">Prescribing Information</li>
                                            <li className="list-group-item">Important Safety Information</li>
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
                        </div>
                        <div className="col-lg-8 col-xs-12 wrap" style={{padding:"8px"}}>
                            <div className="table-responsive" >
                                <table className="table table-sm table-striped table-bordered" >
                                    <thead>
                                        <tr>
                                            <th scope="col" className="vaccineCell vaccineHeader">
                                                <div className="row text-center">
                                                    <span>Vaccines</span>
                                                </div>
                                                <div style={{lineHeight: '7px'}}>
                                                    <span style={{fontSize: '7px'}}>Click vaccine for CDC recommendations</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="ageCellAdolescent">7-10 Years</th>
                                            <th scope="col" className="ageCellAdolescent">11-12 Years</th>
                                            <th scope="col" className="ageCellAdolescent">13-15 Years</th>
                                            <th scope="col" className="ageCellAdolescent">16 Years</th>
                                            <th scope="col" className="ageCellAdolescent">17-18 Years</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row" className={"vaccineCell " + vaccineClass}>Hepatitis B (HepB)</th>
                                        <td className="catchup"></td>
                                        <td colSpan={2} className="catchup" style={sliderStyle}>
                                            <SimpleSlider min="0" max="1" combined={combinedSchedule} drugLogo="unselected.png"/>
                                        </td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={"vaccineCell " + vaccineClass}>Tetanus, diptheria and acellular pertussis (Tdap)</th>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={"vaccineCell " + vaccineClass}>Inactivated pollovirus (IPV)</th>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={"vaccineCell " + vaccineClass}>Pneumoccal conjugate (PCV13)</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={"vaccineCell " + vaccineClass}>Influenza (IIV)</th>
                                        {
                                            fluSliders == 1 ?
                                                <td colSpan={5} style={sliderStyle}>
                                                    <SimpleSlider min="0" max={4} drugLogo={unselected ? "unselected.png" : "quadrivalent.png"}/>
                                                </td>
                                                :
                                                <td colSpan={3} style={sliderStyle}>
                                                    <SimpleSlider min="0" max={2} drugLogo="fluad.png"/>
                                                </td>
                                        }

                                        {
                                            fluSliders == 2 ?
                                                <td colSpan={2} style={sliderStyle}>
                                                    <SimpleSlider min="0" max="1" drugLogo="unselected.png"/>
                                                </td>
                                                : null
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row" className={"vaccineCell " + vaccineClass}>Influenza (LAIV)</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td colSpan={2} style={sliderStyle}>
                                            <SimpleSlider min="0" max="1" drugLogo="unselected.png"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={"vaccineCell " + vaccineClass}>Measles, mumps, rubella (MMR)</th>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={"vaccineCell " + vaccineClass}>Varicella (VAR)</th>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={"vaccineCell " + vaccineClass}>Hepatitis A (HepA)</th>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={"vaccineCell " + vaccineClass}>Human papillomavirus</th>
                                        <td></td>
                                        <td></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={"vaccineCell " + vaccineClass}>Meningococcal</th>
                                        <td></td>
                                        <td></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                        <td className="catchup"></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="footerbg">
                                <div className="row">
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <div className="btn-group-vertical verticalFooter" data-toggle="tooltip" data-placement="right" data-title="Click these buttons for Important Safety Information and Prescribing Information for Sanofi Pasteur vaccines.">
                                            <button type="button" className="btn btn-sm btn-default spaceVerticalBtn">Prescribing Information</button>
                                            <button type="button" className="btn btn-sm btn-default spaceVerticalBtn">Important Safety Information</button>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="row btn-group-sm">
                                            <button type="button" className="btn btn-default spaceHorizontalBtn" data-toggle="tooltip" data-placement="top" data-title="Select the vaccinations commonly used in your practice and the age at which they are administered.">
                                                My Schedule
                                            </button>
                                            <button type="button" className="btn btn-default spaceHorizontalBtn" data-toggle="tooltip" data-placement="top" data-title="Click the &quot;Schedule With Sanofi Pasteur Vaccines&quot; tab to view a suggested schedule using Sanofi Pasteur vaccines portfolio.">
                                                Schedule With Sanofi Pasteur Vaccines
                                            </button>
                                            <button type="button" className="btn btn-default spaceHorizontalBtn" data-toggle="tooltip" data-placement="top" data-title="View &quot;Catch-up Schedule&quot; for children who start late or are more than 1 month behind.">
                                                Catch-up Schedule
                                            </button>
                                        </div>
                                        <div className="text-center" style={{color:"#ffffff", marginTop: '8px'}}>
                                            Combination vaccine quick select
                                        </div>
                                        <div className="btn-group-sm" data-toggle="tooltip" data-placement="top" data-title="When the combo buttons are pressed, additional instructions will appear in the tool">
                                            <button type="button" className="btn btn-default spaceHorizontalBtn" data-placement="top" data-container="body" id="SubmitButton" value="">Pediarix</button>
                                            <button type="button" className="btn btn-default spaceHorizontalBtn" data-container="body" data-trigger="click" id="SubmitButton" value="">Pentacel</button>
                                            <button type="button" className="btn btn-default spaceHorizontalBtn" data-container="body" data-trigger="click" id="Button2" value="">ProQuad</button>
                                            <button type="button" className="btn btn-default spaceHorizontalBtn" data-container="body" data-trigger="click" id="Button3" value="" >Quadracel</button>
                                            <button type="button" className="btn btn-default spaceHorizontalBtn" data-container="body" data-trigger="click" id="Button3" value="">Kinrix</button>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <div className="btn-group-vertical verticalFooter">
                                            <button type="button" className="btn btn-sm btn-default spaceVerticalBtn">Clear</button>
                                            <button type="button" className="btn btn-sm btn-default spaceVerticalBtn">Submit</button>
                                        </div>
                                    </div>
                                </div>
                                <div>&nbsp;</div>
                            </div>
                        </div>
                    </div>
                    {/*
                    <div className="row text-center">
                        <button type="button" className="btn btn-md btn-purple" onClick={this.handleNext}>Next</button>
                    </div>
                    <br/>
                    */}
                        </div>
                    </div>
                </div>


        );
    }
}

export default SchedulerAdolescent;