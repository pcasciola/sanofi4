import React from "react";

class VaccineButtonOptions extends React.Component {
    state = {
        anchorEl: null,
        buttonName: "",
        selectedVaccine: null
    };

    handleSelection = () => {
        this.props.select(this.props.vaccine);
    };


    render() {
        return (
            <div>
                <div className="text-center popoverOptionContainer" onClick={this.handleSelection}>
                    <a className={'popoverOption'} >
                        {this.props.vaccine != null ? this.props.vaccine.name : "Clear"}
                    </a>
                </div>
            </div>
        )
    }
}

export default VaccineButtonOptions;