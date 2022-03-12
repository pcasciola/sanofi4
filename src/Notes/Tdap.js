import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Tdap extends React.Component {
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
                    <DialogTitle id="alert-dialog-title">Tetanus, diphtheria, and pertussis (Tdap) vaccination (minimum age: 11 years for routine vaccination, 7 years for catch-up vaccination)</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Routine Vaccination</h6>
                            <ul>
                                <li><b>Adolescents age 11–12 years</b>: 1 dose Tdap</li>
                                <li><b>Pregnancy</b>: 1 dose Tdap during each pregnancy, preferably in early part of gestational weeks 27–36</li>
                                <li>Tdap may be administered regardless of the interval since the last tetanus- and diphtheria-toxoid-containing vaccine.</li>
                            </ul>
                            <h6>Catch-up Vaccination</h6>
                            <ul>
                                <li><b>Adolescents age 13–18 years who have not received Tdap</b>: 1 dose Tdap, then Td booster every 10 years</li>
                                <li><b>Persons age 7–18 years not fully immunized with DTaP</b>: 1 dose Tdap as part of the catch-up series (preferably the first dose); if additional doses are needed, use Td.</li>
                                <li><b>Children age 7–10 years</b> who receive Tdap inadvertently or as part of the catch-up series should receive the routine Tdap dose at 11–12 years.</li>
                                <li><b>DTaP inadvertently given after the 7th birthday</b>:</li>
                                <ul>
                                    <li><b>Child age 7–10 years</b>: DTaP may count as part of catch-up series. Routine Tdap dose at 11–12 should be administered.</li>
                                    <li><b>Adolescent age 11–18 years</b>: Count dose of DTaP as the adolescent Tdap booster.</li>
                                </ul>
                                <li>See information on use of <a href={"https://www.cdc.gov/mmwr/volumes/67/rr/rr6702a1.htm"}>Tdap or Td</a> as tetanus prophylaxis in wound management.</li>
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

export default Tdap;