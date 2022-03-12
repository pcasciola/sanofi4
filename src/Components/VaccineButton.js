import React from "react";
import Popover from '@material-ui/core/Popover';
import VaccineButtonOption from "./VaccineButtonOption";

const styles = {
    packedPopoverBtn: {
        width: '50px',
        height: '23px',
        background: 'radial-gradient(#fff, #e8e8e8, #C8C8C8)',
        border: '#aaaaaa' ,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        verticalAlign: 'middle',
        justifyContent: 'center',
        fontSize: 10,
        padding: 0
    },
    packedPopoverComboBtn2: {
        width: '50px',
        height: '56px',
        background: 'radial-gradient(#fff, #ffebfb, #ffd8f8)',
        border: '#aaaaaa' ,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        verticalAlign: 'middle',
        justifyContent: 'center',
        fontSize: 10,
        padding: 0
    },
    packedPopoverComboBtn3: {
        width: '50px',
        height: '90px',
        background: 'radial-gradient(#fff, #ffebfb, #ffd8f8)',
        border: '#aaaaaa' ,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        verticalAlign: 'middle',
        justifyContent: 'center',
        fontSize: 10,
        padding: 0
    },
    packedPopoverComboBtn4: {
        width: '50px',
        height: '123px',
        background: 'radial-gradient(#fff, #ffebfb, #ffd8f8)',
        border: '#aaaaaa' ,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        verticalAlign: 'middle',
        justifyContent: 'center',
        fontSize: 10,
        padding: 0
    },
    popover: {
        opacity: 0.9
    },
    typography: {
        useNextVariants: true,
    },
};

class VaccineButton extends React.Component {
    state = {
        anchorEl: null,
        buttonName: "",
        options: this.props.options,
        selectedVaccine: this.props.selectedVaccine,
        isTutorial: this.props.isTutorial
    };

    handleClick = event => {
        if (this.props.setCurrentRow != null)
            this.props.setCurrentRow(this.props.generic);

        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    selectVaccine = (vaccine) => {
        this.props.setVaccineSelection(vaccine, this.props.generic, this.props.column, false);
        try {
            console.log("Selected " + vaccine.name + " at column " + this.props.column);
        } catch (e) {
        }

        if (vaccine == null || (!vaccine.isCombo || vaccine.generic.name === this.props.generic.name)) {
            this.setState(prevState => ({
                //selectedVaccine: vaccine,
                anchorEl: null
            }));
        } else {
            this.setState(prevState => ({
                anchorEl: null
            }));
        }
    };

    renderVaccines(vaccines){
        if (vaccines instanceof  Array) {
            let counter = 0;
            return vaccines.map((vaccine, index) => {
                return <VaccineButtonOption key={"vbo" + counter++} vaccine={vaccine} select={this.selectVaccine}/>
            });
        } else {
            return null;
        }
    }

    renderClearButton(){
        console.log("renderClear [" + this.props.selectedVaccine + "]");
        if (this.props.selectedVaccine != null)
            return <VaccineButtonOption select={this.selectVaccine}/>;
        else
            return null;
    }

    renderSelectedVaccine() {
        if (this.props.selectedVaccine != null || this.props.selectedVaccine != null) {
            //let selectedVaccine = this.props.selectedVaccine != null ? this.props.selectedVaccine : this.props.selectedVaccine;
            let imgPath = "static/sliders/" + (this.props.isCurrentRow ? this.props.selectedVaccine.imgName : this.props.generic.imgName);
            return <img className="vaccineButton" src={imgPath} alt={this.props.selectedVaccine.name}/>
        } else {
            return null;
        }
    }


    render() {
//        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        let buttonName = this.state.buttonName;

        let vaccines = this.renderVaccines(this.props.options);
        let clearButton = this.renderClearButton();
        let selectedVaccine = this.renderSelectedVaccine();

        let buttonStyle = styles.packedPopoverBtn;
        if (this.props.comboSpan) {
            if (this.props.comboSpan === 4)
                buttonStyle = styles.packedPopoverComboBtn4;
            else if (this.props.comboSpan === 3)
                buttonStyle = styles.packedPopoverComboBtn3;
            else if (this.props.comboSpan === 2)
                buttonStyle = styles.packedPopoverComboBtn2;
        }

            return (
                <div>
                    <button
                        style={buttonStyle}
                        aria-owns={open ? 'simple-popper' : undefined}
                        aria-haspopup="true"
                        variant="contained"
                        onClick={this.handleClick}
                        content={buttonName}
                        disabled={this.state.isTutorial}
                    >
                        { selectedVaccine }
                    </button>
                    <Popover
                        id="simple-popper"
                        style={styles.popover}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={this.handleClose}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'left',
                        }}
                    >
                        <div>
                            {vaccines}
                            {clearButton}
                        </div>
                    </Popover>
                </div>
            );
    }
}

export default VaccineButton;