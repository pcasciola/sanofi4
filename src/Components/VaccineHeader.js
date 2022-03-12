import {Component} from "react";
import React from "react";

class VaccineHeader extends Component {
    render() {
        return(
            <thead>
                <tr>
                    <th scope="col" className="vaccineCell vaccineHeader">
                        <div className="row text-center">
                            <span>Vaccines</span>
                        </div>
                    </th>
                    <th scope="col" className="ageCell">Birth</th>
                    <th scope="col" className="ageCell">1<br/>Month</th>
                    <th scope="col" className="ageCell">2<br/>Months</th>
                    <th scope="col" className="ageCell">4<br/>Months</th>
                    <th scope="col" className="ageCell">6<br/>Months</th>
                    <th scope="col" className="ageCell">9<br/>Months</th>
                    <th scope="col" className="ageCell">12<br/>Months</th>
                    <th scope="col" className="ageCell">15<br/>Months</th>
                    <th scope="col" className="ageCell">18<br/>Months</th>
                    <th scope="col" className="ageCell">19-23<br/>Months</th>
                    <th scope="col" className="ageCell">2-3<br/>Years</th>
                    <th scope="col" className="ageCell">4-6<br/>Years</th>
                    <th scope="col" className="ageCell">7-10<br/>Years</th>
                    <th scope="col" className="ageCell">11-12<br/>Years</th>
                    <th scope="col" className="ageCell">13-15<br/>Years</th>
                    <th scope="col" className="ageCell">16<br/>Years</th>
                    <th scope="col" className="ageCell">17-18<br/>Years</th>
                </tr>
            </thead>

            )
    }
}

export default VaccineHeader;