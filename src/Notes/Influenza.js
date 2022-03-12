import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Influenza extends React.Component {
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
                    <DialogTitle id="alert-dialog-title">Influenza vaccination (minimum age: 6 months [IIV], 2 years [LAIV], 18 years [RIV])</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Routine Vaccination</h6>
                            <ul>
                                <li>1 dose any influenza vaccine appropriate for age and health status annually (2 doses separated by at least 4 weeks for <b>children 6 months–8 years</b> who did not receive at least 2 doses of influenza vaccine before July 1, 2018)</li>
                            </ul>
                            <h6>Special Situations</h6>
                            <ul>
                                <li><b>Egg allergy, hives only</b>: Any influenza vaccine appropriate for age and health status annually</li>
                                <li><b>Egg allergy more severe than hives</b> (e.g., angioedema, respiratory distress): Any influenza vaccine appropriate for age and health status annually in medical setting under supervision of health care provider who can recognize and manage severe allergic conditions</li>
                                <li><b>LAIV should not be used for</b> those with a history of severe allergic reaction to any component of the vaccine (excluding egg) or to a previous dose of any influenza vaccine, children and adolescents receiving concomitant aspirin or salicylate-containing medications, children age 2 through 4 years with a history of asthma or wheezing, those who are immunocompromised due to any cause (including immunosuppression caused by medications and HIV infection), anatomic and functional asplenia, cochlear implants, cerebrospinal fluid-oropharyngeal communication, close contacts and caregivers of severely immunosuppressed persons who require a protected environment, pregnancy, and persons who have received influenza antiviral medications within the previous 48 hours.</li>
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

export default Influenza;