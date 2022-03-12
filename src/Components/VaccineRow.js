import {Component} from "react";
import React from "react";

const styles = {
    currentRow: {
        backgroundColor: '#aaFFaa',
        borderStyle: 'solid',
        borderWidth: 1
    }
};

class VaccineRow extends Component {
    state = {
        open: false,
        isTutorial : this.props.isTutorial,
    };

    handleClickOpen = () => {
        //This opens the notes
        //this.setState({ open: true });
        if (this.props.setCurrentRow != null)
            this.props.setCurrentRow(this.props.generic);
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    renderVaccines(vaccines){
        let currentColumn = 0;
        let row = 0;
        return vaccines.map((vaccine,index) => {
            if (vaccine == null || vaccine.props.blank)
                return <td key={row++}></td>;
            else {
                return <td key={row++} colSpan={vaccine.props.max > 0 ? ((vaccine.props.max - vaccine.props.min) + 1) : 1}
                           rowSpan={vaccine.props.comboSpan ? vaccine.props.comboSpan : 1}>{vaccine}</td>;
            }
        });
    }


    render() {
        let vaccineColumns = [];

        let currentColumn = 0;

        this.props.vaccines.map((vaccine) => {
            while (currentColumn++ < vaccine.props.column)
                vaccineColumns.push(null);
            if (!vaccine.props.skip)
                vaccineColumns.push(vaccine);
            if (vaccine.props.max != null)
                currentColumn += vaccine.props.max - vaccine.props.min;
        });

        while (currentColumn++ < 17)
            vaccineColumns.push(null);

        let vaccines = this.renderVaccines(vaccineColumns);

        const isTutorial = this.state.isTutorial;

        {/*
        if (open) {
            return (
                    <tr>
                        <th scope="row" className="vaccineCell vaccineCellCombined" onClick={this.handleClickOpen}>{this.props.condition}</th>
                        { vaccines }
                        <Meningococcal open={open} condition={this.props.condition} onClick={this.handleClose} />
                    </tr>
               );
        }

        console.log(this.props.condition + " " + this.props.isCurrentRow);*/}

        return (

                <tr style={this.state.isTutorial ? null: this.props.isCurrentRow ? styles.currentRow : null}>
                        <th scope="row" className={"vaccineCell vaccineCellCombined "+isTutorial} onClick={this.handleClickOpen}>{this.props.condition}</th>
                        { vaccines }
                </tr>
        )
    }
}

export default VaccineRow;