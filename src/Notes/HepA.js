import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class HepA extends React.Component {
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
                    <DialogTitle id="alert-dialog-title">Hepatitis A vaccination (minimum age: 12 months for routine vaccination)</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Routine Vaccination</h6>
                            <ul>
                                <li>2-dose series (Havrix 6–12 months apart or Vaqta 6–18 months apart, minimum interval 6 months); a series begun before the 2nd birthday should be completed even if the child turns 2 before the second dose is administered.</li>
                            </ul>
                            <h6>Catch-up Vaccination</h6>
                            <ul>
                                <li>Anyone 2 years of age or older may receive HepA vaccine if desired. Minimum interval between doses: 6 months</li>
                                <li>Adolescents 18 years and older may receive the combined HepA and HepB vaccine, Twinrix, as a 3-dose series (0, 1, and 6 months) or 4-dose series (0, 7, and 21–30 days, followed by a dose at 12 months).</li>
                            </ul>
                            <h6>International Travel</h6>
                            <ul>
                                <li>Persons traveling to or working in countries with high or intermediate endemic hepatitis A:</li>
                                <ul>
                                    <li><b>Infants age 6–11 months</b>: 1 dose before departure; revaccinate with 2 doses, separated by 6–18 months, between 12 to 23 months of age</li>
                                    <li><b>Unvaccinated age 12 months and older</b>: 1st dose as soon as travel considered</li>
                                </ul>
                            </ul>
                            <h6>Special Situations</h6>
                            <ul>
                                <p>At risk for hepatitis A infection: 2-dose series as above</p>
                                <ul>
                                    <li><b>Chronic liver disease</b></li>
                                    <li><b>Clotting factor disorders</b></li>
                                    <li><b>Men who have sex with men</b></li>
                                    <li><b>Injection or non-injection drug use</b></li>
                                    <li><b>Homelessness</b></li>
                                    <li><b>Work with hepatitis A virus</b> in research laboratory or nonhuman primates with hepatitis A infection</li>
                                    <li><b>Travel</b> in countries with high or intermediate endemic hepatitis A</li>
                                    <li><b>Close, personal contact with international adoptee</b> (e.g., household or regular babysitting) in first 60 days after arrival from country with high or intermediate endemic hepatitis A (administer dose 1 as soon as adoption is planned, at least 2 weeks before adoptee’s arrival)</li>
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

export default HepA;