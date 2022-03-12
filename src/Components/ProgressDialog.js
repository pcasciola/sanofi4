import React from "react";

import Dialog from '@material-ui/core/Dialog';
import EmailConfirmationDialog from './EmailConfirmationDialog';


class ProgressDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            isLoaded: this.props.isLoaded,
            SchedulerEmail: this.props.SchedulerEmail
        };
        this.handleContinue = this.handleContinue.bind(this);
    }

    handleContinue = () => {
        this.state.generatePDF();
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        let isLoaded = this.state.isLoaded;

        if(isLoaded===true) {
            return <EmailConfirmationDialog open={true} SchedulerEmail={this.state.SchedulerEmail} />
        }

        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <h4 id="alert-dialog-title" className="text-center progressDialog">Generating</h4>
                    <div id="alert-dialog-description" className="progress progressMargin">
                        <div className="progress-bar progress-bar-striped active" role="progressbar"
                             aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={ {width:"100%" }}>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default ProgressDialog;