import {Component} from "react";
import React from "react";

class Footer extends Component {

    renderVaccines(vaccines){
        //console.log("vaccines=" + vaccines);
        if (vaccines == null) {
            // In case we want something in the footer before a row is selected
            return <div></div>;
        } else {
            return vaccines.map((vaccine, index) => {
                let cardClasses = vaccine.isSanofi ? "footerCard fullCard" : "footerCard halfCard";
                //let cardDivClasses = vaccine.isSanofi ? "col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths verticalFooter footerMargins" : "col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths footerMargins";
                let PILink = ("PIOverride" in vaccine) ? <div className='prescribeFooter'> <br/>{vaccine.PIOverride} </div> : <a className='prescribeFooterLink' href={vaccine.PIUrl} target='top'><u>Prescribing Information</u></a>;
                let vaccineText = vaccine.tradeAndTrue.toString().slice(-8) === "Vaccine]" ? ' vaccine' : null;
                if( vaccine.isSanofi ) {
                    return (
                        <div key={"footerDiv" + vaccine.name}
                             className="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths verticalFooter footerMargins">
                            <div className={cardClasses}>
                                <h6>{vaccine.tradeAndTrue} {vaccine.isSanofi ? (
                                    <span>{vaccineText} is {vaccine.IndicationSpecial} <a className="indicationFooter"
                                                              href={"static/safety_info/" + vaccine.ISIFile}
                                                              target="top"><u>indicated</u></a> for {vaccine.IndicationBlurb}</span>) : null}</h6>
                                {vaccine.isSanofi ? (
                                    <span>
                                    <h6 className="h6-pad"><a className="indicationFooter"
                                                              href={"static/safety_info/" + vaccine.ISIFile}
                                                              target="top"><u>IMPORTANT SAFETY INFORMATION</u></a></h6>
                                    <h6>{vaccine.ISIBlurb}...</h6>
                                </span>
                                ) : null}
                                <div className="text-right">
                                    {PILink}
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    return "";
                }

            });
        }
    }

    render() {
        let vaccines = this.renderVaccines(this.props.vaccines);

       //console.log("Footer Vaccines = " + vaccines);

        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="footerbg">
                        { vaccines }
                    </div>
                </div>
            </div>

        )
    }

}

export default Footer;