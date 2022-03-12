import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class RV extends React.Component {
    state = {
        open: this.props,
        condition: this.props
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Rotavirus vaccination (minimum age: 6 weeks)</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Routine Vaccination</h6>
                            <ul>
                                <li><b>Rotarix</b>: 2-dose series at 2 and 4 months</li>
                                <li><b>RotaTeq</b>: 3-dose series at 2, 4, and 6 months</li>
                            </ul>
                            <p>If any dose in the series is either RotaTeq or unknown, default to 3-dose series.</p>
                            <h6>Catch-up Vaccination</h6>
                            <ul>
                                <li>Do not start the series on or after age 15 weeks, 0 days.</li>
                                <li>The maximum age for the final dose is 8 months, 0 days.</li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default RV;