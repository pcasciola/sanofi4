import React from "react";

import Progress from "./ProgressDialog"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

class SubmitDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            HighlightPractice: true,
            ShowSanofiLogo: true,
            generatePDF: this.props.generatePDF,
            progressDialog: false,
            isLoaded: this.props.isLoaded,
            SchedulerEmail: this.props.SchedulerEmail
        };
        this.handleContinue = this.handleContinue.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    handleContinue = () => {
        this.state.generatePDF(false, this.state.ShowSanofiLogo, this.state.HighlightPractice);
        this.setState({
            progressDialog: true
        });
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    render() {

        let progressDialog = this.state.progressDialog;
        let HighlightPracticeCheckbox = this.state.HighlightPractice ? "On" : "Off";
        let ShowSanofiLogoCheckbox = this.state.ShowSanofiLogo ? "On" : "Off";

        if (progressDialog===true) {
            return <Progress open={true} isLoaded={this.state.isLoaded} SchedulerEmail={this.state.SchedulerEmail} />
        }

        return (
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <h4 id="alert-dialog-title" className="text-center">Submit</h4>
                        <div id="alert-dialog-description">
                            <div className="row form-group">
                                <div className={"col-xs-6 text-right logInSwitchForm"}>
                                    <label htmlFor="HighlightPractice">Include Practice Name in PDF?</label>
                                </div>
                                <div className={"col-xs-6"}>
                                    <div className="checkbox text-left">
                                        <label className="switch">
                                            <input type="checkbox" name="HighlightPractice" checked={this.state.HighlightPractice} onChange={this.handleInputChange} />
                                            <span className="slider round"></span>
                                        </label>
                                        {HighlightPracticeCheckbox}
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className={"col-xs-6 text-right logInSwitchForm"}>
                                    <label htmlFor="ShowSanofiLogo">Show Sanofi Pasteur logo in PDF?</label>
                                </div>
                                <div className={"col-xs-6"}>
                                    <div className="checkbox text-left">
                                        <label className="switch">
                                            <input type="checkbox" name="ShowSanofiLogo" checked={this.state.ShowSanofiLogo} onChange={this.handleInputChange} />
                                            <span className="slider round"></span>
                                        </label>
                                        {ShowSanofiLogoCheckbox}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <button onClick={this.handleContinue} className="btn btn-default btn-purple btn-block">Continue</button>
                                </div>
                            </div>
                        </div>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
        );
    }
}

export default SubmitDialog;