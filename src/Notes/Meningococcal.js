import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Meningococcal extends React.Component {
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
                    <DialogTitle id="alert-dialog-title">Meningococcal serogroup A,C,W,Y vaccination (minimum age: 2 months [MenACWY-CRM, Menveo], 9 months [MenACWY-D, Menactra])</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Routine Vaccination</h6>
                            <ul>
                                <li>2-dose series: 11–12 years, 16 years</li>
                            </ul>
                            <h6>Catch-up Vaccination</h6>
                            <ul>
                                <li>Age 13–15 years: 1 dose now and booster at age 16–18 years (minimum interval: 8 weeks)</li>
                                <li>Age 16–18 years: 1 dose</li>
                            </ul>
                            <h6>Special Situations</h6>
                            <p><b>Anatomic or functional asplenia (including sickle cell disease), HIV infection, persistent complement component deficiency, eculizumab use:</b></p>
                            <ul>
                                <li><b>Menveo</b></li>
                                <ul>
                                    <li>Dose 1 at age 8 weeks: 4-dose series at 2, 4, 6, 12 months</li>
                                    <li>Dose 1 at age 7–23 months: 2-dose series (dose 2 at least 12 weeks after dose 1 and after the 1st birthday)</li>
                                    <li>Dose 1 at age 7–23 months: 2-dose series (dose 2 at least 12 weeks after dose 1 and after the 1st birthday)</li>
                                </ul>
                                <li><b>Menactra</b></li>
                                <ul>
                                    <li><b>Persistent complement component deficiency:</b></li>
                                    <ul>
                                        <li><b>Age 9–23 months</b>: 2 doses at least 12 weeks apart</li>
                                        <li><b>Age 24 months or older</b>: 2 doses at least 8 weeks apart</li>
                                    </ul>
                                    <li><b>Anatomic or functional asplenia, sickle cell disease, or HIV infection:</b></li>
                                    <ul>
                                        <li><b>Age 9–23 months</b>: Not recommended</li>
                                        <li><b>24 months or older</b>: 2 doses at least 8 weeks apart</li>
                                        <li><b>Menactra</b> must be administered at least 4 weeks after completion of PCV13 series.</li>
                                    </ul>
                                </ul>
                            </ul>
                            <p><b>Travel in countries with hyperendemic or epidemic meningococcal disease, including countries in the African meningitis belt or during the Hajj:</b></p>
                            <ul>
                                <li>Children age less than 24 months: </li>
                                <ul>
                                    <li><b>Menveo (age 2–23 months)</b>:</li>
                                    <ul>
                                        <li>Dose 1 at 8 weeks: 4-dose series at 2, 4, 6, 12 months</li>
                                        <li>Dose 1 at 7–23 months: 2-dose series (dose 2 at least 12 weeks after dose 1 and after the 1st birthday)</li>
                                    </ul>
                                    <li><b>Menactra (age 9–23 months)</b>:</li>
                                    <ul>
                                        <li>2-dose series (dose 2 at least 12 weeks after dose 1; dose 2 may be administered as early as 8 weeks after dose 1 in travelers)</li>
                                    </ul>
                                </ul>
                                <li>Children age 2 years or older: 1 dose Menveo or Menactra</li>
                            </ul>
                            <p><b>First-year college students who live in residential housing (if not previously vaccinated at age 16 years or older) or military recruits</b>: 1 dose of <b>Menveo</b> or <b>Menactra</b></p>
                            <p><b>Note: Menactra</b> should be administered either before or at the same time as DTaP. For MenACWY booster dose recommendations for groups listed under “Special situations” above and additional meningococcal vaccination information, see <a href={"https://www.cdc.gov/vaccines/hcp/acip-recs/vacc-specific/mening.html"}>meningococcal <i>MMWR</i> publications</a>.</p>
                        </DialogContentText>
                    </DialogContent>
                        <DialogTitle id="alert-dialog-title">Meningococcal serogroup B vaccination (minimum age: 10 years [MenB-4C, Bexsero; MenB-FHbp, Trumenba])</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <h6>Clinical Discretion</h6>
                                <ul>
                                    <li>MenB vaccine may be administered based on individual clinical decision to adolescents not at increased risk age 16–23 years (preferred age 16–18 years):</li>
                                    <li>Bexsero: 2-dose series at least 1 month apart</li>
                                    <li>Trumenba: 2-dose series at least 6 months apart; if dose 2 is administered earlier than 6 months, administer a 3rd dose at least 4 months after dose 2.</li>
                                </ul>
                                <h6>Special Situations</h6>
                                <p><b>Anatomic or functional asplenia (including sickle cell disease), persistent complement component deficiency, eculizumab use:</b></p>
                                <ul>
                                    <li><b>Bexsero</b>: 2-dose series at least 1 month apart</li>
                                    <li><b>Trumenba</b>: 3-dose series at 0, 1–2, 6 months</li>
                                </ul>
                                <p><b>Bexsero</b> and <b>Trumenba</b> are not interchangeable; the same product should be used for all doses in a series.</p>
                                <p>For additional meningococcal vaccination information, see <a href={"https://www.cdc.gov/vaccines/hcp/acip-recs/vacc-specific/mening.html"}>meningococcal MMWR publications</a>.</p>
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

export default Meningococcal;