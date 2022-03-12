import React from 'react';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: this.props,
        marginLeft: '27px',
        marginRight: '27px'
    },
    slider: {
        padding: '14px 0px'
    },
    sliderCombined: {
        padding: '10px 0px'
    },
    thumbIcon: {
        borderRadius: '8px',
        borderColor: "#aaaaaa",
        borderStyle: "solid",
        borderWidth: "1px",
        height: '28px' ,
        width: '56px'
    }
};

class SimpleSlider extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <Slider
                    classes={{ container: this.combinedSchedule ? classes.sliderCombined : classes.slider , thumb: classes.thumbIcon}}
                    value={value}
                    min={this.props.min}
                    max={this.props.max}
                    step={1}
                    thumb={
                        <img
                            alt="slider thumb icon"
                            src={(window.location.href.indexOf("schedulerqa") > 0 ? "static/sliders/" : "../static/sliders/") + this.props.drugLogo}
                            className={classes.thumbIcon}
                        />
                    }
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default withStyles(styles)(SimpleSlider);