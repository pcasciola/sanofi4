import {Component} from "react";
import VaccineSlider from "./VaccineSlider";
import VaccineButton from "./VaccineButton";
import React from "react";
import VaccineHeader from "./VaccineHeader";
import VaccineRow from "./VaccineRow";
import {initializeVaccines} from "../helpers";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { withStyles } from '@material-ui/core/styles';


const CustomTooltip = withStyles(theme => ({
    tooltip: {
        fontSize: 16,
    },
}))(Tooltip);

class SchedulerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTutorial : this.props.isTutorial,
            anchorVaccine: null,
            hepADose2SliderMax: 2,
            iivSliderColumn: 4,
            iivSliderMax: 12,
            hibSliderColumn: 6,
            dtapSliderMax: 1
        };
    }

    handleVaccinePopover = event => {
        this.setState({
            anchorVaccine: event.currentTarget
        });
    };
    handleVaccineClose = () => {
        this.setState({
            anchorVaccine: null
        });
    };

    vaccinesMatch = (vaccine1, vaccine2) => {
        if (vaccine1 != null && vaccine2 != null) {
            return vaccine1.name === vaccine2.name;
        } else {
            return false;
        }
    };


    setVaccineSelection = (vaccine, row, column, isDrag) => {
        this.props.setVaccineSelection(vaccine, row, column, isDrag);

    };

    getGlobalProps = (v, vaccine) => {
        let cr = this.props.currentRow;

        return {
            generic: v.get(vaccine),
            isCurrentRow: this.vaccinesMatch(cr, v.get(vaccine)),
            setCurrentRow: this.props.setCurrentRow,
            setVaccineSelection: this.setVaccineSelection
        };

    };

    getSelection = (v,genericName, column) => {
        const columnName = ["B","1M","2M","4M","6M","9M","12M","15M","18M","19-23M","2-3Y","4-6Y","7-10Y","11-12Y","13-15Y","16Y","17-18Y"];
        let selection = this.props.selections[genericName][columnName[column]];
        return v.get(selection);
    }

    getSelectionInRange = (v,genericName, startColumn, endColumn) => {
        const columnName = ["B","1M","2M","4M","6M","9M","12M","15M","18M","19-23M","2-3Y","4-6Y","7-10Y","11-12Y","13-15Y","16Y","17-18Y"];
//        if (genericName == "IIV")
//            console.log("Checking IIV from " + startColumn + " to " + endColumn);
        for (var column = startColumn ; column <= endColumn ; column++) {
            let selection = this.props.selections[genericName][columnName[column]];
            if (selection != null && selection.length > 0) {
                console.log("Found " + selection + " at " + column);
                return v.get(selection);
            }
        }
        return null;
    }

    getSelectionOffsetInRange = (v,genericName, startColumn, endColumn) => {
        const columnName = ["B","1M","2M","4M","6M","9M","12M","15M","18M","19-23M","2-3Y","4-6Y","7-10Y","11-12Y","13-15Y","16Y","17-18Y"];
//        if (genericName == "IIV")
//            console.log("Checking IIV from " + startColumn + " to " + endColumn);
        for (let column = startColumn ; column <= endColumn ; column++) {
            let selection = this.props.selections[genericName][columnName[column]];
            if (selection != null && selection.length > 0) {
                console.log("Found " + selection + " at " + column);
                return column - startColumn;
            }
        }
        return null;
    }

    render() {
        let cr = this.props.currentRow;
        //TODO: Not sure why but can't pass the Map as a prop after putting React in with HTML elements, so initializing it here as well as in the Scheduler component
        //let v = this.props.vaccines;
        let v = initializeVaccines();
        let { anchorVaccine } = this.state;
        let { keyPrefix } = this.props;
        let openVaccinePop = Boolean(anchorVaccine);

        //Sanofi drugs
        //ACTHIB, ADACEL, DAPTACEL, FLUZONE, IPOL, MENACTRA, PENTACEL, QUADRACEL

        let hepB = [
            <VaccineButton column={0} options={[v.get("ENGERIX-B"),v.get("RECOMBIVAX")]} selectedVaccine={this.getSelection(v, "HEPB",0)} generic={v.get("HEPB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPB"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            (this.props.flags["pediarixCombo1"] ?
                <VaccineButton column={2} comboSpan={3} options={[v.get("PEDIARIX")]} selectedVaccine={v.get("PEDIARIX")} generic={v.get("HEPB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPB"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                    :
                    this.props.flags["vaxelisCombo1"] ?
                        <VaccineButton column={2} comboSpan={4} options={[v.get("VAXELIS")]} selectedVaccine={v.get("VAXELIS")} generic={v.get("HEPB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPB"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                    :
                <VaccineSlider key={"hebp1"+keyPrefix} column={1}  selectedVaccine={this.getSelectionInRange(v, "HEPB",1,2)} value={this.getSelectionOffsetInRange(v, "HEPB", 1, 2)} options={[v.get("ENGERIX-B"),v.get("RECOMBIVAX")]} min={0} max={1} generic={v.get("HEPB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPB"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
            ),
            this.props.flags["pediarixCombo2"] ?
                <VaccineButton column={3} comboSpan={3} options={[v.get("PEDIARIX")]} selectedVaccine={v.get("PEDIARIX")} generic={v.get("HEPB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPB"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                    :
                    this.props.flags["vaxelisCombo2"] ?
                        <VaccineButton column={3} comboSpan={4} options={[v.get("VAXELIS")]} selectedVaccine={v.get("VAXELIS")} generic={v.get("HEPB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPB"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                    :
                <VaccineButton column={3} blank={true}/>,
            this.props.flags["pediarixCombo3"] ?
                <VaccineButton key={"pediarix3"+keyPrefix} column={4} comboSpan={3} options={[v.get("PEDIARIX")]} selectedVaccine={v.get("PEDIARIX")}  generic={v.get("HEPB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPB"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                    :
                    this.props.flags["vaxelisCombo3"] ?
                        <VaccineButton column={4} comboSpan={4} options={[v.get("VAXELIS")]} selectedVaccine={v.get("VAXELIS")} generic={v.get("HEPB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPB"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                    :
                <VaccineSlider key={"hepb4"+keyPrefix} column={4} selectedVaccine={this.getSelectionInRange(v, "HEPB",4,8)} options={[v.get("ENGERIX-B"),v.get("RECOMBIVAX"),v.get("PEDIARIX"),v.get("VAXELIS")]} min={0} max={4} value={this.getSelectionOffsetInRange(v, "HEPB", 4, 8)}  generic={v.get("HEPB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPB"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
        ];

        let DTaP = [
            this.props.flags["pediarixCombo1"] || this.props.flags["vaxelisCombo1"]?
                <VaccineButton column={2} skip={true}/>
                    :
                this.props.flags["pentacelCombo1"] ?
                    <VaccineButton column={2} comboSpan={3}  selectedVaccine={v.get("PENTACEL")} generic={v.get("DTAP")} options={[v.get("PENTACEL")]} isCurrentRow={this.vaccinesMatch(cr,v.get("DTAP"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                        :
                    <VaccineButton column={2} selectedVaccine={this.getSelection(v, "DTAP", 2)} options={this.props.sanofiOnly ? [v.get("DAPTACEL"),v.get("PENTACEL")] : [v.get("DAPTACEL"),v.get("PENTACEL"),v.get("INFANRIX"),v.get("PEDIARIX"), v.get("VAXELIS")]} generic={v.get("DTAP")} isCurrentRow={this.vaccinesMatch(cr,v.get("DTAP"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            this.props.flags["pediarixCombo2"] || this.props.flags["vaxelisCombo2"] ?
                <VaccineButton column={3} skip={true}/>
                    :
                this.props.flags["pentacelCombo2"] ?
                    <VaccineButton column={3} comboSpan={3} options={[v.get("PENTACEL")]} selectedVaccine={v.get("PENTACEL")} generic={v.get("DTAP")} isCurrentRow={this.vaccinesMatch(cr,v.get("DTAP"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                        :
                    <VaccineButton column={3} selectedVaccine={this.getSelection(v, "DTAP", 3)} options={this.props.sanofiOnly ? [v.get("DAPTACEL"),v.get("PENTACEL")] : [v.get("DAPTACEL"),v.get("PENTACEL"),v.get("INFANRIX"),v.get("PEDIARIX"), v.get("VAXELIS")]} generic={v.get("DTAP")} isCurrentRow={this.vaccinesMatch(cr,v.get("DTAP"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            this.props.flags["pediarixCombo3"] || this.props.flags["vaxelisCombo3"] ?
                <VaccineButton column={4} skip={true}/>
                    :
                this.props.flags["pentacelCombo3"] ?
                    <VaccineButton column={4} comboSpan={3} selectedVaccine={v.get("PENTACEL")} generic={v.get("DTAP")} options={[v.get("PENTACEL")]} isCurrentRow={this.vaccinesMatch(cr,v.get("DTAP"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                        :
                    <VaccineButton column={4} selectedVaccine={this.getSelectionInRange(v, "DTAP", 4,6)} options={this.props.sanofiOnly ? [v.get("DAPTACEL"),v.get("PENTACEL")] : [v.get("DAPTACEL"),v.get("PENTACEL"),v.get("INFANRIX"),v.get("PEDIARIX"),v.get("VAXELIS")]} generic={v.get("DTAP")} isCurrentRow={this.vaccinesMatch(cr,v.get("DTAP"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            this.props.flags["pentacelCombo4"] ?
                <VaccineSlider key={"Pentacel4"+keyPrefix} column={7} selectedVaccine={v.get("PENTACEL")} comboSpan={3} options={[v.get("PENTACEL")]} min={0} max={this.props.map.get("dtapSliderMax")} value={this.getSelectionOffsetInRange(v, "DTAP", 7, 9)} generic={v.get("DTAP")} isCurrentRow={this.vaccinesMatch(cr,v.get("DTAP"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                    :
                <VaccineSlider key={"dtap7"+keyPrefix} column={7} selectedVaccine={this.getSelectionInRange(v, "DTAP", 7, 9)} options={this.props.sanofiOnly ? [v.get("DAPTACEL"),v.get("PENTACEL")] : [v.get("DAPTACEL"),v.get("PENTACEL"),v.get("INFANRIX")]} min={0} max={this.props.map.get("dtapSliderMax")} value={this.getSelectionOffsetInRange(v, "DTAP", 7, 9)} generic={v.get("DTAP")} isCurrentRow={this.vaccinesMatch(cr,v.get("DTAP"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            this.props.flags["quadracelCombo"] == null && this.props.flags["kinrixCombo"] == null ?
                <VaccineButton column={11} selectedVaccine={this.getSelection(v, "DTAP", 11)} options={this.props.sanofiOnly ? [v.get("DAPTACEL"),v.get("QUADRACEL")] : [v.get("DAPTACEL"),v.get("QUADRACEL"),v.get("INFANRIX"),v.get("KINRIX")]} generic={v.get("DTAP")} isCurrentRow={this.vaccinesMatch(cr,v.get("DTAP"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                    :
                <VaccineButton column={11} selectedVaccine={this.props.flags["quadracelCombo"] ? v.get("QUADRACEL") : v.get("KINRIX")} comboSpan={2} options={this.props.sanofiOnly ? [v.get("QUADRACEL")] : [v.get("QUADRACEL"),v.get("KINRIX")]} generic={v.get("DTAP")} isCurrentRow={this.vaccinesMatch(cr,v.get("DTAP"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
            ];
        let IPV = [
            this.props.flags["pediarixCombo1"] || this.props.flags["pentacelCombo1"] || this.props.flags["vaxelisCombo1"] ?
                <VaccineButton column={2} skip={true} selectedVaccine={null}/>
                    :
                <VaccineButton column={2} selectedVaccine={this.getSelection(v, "IPV", 2)} options={this.props.sanofiOnly ? [v.get("IPOL"),v.get("PENTACEL")] : [v.get("IPOL"),v.get("PENTACEL"),v.get("PEDIARIX"), v.get("VAXELIS")]} generic={v.get("IPV")} isCurrentRow={this.vaccinesMatch(cr,v.get("IPV"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            this.props.flags["pediarixCombo2"] || this.props.flags["pentacelCombo2"] || this.props.flags["vaxelisCombo2"] ?
                <VaccineButton column={3} skip={true} selectedVaccine={null}/>
                    :
                <VaccineButton column={3} selectedVaccine={this.getSelection(v, "IPV", 3)} options={this.props.sanofiOnly ? [v.get("IPOL"),v.get("PENTACEL")] : [v.get("IPOL"),v.get("PENTACEL"),v.get("PEDIARIX"), v.get("VAXELIS")]} generic={v.get("IPV")} isCurrentRow={this.vaccinesMatch(cr,v.get("IPV"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            this.props.flags["pentacelCombo4"] ?
                <VaccineButton column={4} skip={true} min={0} max={this.props.flags["pentacelCombo3"] || this.props.flags["pediarixCombo3"] || this.props.flags["vaxelisCombo3"] ? 2 : 1}/>
                    :
                this.props.flags["pediarixCombo3"] || this.props.flags["pentacelCombo3"] || this.props.flags["vaxelisCombo3"] ?
                    <VaccineButton column={4} skip={true} selectedVaccine={null}/>
                        :
                    <VaccineSlider key={"IPV4"+keyPrefix} column={4} selectedVaccine={this.getSelectionInRange(v, "IPV", 4,8)} value={this.getSelectionOffsetInRange(v, "IPV", 4, 8)} options={this.props.sanofiOnly ? [v.get("IPOL"),v.get("PENTACEL")] : [v.get("IPOL"),v.get("PENTACEL"),v.get("PEDIARIX"), v.get("VAXELIS")]} min={0} max={4}  generic={v.get("IPV")} isCurrentRow={this.vaccinesMatch(cr,v.get("IPV"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial}  />,
            this.props.flags["quadracelCombo"] || this.props.flags["kinrixCombo"] ?
                <VaccineButton column={11} skip={true} selectedVaccine={null}/>
                    :
                <VaccineButton column={11} selectedVaccine={this.getSelection(v, "IPV", 11)} options={this.props.sanofiOnly ? [v.get("IPOL"),v.get("QUADRACEL")] : [v.get("IPOL"), v.get("QUADRACEL"),v.get("KINRIX")]} generic={v.get("IPV")} isCurrentRow={this.vaccinesMatch(cr,v.get("IPV"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
            ];
        let Hib = [
            this.props.flags["pentacelCombo1"] || this.props.flags["vaxelisCombo1"] ?
                <VaccineButton column={2} skip={true}/>
                    :
                <VaccineButton column={2} selectedVaccine={this.getSelection(v, "HIB", 2)} options={this.props.sanofiOnly ? [v.get("ACTHIB"),v.get("PENTACEL")] : [v.get("ACTHIB"),v.get("PENTACEL"),v.get("HIBERIX"),v.get("PEDVAXHIB"), v.get("VAXELIS")]} generic={v.get("HIB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HIB"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            this.props.flags["pentacelCombo2"] || this.props.flags["vaxelisCombo2"] ?
                <VaccineButton column={3} skip={true}/>
                    :
                <VaccineButton column={3} selectedVaccine={this.getSelection(v, "HIB", 3)} options={this.props.sanofiOnly ? [v.get("ACTHIB"),v.get("PENTACEL")] : [v.get("ACTHIB"),v.get("PENTACEL"),v.get("HIBERIX"),v.get("PEDVAXHIB"), v.get("VAXELIS")]} generic={v.get("HIB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HIB"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            this.props.flags["pentacelCombo3"] || this.props.flags["vaxelisCombo3"] ?
                <VaccineButton column={4} skip={true}/>
                    :
                <VaccineButton column={4} selectedVaccine={this.getSelection(v, "HIB", 4)} options={this.props.sanofiOnly ? [v.get("ACTHIB"),v.get("PENTACEL")] : [v.get("ACTHIB"),v.get("PENTACEL"),v.get("HIBERIX"), v.get("VAXELIS")]} generic={v.get("HIB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HIB"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            this.props.flags["pentacelCombo4"] ?
                <VaccineButton column={5} skip={true} min={0} max={1}/>
                    :
                <VaccineSlider key={"HIB5"+keyPrefix} selectedVaccine={this.getSelectionInRange(v, "HIB", this.props.map.get("hibSliderColumn"), this.props.map.get("hibSliderColumn") + 1)} value={this.getSelectionOffsetInRange(v, "HIB", this.props.map.get("hibSliderColumn"), this.props.map.get("hibSliderColumn") + 1)} column={this.props.map.get("hibSliderColumn")} options={this.props.sanofiOnly ? [v.get("ACTHIB"),v.get("PENTACEL")] : [v.get("ACTHIB"),v.get("PENTACEL"),v.get("HIBERIX"),v.get("PEDVAXHIB")]} min={0} max={1}  generic={v.get("HIB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HIB"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
            ];
        let RV = [
            <VaccineButton column={2} selectedVaccine={this.getSelection(v, "RV", 2)} options={[v.get("ROTARIX"),v.get("ROTATEQ")]} generic={v.get("RV")} isCurrentRow={this.vaccinesMatch(cr,v.get("RV"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            <VaccineButton column={3} selectedVaccine={this.getSelection(v, "RV", 3)} options={[v.get("ROTARIX"),v.get("ROTATEQ")]} generic={v.get("RV")} isCurrentRow={this.vaccinesMatch(cr,v.get("RV"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            ];
        if (!(this.props.flags["rotarix1"] && this.props.flags["rotarix2"]))
            RV.push(<VaccineButton column={4} selectedVaccine={this.getSelection(v, "RV", 4)} options={[v.get("ROTATEQ")]} generic={v.get("RV")} isCurrentRow={this.vaccinesMatch(cr,v.get("RV"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />);

        let PCV = [
            <VaccineButton column={2} selectedVaccine={this.getSelection(v, "PCV", 2)} options={[v.get("PREVNAR 13")]} generic={v.get("PCV")} isCurrentRow={this.vaccinesMatch(cr,v.get("PCV"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            <VaccineButton column={3} selectedVaccine={this.getSelection(v, "PCV", 3)} options={[v.get("PREVNAR 13")]} generic={v.get("PCV")} isCurrentRow={this.vaccinesMatch(cr,v.get("PCV"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            <VaccineButton column={4} selectedVaccine={this.getSelection(v, "PCV", 4)} options={[v.get("PREVNAR 13")]} generic={v.get("PCV")} isCurrentRow={this.vaccinesMatch(cr,v.get("PCV"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            <VaccineSlider key={"PCV6"+keyPrefix} column={6} selectedVaccine={this.getSelectionInRange(v, "PCV", 6,7)} value={this.getSelectionOffsetInRange(v, "PCV", 6, 7)} options={[v.get("PREVNAR 13")]} min={0} max={1} generic={v.get("PCV")} isCurrentRow={this.vaccinesMatch(cr,v.get("PCV"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
            ];
        let IIV = [
            <VaccineSlider key={"IIV"+keyPrefix} column={this.props.map.get("iivSliderColumn")} selectedVaccine={this.getSelectionInRange(v, "IIV", this.props.map.get("iivSliderColumn"), parseInt(this.props.map.get("iivSliderColumn"), 10) + this.props.map.get("iivSliderMax"))} options={this.props.sanofiOnly ? [v.get("FLUZONE QUADRIVALENT")] : [v.get("FLUZONE QUADRIVALENT"),v.get("FLULAVAL QUADRIVALENT"),v.get("AFLURIA QUADRIVALENT"),v.get("FLUARIX QUADRIVALENT"),v.get("FLUCELVAX QUADRIVALENT")]} min={0} max={this.props.map.get("iivSliderMax")} generic={v.get("IIV")} isCurrentRow={this.vaccinesMatch(cr,v.get("IIV"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
            ];
        let LAIV = [
            <VaccineSlider key={"LAIV"+keyPrefix} column={10} selectedVaccine={this.getSelectionInRange(v, "LAIV", 10, 16)} options={[v.get("FLUMIST QUADRIVALENT")]} min={0} max={6} generic={v.get("LAIV")} isCurrentRow={this.vaccinesMatch(cr,v.get("LAIV"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />];
        let MMR = [
            this.props.flags["proQuadCombo1"] ?
                <VaccineSlider key={"proQuad1"+keyPrefix} column={6} comboSpan={2} selectedVaccine={v.get("PROQUAD")} value={this.getSelectionOffsetInRange(v, "MMR", 6, 7)} options={[v.get("PROQUAD")]} min={0} max={1} generic={v.get("MMR")} isCurrentRow={this.vaccinesMatch(cr,v.get("MMR"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                    :
                <VaccineSlider key={"MMR6"+keyPrefix} column={6} selectedVaccine={this.getSelectionInRange(v, "MMR", 6,7)} value={this.getSelectionOffsetInRange(v, "MMR", 6, 7)} options={[v.get("M-M-R II"),v.get("PROQUAD")]} min={0} max={1} generic={v.get("MMR")} isCurrentRow={this.vaccinesMatch(cr,v.get("MMR"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            this.props.flags["proQuadCombo2"] ?
                <VaccineButton column={11} comboSpan={2} selectedVaccine={v.get("PROQUAD")} options={[v.get("PROQUAD")]} generic={v.get("MMR")} isCurrentRow={this.vaccinesMatch(cr,v.get("MMR"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
                    :
                <VaccineButton column={11} selectedVaccine={this.getSelection(v, "MMR", 11)} options={[v.get("M-M-R II"),v.get("PROQUAD")]} generic={v.get("MMR")} isCurrentRow={this.vaccinesMatch(cr,v.get("MMR"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            ];
        let VAR = [
            this.props.flags["proQuadCombo1"] ?
                <VaccineButton column={6} skip={true} min={0} max={1} skipCount={2}/>
                    :
                <VaccineSlider key={"VAR6"+keyPrefix} column={6} selectedVaccine={this.getSelectionInRange(v, "VAR", 6,7)} value={this.getSelectionOffsetInRange(v, "VAR", 6, 7)} options={[v.get("VARIVAX"),v.get("PROQUAD")]} min={0} max={1}  generic={v.get("VAR")} isCurrentRow={this.vaccinesMatch(cr,v.get("VAR"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            this.props.flags["proQuadCombo2"] ?
                <VaccineButton column={11} skip={true} />
                    :
                <VaccineButton column={11} comboSpan={this.props.flags["proQuadCombo2"] ? 2 : null} selectedVaccine={this.getSelection(v, "VAR", 11)} options={[v.get("VARIVAX"),v.get("PROQUAD")]} generic={v.get("VAR")} isCurrentRow={this.vaccinesMatch(cr,v.get("VAR"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            ];

        let hepADose2SliderStart = parseInt(this.props.map.get("hepADose2SliderColumn"), 10);
        let hepADose2SliderMax = parseInt(this.props.map.get("hepADose2SliderMax"), 10);
        let hepADose2SliderEnd = hepADose2SliderStart + hepADose2SliderMax;
        if (hepADose2SliderEnd > 10) {
            if (hepADose2SliderMax > 1)
                hepADose2SliderMax = 1;
            hepADose2SliderEnd = 10;
        }

        let HepA = [
            <VaccineSlider key={"HEPA6"+keyPrefix} column={6} selectedVaccine={this.getSelectionInRange(v, "HEPA", 6, 7)} value={this.getSelectionOffsetInRange(v, "HEPA", 6, 7)} options={[v.get("HAVRIX"),v.get("VAQTA")]} min={0} max={1} generic={v.get("HEPA")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPA"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            <VaccineSlider key={"HEPA8"+keyPrefix} column={hepADose2SliderStart} selectedVaccine={this.getSelectionInRange(v, "HEPA", hepADose2SliderStart, hepADose2SliderEnd)} value={this.getSelectionOffsetInRange(v, "HEPA", hepADose2SliderStart, hepADose2SliderEnd)} options={[v.get("HAVRIX"),v.get("VAQTA")]} min={0} max={hepADose2SliderMax} generic={v.get("HEPA")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPA"))} setCurrentRow={this.props.setCurrentRow} clearSliderSelection={this.props.clearSliderSelection} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
            ];
        let Tdap = [
            <VaccineButton column={13} selectedVaccine={this.getSelection(v, "TDAP", 13)} options={this.props.sanofiOnly ? [v.get("ADACEL")] : [v.get("ADACEL"),v.get("BOOSTRIX")]} generic={v.get("TDAP")} isCurrentRow={this.vaccinesMatch(cr,v.get("TDAP"))}  setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
        ];
        let HPV = [
            <VaccineButton column={13} selectedVaccine={this.getSelection(v, "HPV", 13)} options={[v.get("GARDASIL 9")]} generic={v.get("HPV")} isCurrentRow={this.vaccinesMatch(cr,v.get("HPV"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
            ];

        let MenACWY11 = this.getSelection(v, "MENACWY", 15) === v.get("MENQUADFI") ?
            (this.props.sanofiOnly ? [v.get("MENACTRA")] : [v.get("MENACTRA"),v.get("MENQUADFI"),v.get("MENVEO")])
                :
            (this.props.sanofiOnly ? [v.get("MENACTRA"),v.get("MENQUADFI")] : [v.get("MENACTRA"),v.get("MENQUADFI"),v.get("MENVEO")]);

        let MenACWY16 = this.getSelection(v, "MENACWY", 13) === v.get("MENQUADFI") ?
            (this.props.sanofiOnly ? [v.get("MENACTRA")] : [v.get("MENQUADFI")])
            :
            (this.props.sanofiOnly ? [v.get("MENACTRA"),v.get("MENQUADFI")] : [v.get("MENACTRA"),v.get("MENQUADFI"),v.get("MENVEO")]);


        let MenACWY = [
            <VaccineButton column={13} selectedVaccine={this.getSelection(v, "MENACWY", 13)} options={MenACWY11}  generic={v.get("MEN")} isCurrentRow={this.vaccinesMatch(cr,v.get("MEN"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />,
            <VaccineButton column={15} selectedVaccine={this.getSelection(v, "MENACWY", 15)} options={MenACWY16}  generic={v.get("MEN")} isCurrentRow={this.vaccinesMatch(cr,v.get("MEN"))} setCurrentRow={this.props.setCurrentRow} setVaccineSelection={this.setVaccineSelection} isTutorial={this.state.isTutorial} />
            ];

        //Breaking table into two parts to suppress these rows on instructions page
        let fullTable = [
            <VaccineRow key={"cond1"} condition="Measles, mumps, rubella (MMR)" vaccines={MMR} generic={v.get("MMR")} isCurrentRow={this.vaccinesMatch(cr,v.get("MMR"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introMiddle" : false} />,
            <VaccineRow key={"cond2"} condition="Varicella (VAR)" vaccines={VAR} generic={v.get("VAR")} isCurrentRow={this.vaccinesMatch(cr,v.get("VAR"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introMiddle" : false} />,
            <VaccineRow key={"cond3"} condition="Hepatitis A (HepA)" vaccines={HepA} generic={v.get("HEPA")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPA"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introMiddle" : false} />,
            <VaccineRow key={"cond4"} condition="Tetanus, diphtheria and acellular pertussis (Tdap)" vaccines={Tdap} generic={v.get("TDAP")} isCurrentRow={this.vaccinesMatch(cr,v.get("TDAP"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introMiddle" : false} />,
            <VaccineRow key={"cond5"} condition="Human papillomavirus (HPV)" vaccines={HPV} generic={v.get("HPV")} isCurrentRow={this.vaccinesMatch(cr,v.get("HPV"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introMiddle" : false} />,
            <VaccineRow key={"cond6"} condition="Meningococcal (MenACWY)" vaccines={MenACWY}  generic={v.get("MEN")} isCurrentRow={this.vaccinesMatch(cr,v.get("MEN"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introBottom" : false} />
            ];

        return (
            <div className={"table-responsive " + this.props.className}>
                <table id="packedTable" className="table table-sm table-striped table-bordered">
                    <VaccineHeader/>
                    <ClickAwayListener onClickAway={this.handleVaccineClose}>
                        <CustomTooltip
                            open={openVaccinePop}
                            onClose={this.handleVaccineClose}
                            disableFocusListener
                            disableHoverListener
                            title='Clicking on any vaccine name will highlight the corresponding row and enable integration of vaccines into the schedule'
                            leaveTouchDelay={5000}
                            placement={'right'}
                        >
                            <tbody onClick={this.state.isTutorial ? this.handleVaccinePopover : null}>
                                <VaccineRow key={"cond7"} condition="Hepatitis B (HepB)" vaccines={hepB} generic={v.get("HEPB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HEPB"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introTop" : false} />
                                <VaccineRow key={"cond8"} condition="Diphtheria, tetanus, and acellular pertussis (DTaP)" vaccines={DTaP} generic={v.get("DTAP")} isCurrentRow={this.vaccinesMatch(cr,v.get("DTAP"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial  ? "introMiddle" : false} />
                                <VaccineRow key={"cond9"} condition="Inactivated poliovirus (IPV)" vaccines={IPV} generic={v.get("IPV")} isCurrentRow={this.vaccinesMatch(cr,v.get("IPV"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introMiddle" : false} />
                                <VaccineRow key={"cond10"} condition="Haemophilus influenzae type b (Hib)" vaccines={Hib} generic={v.get("HIB")} isCurrentRow={this.vaccinesMatch(cr,v.get("HIB"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introMiddle" : false} />
                                <VaccineRow key={"cond11"} condition="Rotavirus (RV)" vaccines={RV} generic={v.get("RV")} isCurrentRow={this.vaccinesMatch(cr,v.get("RV"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introMiddle" : false} />
                                <VaccineRow key={"cond12"} condition="Pneumococcal conjugate (PCV)" vaccines={PCV} generic={v.get("PCV")} isCurrentRow={this.vaccinesMatch(cr,v.get("PCV"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introMiddle" : false} />
                                <VaccineRow key={"cond13"} condition="Influenza (IIV)" vaccines={IIV} generic={v.get("IIV")} isCurrentRow={this.vaccinesMatch(cr,v.get("IIV"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introMiddle" : false} />
                                <VaccineRow key={"cond14"} condition="Influenza (LAIV)" vaccines={LAIV} generic={v.get("LAIV")} isCurrentRow={this.vaccinesMatch(cr,v.get("LAIV"))} setCurrentRow={this.props.setCurrentRow} isTutorial={this.state.isTutorial ? "introBottom" : false} />
                                {this.state.isTutorial ? null : fullTable}
                            </tbody>
                        </CustomTooltip>
                    </ClickAwayListener>
                </table>
            </div>
        );
    }

}

export default SchedulerTable;