import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class PCV extends React.Component {
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
                    <DialogTitle id="alert-dialog-title">Pneumococcal vaccination (minimum age: 6 weeks [PCV13], 2 years [PPSV23])</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h6>Routine Vaccination with PCV13</h6>
                            <ul>
                                <li>4-dose series at 2, 4, 6, 12–15 months</li>
                            </ul>
                            <h6>Catch-up Vaccination with PCV13</h6>
                            <ul>
                                <li>1 dose for healthy children age 24–59 months with any incomplete* PCV13 series</li>
                            </ul>
                            <h6>Special Situations</h6>
                            <p><b>High-risk conditions below: When both PCV13 and PPSV23 are indicated, administer PCV13 first. PCV13 and PPSV23 should not be administered during same visit.</b></p>
                            <p><b>Chronic heart disease (particularly cyanotic congenital heart disease and cardiac failure); chronic lung disease (including asthma treated with high-dose, oral corticosteroids); diabetes mellitus:</b></p>
                            <p><b>Age 2–5 years</b></p>
                            <ul>
                                <li>Any incomplete* series with:</li>
                                <ul>
                                    <li>3 PCV13 doses: 1 dose PCV13 (at least 8 weeks after any prior PCV13 dose)</li>
                                    <li>Less than 3 PCV13 doses: 2 doses PCV13 (8 weeks after the most recent dose and administered 8 weeks apart)</li>
                                </ul>
                                <li>No history of PPSV23: 1 dose PPSV23 (at least 8 weeks after any prior PCV13 dose)</li>
                            </ul>
                            <p><b>Age 6–18 years</b></p>
                            <ul>
                                <li>No history of PPSV23: 1 dose PPSV23 (at least 8 weeks after any prior PCV13 dose)</li>
                            </ul>
                            <p><b>Cerebrospinal fluid leak, cochlear implant:</b></p>
                            <p><b>Age 2–5 years</b></p>
                            <ul>
                                <li>Any incomplete* series with:</li>
                                <ul>
                                    <li>3 PCV13 doses: 1 dose PCV13 (at least 8 weeks after any prior PCV13 dose)</li>
                                    <li>Less than 3 PCV13 doses: 2 doses PCV13, 8 weeks after the most recent dose and administered 8 weeks apart</li>
                                </ul>
                                <li>No history of PPSV23: 1 dose PPSV23 (at least 8 weeks after any prior PCV13 dose)</li>
                            </ul>
                            <p><b>Age 6–18 years</b></p>
                            <ul>
                                <li>No history of either PCV13 or PPSV23: 1 dose PCV13, 1 dose PPSV23 at least 8 weeks later</li>
                                <li>Any PCV13 but no PPSV23: 1 dose PPSV23 at least 8 weeks after the most recent dose of PCV13</li>
                                <li>PPSV23 but no PCV13: 1 dose PCV13 at least 8 weeks after the most recent dose of PPSV23</li>
                            </ul>
                            <p><b>Sickle cell disease and other hemoglobinopathies; anatomic or functional asplenia; congenital or acquired immunodeficiency; HIV infection; chronic renal failure; nephrotic syndrome; malignant neoplasms, leukemias, lymphomas, Hodgkin disease, and other diseases associated with treatment with immunosuppressive drugs or radiation therapy; solid organ transplantation; multiple myeloma:</b></p>
                            <p><b>Age 2–5 years</b></p>
                            <ul>
                                <li>Any incomplete* series with:</li>
                                <ul>
                                    <li>3 PCV13 doses: 1 dose PCV13 (at least 8 weeks after any prior PCV13 dose)</li>
                                    <li>Less than 3 PCV13 doses: 2 doses PCV13 (8 weeks after the most recent dose and administered 8 weeks apart)</li>
                                </ul>
                                <li>No history of PPSV23: 1 dose PPSV23 (at least 8 weeks after any prior PCV13 dose) and a 2nd dose of PPSV23 5 years later</li>
                            </ul>
                            <p><b>Age 6–18 years</b></p>
                            <ul>
                                <li>No history of either PCV13 or PPSV23: 1 dose PCV13, 2 doses PPSV23 (dose 1 of PPSV23 administered 8 weeks after PCV13 and dose 2 of PPSV23 administered at least 5 years after dose 1 of PPSV23)</li>
                                <li>Any PCV13 but no PPSV23: 2 doses PPSV23 (dose 1 of PPSV23 administered 8 weeks after the most recent dose of PCV13 and dose 2 of PPSV23 administered at least 5 years after dose 1 of PPSV23)</li>
                                <li>PPSV23 but no PCV13: 1 dose PCV13 at least 8 weeks after the most recent PPSV23 dose and a 2nd dose of PPSV23 administered 5 years after dose 1 of PPSV23 and at least 8 weeks after a dose of PCV13</li>
                            </ul>
                            <p><b>Chronic liver disease, alcoholism:</b></p>
                            <p><b>Age 6–18 years</b></p>
                            <ul>
                                <li>No history of PPSV23: 1 dose PPSV23 (at least 8 weeks after any prior PCV13 dose)</li>
                            </ul>
                            <p>*An incomplete series is defined as not having received all doses in either the recommended series or an age-appropriate catch-up series. See Tables 8, 9, and 11 in the <a href={"https://www.cdc.gov/mmwr/pdf/rr/rr5911.pdf"}>ACIP pneumococcal vaccine recommendations Cdc-pdf [24 pages]</a> for complete schedule details.</p>
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

export default PCV;