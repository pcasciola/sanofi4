import {Component} from "react";
import React from "react";
import Popover from '@material-ui/core/Popover';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";


const CustomTooltip = withStyles(theme => ({
    tooltip: {
        fontSize: 16,
    },
}))(Tooltip);

const styles = {
    popover: {
        opacity: 1,
        marginTop: -14
    },
    popoverTutorial: {
        opacity: 1,
        marginTop: -14,
        zoom:0.85
    },
    typography: {
        useNextVariants: true,
    },
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            burgerIcon: this.props.burgerIcon,
            submitDialog: false,
            isTutorial: this.props.isTutorial,
            anchorMySchedule: null,
            anchorSanofiSchedule: null,
            anchorCombo: null,
            anchorClear: null,
            anchorPreview: null,
            anchorSubmit: null,
            preview: null,
            generatePDF: this.props.generatePDF,
            isLoaded: this.props.isLoaded,
            loadError: this.props.loadError,
            SchedulerEmail: this.props.SchedulerEmail,
            HighlightPractice: this.props.PracticeNameSwitch,
            ShowSanofiLogo: this.props.SanofiLogo,
            progressDialog: false,
            emailDialog: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleMySchedulePopover = event => {
        this.setState({
            anchorMySchedule: event.currentTarget
        });
    };
    handleMyScheduleClose = () => {
        this.setState({
            anchorMySchedule: null,
            isLoaded: false
        });
    };

    handleSanofiSchedulePopover = event => {
        this.setState({
            anchorSanofiSchedule: event.currentTarget
        });
    };
    handleSanofiScheduleClose = () => {
        this.setState({
            anchorSanofiSchedule: null
        });
    };

    handleComboPopover = event => {
        this.setState({
            anchorCombo: event.currentTarget
        });
    };
    handleComboClose = () => {
        this.setState({
            anchorCombo: null
        });
    };

    handleClearPopover = event => {
        this.setState({
            anchorClear: event.currentTarget
        });
    };

    handleClearClose = () => {
        this.setState({
            anchorClear: null
        });
    };

    handlePreviewPopover = event => {
        this.setState({
            anchorPreview: event.currentTarget
        });
    };
    handlePreviewClose = () => {
        this.setState({
            anchorPreview: null
        });
    };

    handleSubmitPopover = event => {
        this.setState({
            anchorSubmit: event.currentTarget
        });
    };

    handleSubmitClose = () => {
        this.setState({
            anchorSubmit: null,
            submitDialog: false
        });
    };

    handleClick = event => {
        if (this.props.showMenu  )
            this.props.showMenu(true);
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    showSanofiSchedule = (flag) => {
        console.log("Header Show Sanofi Only " + this.props.showSanofiOnly);
        if (this.props.showSanofiOnly)
            this.props.showSanofiOnly(flag);
        this.handleClose();
    };

    handleClose = () => {
        if (this.props.showMenu)
            this.props.showMenu(false);

        this.setState({
            anchorEl: null,
        });
    };

    handleProgressClose = () => {
        this.setState({
            progressDialog: false,
        });
    };

    handleEmailClose = () => {
        this.setState({
            emailDialog: false,
        });
    };

    handlePreview = () => {
        console.log("Enter handle preview function here");
        this.props.generatePDF(true, this.state.ShowSanofiLogo, this.state.HighlightPractice);
        /*
        this.setState({
            preview: true
        });
        window.open("http://www.schedulerqa.com/sanofi2_API/generate_pdf.php", "_blank");
         */
    };

    handleSubmit = () => {
        this.setState({
            submitDialog: true
        });

        /*
        fetch('"http://www.schedulerqa.com/sanofi2_API/generate_pdf.php"', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: {
                "hcpName": this.state.HealthCareProviderName
            }
        });
         */
    };

    handleContinue = () => {
        this.state.generatePDF(false, this.state.ShowSanofiLogo, this.state.HighlightPractice);
        this.setState({
            submitDialog: false,
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
        let { anchorEl } = this.state;
        let open = Boolean(anchorEl);
        let { anchorMySchedule,anchorSanofiSchedule,anchorCombo,anchorClear,anchorPreview,anchorSubmit } = this.state;
        let openMySchedulePop = Boolean(anchorMySchedule);
        let openSanofiSchedulePop = Boolean(anchorSanofiSchedule);
        let openComboPop = Boolean(anchorCombo);
        let openClearPop = Boolean(anchorClear);
        let openPreviewPop = Boolean(anchorPreview);
        let openSubmitPop = Boolean(anchorSubmit);
        let burgerClass;
        let submitDialog = this.state.submitDialog;

        if(this.state.burgerIcon === true) {
            burgerClass = "show";
        } else {
            burgerClass = "hide";
        }

        let tutorialClass;

        this.state.isTutorial ? tutorialClass = "borderRed" : tutorialClass = "";

        let emailDialog = this.state.isLoaded;
        let loadError = this.state.loadError;
        let HighlightPracticeCheckbox = this.state.HighlightPractice ? "On" : "Off";
        let ShowSanofiLogoCheckbox = this.state.ShowSanofiLogo ? "On" : "Off";
        let Email = this.state.SchedulerEmail;

        let scheduleName = (this.state.isTutorial || !this.props.showScheduleType) ? "" : (this.props.sanofiOnly ? "Schedule With Sanofi Vaccines" : "My Schedule");

        //console.log(this.state.isLoaded);
        if(this.state.isLoaded===true) {
            emailDialog = true;
        } else {
            emailDialog = false;
        }


        //if(submitDialog===true) {
        //    return (
        //        <div>
        //            <Header burgerIcon={this.props.burgerIcon} isTutorial={this.state.isTutorial} generatePDF={this.state.generatePDF} comboQuickSelect={this.props.comboQuickSelect} isLoaded={this.state.isLoaded} SchedulerEmail={this.state.SchedulerEmail}/>
        //            <SubmitDialog open={submitDialog} generatePDF={this.state.generatePDF} isLoaded={this.state.isLoaded} SchedulerEmail={this.state.SchedulerEmail}/>
         //       </div>
        //);
       // }

        return (
            <div>
            <nav className="navbar navbar-default py-0 py-md-0">
                <div className="container">
                    <div className="row">
                        <div className={"navbar-header col-md-4 col-xs-4"}>
                            <div className={burgerClass}>
                                <button type="button" className={"navbar-toggle " + tutorialClass} onClick={this.handleClick}>
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="sr-only"></span>
                                </button>
                            </div>
                        </div>
                        <div className="navbar-header text-center col-md-4 col-xs-4">
                            <h5 className="navbar-brand-sanofi">Immunization Scheduler</h5>
                        </div>
                        <div className="navbar-header text-right col-md-4 col-xs-4">
                            <img className="mainLogo text-center" src="static/sanofi_new.gif"/>
                        </div>
                    </div>
                </div>

                <Popover
                    id="simple-popper"
                    style={this.state.isTutorial ? styles.popoverTutorial : styles.popover}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <div>
                        <div className="text-center">
                            <h4>Combination Vaccine Quick Select</h4>
                        </div>
                        <div className={"text-center "+tutorialClass}>
                            <ClickAwayListener onClickAway={this.handleComboClose}>
                                <CustomTooltip
                                    open={openComboPop}
                                    onClose={this.handleComboClose}
                                    disableFocusListener
                                    disableHoverListener
                                    title='When a Combination Quick Select link is chosen, the appropriate vaccine will automatically be integrated into the schedule in alignment with the Prescribing Information.'
                                    leaveTouchDelay={5000}
                                    placement={'right'}
                                >
                                    <ul className="list-group burger-Group">
                                        <li><a className="purpleText list-group-item" onClick={this.state.isTutorial ? this.handleComboPopover : () => {this.props.comboQuickSelect("PEDIARIX"), this.handleClose()}}>Pediarix</a></li>
                                        <li><a className="purpleText list-group-item" onClick={this.state.isTutorial ? this.handleComboPopover : () => {this.props.comboQuickSelect("PENTACEL"), this.handleClose()}}>Pentacel</a></li>
                                        <li><a className="purpleText list-group-item" onClick={this.state.isTutorial ? this.handleComboPopover : () => {this.props.comboQuickSelect("PROQUAD"), this.handleClose()}}>ProQuad</a></li>
                                        <li><a className="purpleText list-group-item" onClick={this.state.isTutorial ? this.handleComboPopover : () => {this.props.comboQuickSelect("QUADRACEL"), this.handleClose()}}>Quadracel</a></li>
                                        <li><a className="purpleText list-group-item" onClick={this.state.isTutorial ? this.handleComboPopover : () => {this.props.comboQuickSelect("KINRIX"), this.handleClose()}}>Kinrix</a></li>
                                        <li><a className="purpleText list-group-item" onClick={this.state.isTutorial ? this.handleComboPopover : () => {this.props.comboQuickSelect("VAXELIS"), this.handleClose()}}>Vaxelis</a></li>
                                    </ul>
                                </CustomTooltip>
                            </ClickAwayListener>
                        </div>
                        <div className="text-center">
                            <h4>Clear or Submit Schedule</h4>
                        </div>
                        <div className="text-center">
                            <ul className="list-group burger-Group">
                                <div className="row">
                                    <div className="col-xs-4">
                                        <ClickAwayListener onClickAway={this.handleClearClose}>
                                            <CustomTooltip
                                                open={openClearPop}
                                                onClose={this.handleClearClose}
                                                disableFocusListener
                                                disableHoverListener
                                                title='Pressing the Clear button will empty all selections in the Immunization Schedule and reset to the default view.'
                                                leaveTouchDelay={5000}
                                                placement={'right'}
                                            >
                                                <li className={tutorialClass}><a className="purpleText list-group-item btn" onClick={this.state.isTutorial ? this.handleClearPopover : () => {this.props.clearSchedule(), this.handleClose()}}>Clear</a></li>
                                            </CustomTooltip>
                                        </ClickAwayListener>
                                    </div>
                                    <div className="col-xs-4">
                                        <ClickAwayListener onClickAway={this.handlePreviewClose}>
                                            <CustomTooltip
                                                open={openPreviewPop}
                                                onClose={this.handlePreviewClose}
                                                disableFocusListener
                                                disableHoverListener
                                                title='Pressing the Preview button will download a version of the PDF that will be produced when submitting the Immunization Schedule. This will not send out an email.'
                                                leaveTouchDelay={5000}
                                                placement={'right'}
                                            >
                                                <li className={tutorialClass}><a onClick={this.state.isTutorial ? this.handlePreviewPopover : this.handlePreview} className="purpleText btn list-group-item">Preview</a></li>
                                            </CustomTooltip>
                                        </ClickAwayListener>
                                    </div>
                                    <div className="col-xs-4">
                                            <CustomTooltip
                                                open={openSubmitPop}
                                                onClose={this.handleSubmitClose}
                                                disableFocusListener
                                                disableHoverListener
                                                title='Pressing the Submit button will send an email to the address entered in the login screen with an attached PDF of the schedule selections'
                                                leaveTouchDelay={500000}
                                                placement={'right'}
                                            >
                                                <li className={tutorialClass}><a onClick={this.state.isTutorial ? this.handleSubmitPopover : this.handleSubmit} className="list-group-item btn-purple btn">Submit</a></li>
                                            </CustomTooltip>
                                    </div>
                                </div>

                            </ul>
                        </div>

                    </div>
                </Popover>
            </nav>
                    <Dialog
                        open={submitDialog}
                        onClose={this.handleSubmitClose}
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
                                    <label htmlFor="ShowSanofiLogo">Show Sanofi logo in PDF?</label>
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
                            <Button onClick={this.handleSubmitClose} color="primary" autoFocus>
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                <ClickAwayListener onClickAway={this.handleProgressClose&&this.props.handleLoad}>
                    <Dialog
                        open={this.state.progressDialog}
                        onClose={this.handleProgressClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <h4 id="alert-dialog-title" className="text-center progressDialog">Generating</h4>
                        <div id="alert-dialog-description" className="progress dialogMargin">
                            <div className="progress-bar progress-bar-striped active" role="progressbar"
                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={ {width:"100%" }}>
                            </div>
                        </div>
                    </Dialog>
                </ClickAwayListener>
                <ClickAwayListener onClickAway={() => {}}>
                    <Dialog
                        open={emailDialog}
                        onClose={this.handleEmailClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <h4 id="alert-dialog-title" className="text-center">{ loadError ? "Unsuccessful Email Delivery" : "Email Confirmation"}</h4>
                        <div id="alert-dialog-description" className="emailDialog">
                            {loadError ?
                                <p>An error occurred prior to email delivery</p>
                                :
                                <p>An email was successfully sent to: {Email}</p>
                            }
                        </div>
                        <DialogActions>
                            <Button onClick={this.handleEmailClose&&this.props.handleLoad} color="primary" autoFocus>
                                close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </ClickAwayListener>
        </div>

        )
    }
}

export default Header;