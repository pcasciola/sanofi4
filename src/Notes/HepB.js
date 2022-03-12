import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class HepB extends React.Component {
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
                    <DialogTitle id="alert-dialog-title">Hepatitis B vaccination (minimum age: birth)</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Birth Dose (monovalent HepB vaccine only)</h6>
                            <ul>
                                <li><b>Mother is HBsAg-negative</b>: 1 dose within 24 hours of birth for all medically stable infants ≥2,000 grams. Infants ≤2,000 grams: administer 1 dose at chronological age 1 month or hospital discharge.</li>
                                <li><b>Mother is HBsAg-positive</b>:</li>
                                <ul>
                                    <li>Administer <b>HepB vaccine</b> and <b>0.5 mL of hepatitis B immune globulin (HBIG)</b> (at separate anatomic sites) within 12 hours of birth, regardless of birth weight. For infants ≤2,000 grams, administer 3 additional doses of vaccine (total of 4 doses) beginning at age 1 month.</li>
                                    <li>Test for HBsAg and anti-HBs at age 9–12 months. If HepB series is delayed, test 1–2 months after final dose.</li>
                                </ul>
                                <li><b>	Mother’s HBsAg status is unknown</b>:</li>
                                <ul>
                                    <li>Administer <b>HepB vaccine</b> within 12 hours of birth, regardless of birth weight.</li>
                                    <li>For infants ≤2,000 grams, administer 0.5 mL of HBIG in addition to HepB vaccine within 12 hours of birth. Administer 3 additional doses of vaccine (total of 4 doses) beginning at age 1 month.</li>
                                    <li>Determine mother’s HBsAg status as soon as possible. If mother is HBsAg-positive, administer 0.5 mL of HBIG to infants ≥2,000 grams as soon as possible, but no later than 7 days of age.</li>
                                </ul>
                            </ul>
                            <h6>Routine Series</h6>
                            <ul>
                                <li>3-dose series at 0, 1–2, 6–18 months (use monovalent HepB vaccine for doses administered before age 6 weeks)</li>
                                <li>Infants who did not receive a birth dose should begin the series as soon as feasible</li>
                                <li>Administration of <b>4 doses</b> is permitted when a combination vaccine containing HepB is used after the birth dose.</li>
                                <li><b>Minimum age</b> for the final (3rd or 4th ) dose: 24 weeks</li>
                                <li><b>Minimum intervals</b>: dose 1 to dose 2: 4 weeks / dose 2 to dose 3: 8 weeks / dose 1 to dose 3: 16 weeks (when 4 doses are administered, substitute “dose 4” for “dose 3” in these calculations)</li>
                            </ul>
                            <h6>Catch-up Vaccination</h6>
                            <ul>
                                <li>Unvaccinated persons should complete a 3-dose series at 0, 1–2, 6 months.</li>
                                <li>Adolescents age 11–15 years may use an alternative 2-dose schedule with at least 4 months between doses (adult formulation <b>Recombivax HB</b> only).</li>
                                <li>Adolescents 18 years and older may receive a 2-dose series of HepB (<b>Heplisav-B</b>) at least 4 weeks apart.</li>
                                <li>Adolescents 18 years and older may receive the combined HepA and HepB vaccine, <b>Twinrix</b>, as a 3-dose series (0, 1, and 6 months) or 4-dose series (0, 7, and 21–30 days, followed by a dose at 12 months).</li>
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

export default HepB;