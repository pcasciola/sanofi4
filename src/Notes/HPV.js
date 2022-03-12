import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class HPV extends React.Component {
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
                    <DialogTitle id="alert-dialog-title">Human papillomavirus vaccination (minimum age: 9 years)</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Routine and Catch-up Vaccination</h6>
                            <ul>
                                <li>HPV vaccination routinely recommended for all adolescents <b>age 11–12 years (can start at age 9 years)</b> and through age 18 years if not previously adequately vaccinated</li>
                                <li>2- or 3-dose series depending on age at initial vaccination: </li>
                                <ul>
                                    <li><b>Age 9 through 14 years at initial vaccination</b>: 2-dose series at 0, 6–12 months (minimum interval: 5 months; repeat dose if administered too soon)</li>
                                    <li><b>Age 15 years or older at initial vaccination</b>: 3-dose series at 0, 1–2 months, 6 months (minimum intervals: dose 1 to dose 2: 4 weeks / dose 2 to dose 3: 12 weeks / dose 1 to dose 3: 5 months; repeat dose if administered too soon)</li>
                                </ul>
                                <li>If completed valid vaccination series with any HPV vaccine, no additional doses needed:</li>
                            </ul>
                            <h6>Special Situations</h6>
                            <ul>
                                <li><b>Immunocompromising conditions, including HIV infection</b>: 3-dose series as above</li>
                                <li><b>History of sexual abuse or assault</b>: Start at age 9 years</li>
                                <li><b>Pregnancy</b>: HPV vaccination not recommended until after pregnancy; no intervention needed if vaccinated while pregnant; pregnancy testing not needed before vaccination</li>
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

export default HPV;