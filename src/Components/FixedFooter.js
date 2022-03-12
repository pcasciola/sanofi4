import {Component} from "react";
import React from "react";

class FixedFooter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="footerbg">
                        <div className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths verticalFooter footerMargins">
                            <div className="footerCard fullCard">
                                <h6>FLUZONE&#174; QUADRIVALENT (INFLUENZA VACCINE) {this.props.currentRow != null ? this.props.currentRow.name : ""}</h6>
                                <div className="text-right">
                                    <a className="prescribeFooter"><u>Prescribing Information</u></a>
                                </div>
                                <h6 className="h6-pad"><u>INDICATION FOR FLUZONE VACCINE +</u></h6>
                                <p className="footerNotes">Fluzone Quadrivalent vaccine is indicated for actice immunization for the prevention of influenza disease caused by influenza A ...</p>
                                <h6 className="h6-pad"><u>IMPORTANT SAFETY INFORMATION +</u></h6>
                                <p className="footerNotes">Fluzone Quadrivalent vaccine should not be administered to anyone who has had a severe allergic reaction (eg, anaphylaxis) to any ...</p>
                            </div>
                        </div>
                        <div className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths footerMargins">
                            <div className="row verticalFooter">
                                <div className="footerCard halfCard">
                                    <h6>FLUVELVEAX QUADRIVALENT (INFLUENZA VACCINE)</h6>
                                    <div className="text-right">
                                        <a className="prescribeFooter"><u>Prescribing Information</u></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row verticalFooter">
                                <div className="footerCard halfCard">
                                    <h6>FLULAVAL QUADRIVALENT (INFLUENZA VACCINE)</h6>
                                    <div className="text-right">
                                        <a className="prescribeFooter"><u>Prescribing Information</u></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths footerMargins">
                            <div className="row verticalFooter">
                                <div className="footerCard halfCard">
                                    <h6>FLUARIX QUADRIVALENT INFLUENZA VACCINE</h6>
                                    <div className="text-right">
                                        <a className="prescribeFooter"><u>Prescribing Information</u></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row verticalFooter">
                                <div className="footerCard halfCard">
                                    <h6>AFLUIRA INFLUENZA VIRUS VACCINE</h6>
                                    <div className="text-right">
                                        <a className="prescribeFooter"><u>Prescribing Information</u></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths footerMargins">
                        <div className="row verticalFooter">
                            <div className="footerCard halfCard">
                                <h6>FLUVIRIN INFLUENZA VIRUS VACCINE</h6>
                                <div className="text-right">
                                    <a className="prescribeFooter"><u>Prescribing Information</u></a>
                                </div>
                            </div>
                        </div>
                        <div className="row verticalFooter">
                            <div className="footerCard halfCard">
                                <h6>FLUMIST QUADRIVALENT INFLUENZA VACCINE LIVE, INTRANASAL</h6>
                                <div className="text-right">
                                    <a className="prescribeFooter"><u>Prescribing Information</u></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths footerMargins">
                        <div className="row verticalFooter">
                            <div className="footerCard halfCard">
                                <h6>FLUVIRIN INFLUENZA VIRUS VACCINE</h6>
                                <div className="text-right">
                                    <a className="prescribeFooter"><u>Prescribing Information</u></a>
                                </div>
                            </div>
                        </div>
                        <div className="row verticalFooter">
                            <div className="footerCard halfCard">
                                <h6>FLUMIST QUADRIVALENT INFLUENZA VACCINE LIVE, INTRANASAL</h6>
                                <div className="text-right">
                                    <a className="prescribeFooter"><u>Prescribing Information</u></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            <div>&nbsp;</div>
                </div>
            </div>

        )
    }

}

export default FixedFooter;