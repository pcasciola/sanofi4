import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Hib extends React.Component {
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
                    <DialogTitle id="alert-dialog-title">Haemophilus influenzae type b vaccination (minimum age: 6 weeks)</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Routine Vaccination</h6>
                            <ul>
                                <li><b>ActHIB, Hiberix, or Pentacel</b>: 4-dose series at 2, 4, 6, 12–15 months.</li>
                                <li><b>PedvaxHIB</b>: 3-dose series at 2, 4, 12–15 months.</li>
                            </ul>
                            <h6>Catch-up Vaccination</h6>
                            <ul>
                                <li><b>Dose 1 at 7–11 months</b>: Administer dose 2 at least 4 weeks later and dose 3 (final dose) at 12–15 months or 8 weeks after dose 2 (whichever is later).</li>
                                <li><b>Dose 1 at 12–14 months</b>: Administer dose 2 (final dose) at least 8 weeks after dose 1.</li>
                                <li><b>Dose 1 before 12 months and dose 2 before 15 months</b>: Administer dose 3 (final dose) 8 weeks after dose 2.</li>
                                <li><b>2 doses of PedvaxHIB before 12 months</b>: Administer dose 3 (final dose) at 12–59 months and at least 8 weeks after dose 2.</li>
                                <li><b>Unvaccinated at 15–59 months</b>: 1 dose</li>
                            </ul>
                            <h6>Special Situations</h6>
                            <ul>
                                <li><b>Chemotherapy or radiation treatment:</b></li>
                                <p><b>12–59 months</b></p>
                                <ul>
                                    <li>Unvaccinated or only 1 dose before age 12 months: 2 doses, 8 weeks apart.</li>
                                    <li>2 or more doses before age 12 months: 1 dose at least 8 weeks after previous dose</li>
                                </ul>
                                <p><i>Doses administered within 14 days of starting therapy or during therapy should be repeated at least 3 months after therapy completion.</i></p>
                                <li><b>Hematopoietic stem cell transplant (HSCT):</b></li>
                                <ul>
                                    <li>3-dose series 4 weeks apart starting 6 to 12 months after successful transplant regardless of Hib vaccination history</li>
                                </ul>
                                <li><b>Anatomic or functional asplenia (including sickle cell disease):</b></li>
                                <p><b>12–59 months</b></p>
                                <ul>
                                    <li>Unvaccinated or only 1 dose before 12 months: 2 doses, 8 weeks apart</li>
                                    <li>2 or more doses before 12 months: 1 dose at least 8 weeks after previous dose</li>
                                    <li><b><i>Unvaccinated* persons age 5 years or older</i></b></li>
                                    <ul>
                                        <li>1 dose</li>
                                    </ul>
                                </ul>
                                <li><b>Elective splenectomy:</b></li>
                                <p><i>Unvaccinated* persons age 15 months or older</i></p>
                                <ul>
                                    <li>1 dose (preferably at least 14 days before procedure)</li>
                                </ul>
                                <li><b>HIV infection:</b></li>
                                <p><b>12–59 months</b></p>
                                <ul>
                                    <li>Unvaccinated or only 1 dose before age 12 months: 2 doses, 8 weeks apart</li>
                                    <li>2 or more doses before age 12 months: 1 dose at least 8 weeks after previous dose</li>
                                </ul>
                                <p><i>Unvaccinated* persons age 5–18 years</i></p>
                                <ul>
                                    <li>1 dose</li>
                                </ul>
                                <li><b>Immunoglobulin deficiency, early component complement deficiency:</b></li>
                                <p><b>12–59 months</b></p>
                                <ul>
                                    <li>Unvaccinated or only 1 dose before age 12 months: 2 doses, 8 weeks apart</li>
                                    <li>2 or more doses before age 12 months: 1 dose at least 8 weeks after previous dose</li>
                                </ul>
                            </ul>
                            <p><i>*Unvaccinated = Less than routine series (through 14 months) OR no doses (14 months or older)</i></p>
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

export default Hib;