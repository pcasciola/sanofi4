import {Component} from "react";
import React from "react";
import Header from "./Header";
import Scheduler from "./Scheduler";
import ReactGA from "react-ga";

class LogInModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HealthCareProviderName: '',
            HealthCareProviderEmail:'',
            NPI: '',
            PracticeName: '',
            PracticeAddress: '',
            PracticeCity: '',
            PracticeState: '',
            PracticeZip: '',
            SPAccountNumber: '',
            Territory: '',
            ScheduleName: '',
            EmailCheckbox: false,
            ScheduleEmail: '',
            SanofiLogo: true,
            PracticeNameSwitch: true,
            formSubmission: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        ReactGA.pageview("/registration");
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            formSubmission: true
        });
    }

    render() {
        const emailCheckbox = this.state.EmailCheckbox;
        const formSubmission = this.state.formSubmission;
        let scheduleEmail = this.state.ScheduleEmail;

        if(emailCheckbox===true) {
            scheduleEmail = this.state.HealthCareProviderEmail;
        }

        if(formSubmission===true) {
            return <Scheduler HealthCareProviderName={this.state.HealthCareProviderName} HealthCareProviderEmail={this.state.HealthCareProviderEmail}
                              NPI={this.state.NPI} PracticeName={this.state.PracticeName} PracticeAddress={this.state.PracticeAddress}
                              PracticeCity={this.state.PracticeCity} PracticeState={this.state.PracticeState} PracticeZip={this.state.PracticeZip}
                              SPAccountNumber={this.state.SPAccountNumber} Territory={this.state.Territory} ScheduleName={this.state.ScheduleName}
                              EmailCheckbox={this.state.EmailCheckbox} ScheduleEmail={scheduleEmail} SanofiLogo={this.state.SanofiLogo}
                              PracticeNameSwitch={this.state.PracticeNameSwitch} />
            // old = return <Redirect to={'/Scheduler'}/>
        }

        let EmailCheckbox = this.state.EmailCheckbox ? "On" : "Off";
        let SanofiLogoCheckbox = this.state.SanofiLogo ? "On" : "Off";
        let PracticeCheckbox = this.state.PracticeNameSwitch ? "On" : "Off";

        return(
            <div className="App">
                <Header burgerIcon={false} showScheduleType={false}/>
                <div className="container-fluid">
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-8 col-xs-12 wrap" style={{padding:"8px"}}>
                                <form onSubmit={this.handleSubmit} >
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInForm"}>
                                            <label htmlFor="HealthCareProviderName"><span className="redText">*</span>Health Care Provider Name:</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <input type="text" className="form-control" name="HealthCareProviderName" value={this.state.HealthCareProviderName} onChange={this.handleInputChange} placeholder="Enter Health Care Provider Name" required/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInForm"}>
                                            <label htmlFor="HealthCareProviderEmail"><span className="redText">*</span>Health Care Provider Email:</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <input type="email" className="form-control" name="HealthCareProviderEmail" value={this.state.HealthCareProviderEmail} onChange={this.handleInputChange} placeholder="Enter Health Care Provider Email" required/>
                                        </div>
                                    </div>
                                    {/*
                                        <div className="row form-group">
                                            <div className={"col-xs-4 text-right logInForm"}>
                                                <label htmlFor="NPI">NPI#:</label>
                                            </div>
                                            <div className={"col-xs-8"}>
                                                <input type="text" className="form-control" name="NPI"
                                                       value={this.state.NPI} onChange={this.handleInputChange}
                                                       placeholder="Enter NPI Number"/>
                                            </div>
                                        </div>
                                    */}
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInForm"}>
                                            <label htmlFor="PracticeName">Practice Name:</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <input type="text" className="form-control" name="PracticeName" value={this.state.PracticeName} onChange={this.handleInputChange} placeholder="Enter Practice Name"/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInForm"}>
                                            <label htmlFor="PracticeAddress">Practice Address:</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <input type="text" className="form-control" name="PracticeAddress" value={this.state.PracticeAddress} onChange={this.handleInputChange} placeholder="Enter Practice Address"/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInForm"}>
                                            <label htmlFor="PracticeCity">Practice City:</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <input type="text" className="form-control" name="PracticeCity" value={this.state.PracticeCity} onChange={this.handleInputChange} placeholder="Enter Practice City"/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInForm"}>
                                            <label htmlFor="PracticeState">Practice State:</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <input type="text" className="form-control" name="PracticeState" value={this.state.PracticeState} onChange={this.handleInputChange} placeholder="Enter Practice State"/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInForm"}>
                                            <label htmlFor="PracticeZip">Practice Zip Code:</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <input type="text" className="form-control" name="PracticeZip" value={this.state.PracticeZip} onChange={this.handleInputChange} placeholder="Enter Practice Zip Code"/>
                                        </div>
                                    </div>
                                    {/*
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInForm"}>
                                            <label htmlFor="SPAccountNumber">SP Account Number:</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <input type="text" className="form-control" name="SPAccountNumber" value={this.state.SPAccountNumber} onChange={this.handleInputChange} placeholder="Enter SP Account Number"/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInForm"}>
                                            <label htmlFor="Territory">Territory:</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <input type="text" className="form-control" name="Territory" value={this.state.Territory} onChange={this.handleInputChange} placeholder="Enter Territory"/>
                                        </div>
                                    </div>
                                    */}
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInForm"}>
                                            <label htmlFor="ScheduleName"><span className="redText">*</span>What would you like to name this schedule?</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <input type="text" className="form-control" name="ScheduleName" value={this.state.ScheduleName} onChange={this.handleInputChange} placeholder="Enter Schedule Name" required/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInSwitchForm"}>
                                            <label htmlFor="EmailCheckbox">Toggle here if below email is the same as above</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <div className="checkbox text-left">
                                                <label className="switch">
                                                    <input type="checkbox" name="EmailCheckbox" checked={this.state.EmailCheckbox} onChange={this.handleInputChange} />
                                                    <span className="slider round"></span>
                                                </label>
                                                {EmailCheckbox}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInForm"}>
                                            <label htmlFor="ScheduleEmail"><span className="redText">*</span>What email do you want this schedule sent, if applicable?</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <input type="email" className="form-control" name="ScheduleEmail" value={scheduleEmail} onChange={this.handleInputChange} placeholder="Enter Email" required/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInSwitchForm"}>
                                            <label htmlFor="SanofiLogo">Show Sanofi Pasteur logo on PDF?</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <div className="checkbox text-left">
                                                <label className="switch">
                                                    <input type="checkbox" name="SanofiLogo" checked={this.state.SanofiLogo} onChange={this.handleInputChange} />
                                                    <span className="slider round"></span>
                                                </label>
                                                {SanofiLogoCheckbox}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className={"col-xs-4 text-right logInSwitchForm"}>
                                            <label htmlFor="PracticeNameSwitch">Show practice name on PDF?</label>
                                        </div>
                                        <div className={"col-xs-8"}>
                                            <div className="checkbox text-left">
                                                <label className="switch">
                                                    <input type="checkbox" name="PracticeNameSwitch" checked={this.state.PracticeNameSwitch} onChange={this.handleInputChange} />
                                                    <span className="slider round"></span>
                                                </label>
                                                {PracticeCheckbox}
                                            </div>
                                        </div>
                                    </div>
                                    {/*<Link to={'/Scheduler'}>*/}
                                            <input type="submit" value="Continue" className="btn btn-default btn-purple btn-block"/>
                                </form>
                        </div>
                </div>
            </div>

        );
    }
}

export default LogInModal;