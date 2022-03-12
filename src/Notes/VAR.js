import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class VAR extends React.Component {
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
                    <DialogTitle id="alert-dialog-title">Varicella vaccination (minimum age: 12 months)</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Routine Vaccination</h6>
                            <ul>
                                <li>2-dose series: 12–15 months, 4–6 years</li>
                                <li>Dose 2 may be administered as early as 3 months after dose 1 (a dose administered after a 4-week interval may be counted).</li>
                            </ul>
                            <h6>Catch-up Vaccination</h6>
                            <ul>
                                <li>Ensure persons age 7–18 years without evidence of immunity (see <a href={"https://www.cdc.gov/mmwr/pdf/rr/rr5604.pdf"}>MMWR Cdc-pdf  [48 pages]</a>) have 2-dose series: </li>
                                <ul>
                                    <li><b>Ages 7–12 years</b>: routine interval: 3 months (minimum interval: 4 weeks)</li>
                                    <li><b>Ages 13 years and older</b>: routine interval: 4–8 weeks (minimum interval: 4 weeks)</li>
                                    <li>The maximum age for use of MMRV is 12 years.</li>
                                </ul>
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

export default VAR;