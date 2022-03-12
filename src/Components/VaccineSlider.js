import React, { Component } from 'react';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import VaccineButtonOption from "./VaccineButtonOption";
import Popover from '@material-ui/core/Popover';

const styles = {
    root: {
        //width: this.props,
        marginLeft: '27px',
        marginRight: '27px'
    },
    slider: {
        padding: '14px 0px'
    },
    sliderCombined: {
        padding: '10px 0px',
    },
    thumbImg:{
        height: '23px',
        width: '50px'
    },
    thumbIcon: {
        borderRadius: 6,
        borderColor: "#aaaaaa",
        borderStyle: "solid",
        borderWidth: 1,
        height: '23px' ,
        width: '50px',
        background: 'radial-gradient(#fff, #e8e8e8, #C8C8C8)',
        border: '#aaaaaa' ,
        alignItems: 'center',
        verticalAlign: 'middle',
        justifyContent: 'center',
        fontSize: 10,
        padding: 0
    },
    thumbIcon2: {
        borderRadius: 6,
        borderColor: "#aaaaaa",
        borderStyle: "solid",
        borderWidth: 1,
        height: '56px' ,
        width: '50px',
        background: 'radial-gradient(#fff, #ffebfb, #ffd8f8)',
        border: '#aaaaaa' ,
        alignItems: 'center',
        verticalAlign: 'middle',
        justifyContent: 'center',
        fontSize: 10,
        padding: 0
    },
    thumbIcon3: {
        borderRadius: 6,
        borderColor: "#aaaaaa",
        borderStyle: "solid",
        borderWidth: 1,
        height: '90px' ,
        width: '50px',
        background: 'radial-gradient(#fff, #ffebfb, #ffd8f8)',
        border: '#aaaaaa' ,
        alignItems: 'center',
        verticalAlign: 'middle',
        justifyContent: 'center',
        fontSize: 10,
        padding: 0
    },
    packedPopoverBtn: {
        width: '50px',
        height: '23px',
        background: '#C8C8C8',
        border: '#aaaaaa' ,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6,
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
    }
};

class VaccineSlider extends Component {

    constructor(props) {
        super(props);

//        console.log("slider constructor, value = " + this.props.value);

        this.state = {
            value: this.props.value != null ? this.props.value : 0,
            options: this.props.options,
            anchorEl: null,
            selectedVaccine: this.props.selectedVaccine,
            isTutorial: this.props.isTutorial
        };
    }

    /*
    state = {
        value: this.props.value != null ? this.props.value : 0,
        options: this.props.options,
        anchorEl: null,
        selectedVaccine: this.props.selectedVaccine,
        isTutorial: this.props.isTutorial
    };
     */

    handleChange = (event, value) => {
        if (this.state.value != value)
            this.setState({isDrag: true});

        this.setState({ value: value },
            () => {
                console.log("handleChange slider moved to " + value);
                //Can't do this here or flu popup comes up before dragging is complete
                if (this.state.selectedVaccine != null) {
                    console.log("Selecting vaccine in touchend");
                    this.selectVaccine(this.state.selectedVaccine);
                }
            });
    };

    handleClick = (event) => {
        console.log("handle click " + event.type);
        if(this.state.isTutorial !== true) {
            if (this.props.setCurrentRow != null)
                this.props.setCurrentRow(this.props.generic);

            this.setState({isDrag: false});

            if (this.state.selectedVaccine != null) { // && event.type == "touchend")
                console.log("Selecting vaccine in handleClick");
                this.selectVaccine(this.state.selectedVaccine);
            }

            if (this.state.selectedVaccine == null || !this.state.isDrag) {
                //console.log("Reacting to " + event.type + " event");
                this.setState({
                    anchorEl: event.currentTarget
                });
            }
        }
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
            isDrag: false
        });
    };

    selectVaccine = (vaccine) => {
        //Not sure why this wasn't working before unless arrow function was used
        this.setState(/*prevState => ({*/{
            selectedVaccine: vaccine,
            anchorEl: null,
        }/*)*/);
        if (vaccine == null)
            this.setState({value:0});
        //console.log("slider set at " + (parseInt(this.props.column) + parseInt(this.state.value)));
        this.props.clearSliderSelection(this.props.generic, parseInt(this.props.column, 10) + this.props.min, parseInt(this.props.column, 10) + parseInt(this.props.min, 10) + this.props.max);
        this.props.setVaccineSelection(vaccine, this.props.generic, parseInt(this.props.column, 10) + parseInt(this.state.value, 10), this.state.isDrag);
    };

    renderVaccines(vaccines){
        if (vaccines instanceof  Array) {
            let counter = 0;
            return vaccines.map((vaccine, index) => {
                return <VaccineButtonOption key={"vbos" + counter++} vaccine={vaccine} select={this.selectVaccine}/>
            });
        } else {
            return null;
        }
    };

    renderClearButton(){
        if (this.props.selectedVaccine != null)
            return <VaccineButtonOption select={this.selectVaccine}/>;
        else
            return null;
    };

    renderSelectedVaccine() {
        if (this.props.selectedVaccine != null) {
            let imgPath = "static/sliders/" + (this.props.isCurrentRow ? this.props.selectedVaccine.imgName : this.props.generic.imgName);
            return <img style={{"height":"23px"}} /*className={styles.thumbImg}*/ src={imgPath} alt={this.props.selectedVaccine.name}/>
        }
    };

    render() {
        let { classes } = this.props;
        let { value } = this.state;

        //This fixes pental issue when selected in 18M for Hib, but can't move slider
        //let value = this.props.value != null ? this.props.value : this.state.value;

        let { anchorEl } = this.state;
        let open = Boolean(anchorEl);

        let vaccines = this.renderVaccines(this.props.options);
        let clearButton = this.renderClearButton();
        let selectedVaccine = this.renderSelectedVaccine();

        let thumbClass = classes.thumbIcon;
        if (this.props.comboSpan) {
            if (this.props.comboSpan == 3)
                thumbClass = classes.thumbIcon3;
            else if (this.props.comboSpan == 2)
                thumbClass = classes.thumbIcon2;
        }

        return (
            <div className={classes.root}>
                <Slider
                    classes={{ container: classes.slider , thumb: thumbClass}}
                    value={value}
                    min={this.props.min}
                    max={this.props.max}
                    step={1}
                    thumb={
                       selectedVaccine
                    }
                    onClick={this.handleClick}
                    onChange={this.handleChange}
                    onTouchEnd={this.handleClick}
                    /* onDragEnd={this.handleClick} */
                />
                <Popover
                    id="simple-popper"
                    style={styles.popover}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
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

export default withStyles(styles)(VaccineSlider);