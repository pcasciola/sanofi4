import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class MMR extends React.Component {
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
                    <DialogTitle id="alert-dialog-title">Measles, mumps, and rubella vaccination (minimum age: 12 months for routine vaccination)</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Routine Vaccination</h6>
                            <ul>
                                <li>2-dose series at 12–15 months, 4–6 years</li>
                                <li>Dose 2 may be administered as early as 4 weeks after dose 1.</li>
                            </ul>
                            <h6>Catch-up Vaccination</h6>
                            <ul>
                                <li>Unvaccinated children and adolescents: 2 doses at least 4 weeks apart</li>
                                <li>The maximum age for use of MMRV is 12 years.</li>
                            </ul>
                            <h6>Special Situations</h6>
                            <p><b>International Travel</b></p>
                            <ul>
                                <li>Infants age 6–11 months: 1 dose before departure; revaccinate with 2 doses at 12–15 months (12 months for children in high-risk areas) and dose 2 as early as 4 weeks later.</li>
                                <li>Unvaccinated children age 12 months and older: 2-dose series at least 4 weeks apart before departure</li>
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

export default MMR;