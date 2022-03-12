
import React from "react";

import Dialog from '@material-ui/core/Dialog';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";


class EmailConfirmationDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            SchedulerEmail: this.props.SchedulerEmail
        };
    }


    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        let Email = this.state.SchedulerEmail;

        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClose}>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <h4 id="alert-dialog-title" className="text-center progressDialog">Email Confirmation</h4>
                        <div id="alert-dialog-description">
                            <p>
                                An email has successfully been sent to: {Email}
                            </p>
                        </div>
                    </Dialog>
                </ClickAwayListener>
            </div>
        );
    }
}

export default EmailConfirmationDialog;