import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Dtap extends React.Component {
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
                    <DialogTitle id="alert-dialog-title">Diphtheria, tetanus, and pertussis (DTaP) vaccination (minimum age: 6 weeks [4 years for Kinrix or Quadracel])</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Routine Vaccination</h6>
                            <ul>
                                <li>5-dose series at 2, 4, 6, 15–18 months, 4–6 years</li>
                                <ul>
                                    <li><strong>Prospectively</strong>: Dose 4 may be given as early as age
                                        12 months if at least 6 months have elapsed since dose 3.</li>
                                    <li><strong>Retrospectively</strong>: A 4th dose that was inadvertently given as early as 12 months may be counted if at least 4 months have elapsed since dose 3.</li>
                                </ul>
                            </ul>
                            <h6>Catch-up Vaccination</h6>
                            <ul>
                                <li>Dose 5 is not necessary if dose 4 was administered at age 4 years or older.</li>
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

export default Dtap;