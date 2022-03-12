import {Component} from "react";
import React from "react";
import Header from "./Header";
import HeaderNav from "./HeaderNav";
import SchedulerTable from "./SchedulerTable";
import Footer from "./Footer";
import {initializeVaccines} from "../helpers";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import ReactGA from "react-ga";

class Scheduler extends Component {

    constructor(props) {
        super(props);

        let flags = Array();
        flags["MY"] = new Array();
        flags["SANOFI"] = new Array();

        let maps = Array();
        maps["MY"] = new Map();
        maps["SANOFI"] = new Map();

        this.setDefaultMapValues(maps["MY"]);
        this.setDefaultMapValues(maps["SANOFI"]);

        this.state = {
            v: initializeVaccines(),
            keyPrefix: 0,
            currentRow: null,
            isTutorial: this.props.isTutorial,
            selectedVaccines: new Map(),
            sanofiOnly: false,
            isLoaded: false,
            loadError: false,
            SanofiLogo: this.props.SanofiLogo,
            PracticeNameSwitch: this.props.PracticeNameSwitch,
            scheduleFlags: flags,
            scheduleMaps: maps,
            fluWarningDialog: false,
            selections: {
                MY: {
                    HEPB: {},
                    DTAP: {},
                    TDAP: {},
                    IPV: {},
                    HIB: {},
                    RV: {},
                    PCV: {},
                    IIV: {},
                    LAIV: {},
                    MMR: {},
                    VAR: {},
                    HEPA: {},
                    HPV: {},
                    MENACWY: {}
                },
                SANOFI: {
                    HEPB: {},
                    DTAP: {},
                    TDAP: {},
                    IPV: {},
                    HIB: {},
                    RV: {},
                    PCV: {},
                    IIV: {},
                    LAIV: {},
                    MMR: {},
                    VAR: {},
                    HEPA: {},
                    HPV: {},
                    MENACWY: {}
                },
                hcpName: this.props.HealthCareProviderName,
                hcpEmail: this.props.HealthCareProviderEmail,
                practiceName: this.props.PracticeName,
                practiceAddress: this.props.PracticeAddress,
                practiceCity: this.props.PracticeCity,
                practiceState: this.props.PracticeState,
                practiceZip: this.props.PracticeZip,
                toEmail: this.props.ScheduleEmail,
                scheduleName: this.props.ScheduleName,
                logo: this.props.SanofiLogo,
                practice: this.props.PracticeNameSwitch,
                preview: true
            }
        };
        this.generatePDF = this.generatePDF.bind(this);

        ReactGA.pageview("/scheduler");

    }

    setDefaultMapValues = (map) => {
        map.set("hepADose2SliderColumn", 8);
        map.set("hepADose2SliderMax", 1);
        map.set("iivSliderColumn", 4);
        map.set("iivSliderMax", 12);
        map.set("hibSliderColumn", 6);
        map.set("dtapSliderMax", 1);

    }

    handleClose = () => {
        this.setState({
            open: false,
            isLoaded: false
        });
    };

    setCurrentRow = (vaccine) => {
        //console.log("setCurrentRow called with " + (vaccine != null ? vaccine.name : "null"));
        this.setState({
            currentRow: vaccine
        })
    };

    setScheduleFlag = (flagName, flag) => {
        console.log("Setting flag " + flagName + " in " + (this.state.sanofiOnly ? "SANOFI" : "MY") + " to " + flag);
        if (flag)
            this.state.scheduleFlags[this.state.sanofiOnly ? "SANOFI" : "MY"][flagName] = true;
        else
            delete this.state.scheduleFlags[this.state.sanofiOnly ? "SANOFI" : "MY"][flagName];
    }

    getScheduleFlag = (flagName) => {
        return this.state.scheduleFlags[this.state.sanofiOnly ? "SANOFI" : "MY"][flagName];
    }

    setScheduleMap = (valueName, value) => {
        console.log("Setting map " + valueName + " in " + (this.state.sanofiOnly ? "SANOFI" : "MY") + " to " + value);
        this.state.scheduleMaps[this.state.sanofiOnly ? "SANOFI" : "MY"].set(valueName, value);
    }

    clearSliderSelection = (row, startColumn, endColumn) => {
        const columnName = ["B","1M","2M","4M","6M","9M","12M","15M","18M","19-23M","2-3Y","4-6Y","7-10Y","11-12Y","13-15Y","16Y","17-18Y"];

        for (var column = startColumn ; column <= endColumn ; column++) {
            //console.log("Deleting " + row.genericIndexName + " at " + columnName[column]);
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[column]];
        }
    }

    setVaccineSelection = (vaccine, row, column, isDrag) => {
        const columnName = ["B","1M","2M","4M","6M","9M","12M","15M","18M","19-23M","2-3Y","4-6Y","7-10Y","11-12Y","13-15Y","16Y","17-18Y"];

        let showFluWarning = false;

        if (vaccine == null) {
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[column]];

            if (row.genericIndexName === "HEPB") {
                if (column == 2 || column == 3 || column == 4) {
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[2]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[3]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[4]];

                    this.setScheduleFlag("pediarixCombo1", false);
                    this.setScheduleFlag("vaxelisCombo1", false);
                    this.setScheduleFlag("pediarixCombo2", false);
                    this.setScheduleFlag("vaxelisCombo2", false);
                    this.setScheduleFlag("pediarixCombo3", false);
                    this.setScheduleFlag("vaxelisCombo3", false);
                }
            }
            if (row.genericIndexName === "RV") {
                if (column == 2)
                    this.setScheduleFlag("rotarix1", false);
                else if (column == 3)
                    this.setScheduleFlag("rotarix2", false);
            } else if (row.genericIndexName === "MEN") {
                if (column == 13 )
                    this.setScheduleFlag("menquadfi1", false);
                else if (column == 15)
                    this.setScheduleFlag("menquadfi2", false);
            }
            else if (row.genericIndexName === "DTAP") {
                if ((column == 2 || column == 3 || column == 4) && (this.getScheduleFlag("pediarixCombo1") || this.getScheduleFlag("pentacelCombo1"))) {
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[2]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[3]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[4]];

                    this.setScheduleFlag("pediarixCombo1", false);
                    this.setScheduleFlag("pentacelCombo1", false);
                    this.setScheduleFlag("vaxelisCombo1", false);
                    this.setScheduleFlag("pediarixCombo2", false);
                    this.setScheduleFlag("pentacelCombo2", false);
                    this.setScheduleFlag("vaxelisCombo2", false);
                    this.setScheduleFlag("pediarixCombo3", false);
                    this.setScheduleFlag("pentacelCombo3", false);
                    this.setScheduleFlag("vaxelisCombo3", false);

                } else if (column == 2) {
                    this.setScheduleFlag("pediarixCombo1", false);
                    this.setScheduleFlag("pentacelCombo1", false);
                    this.setScheduleFlag("vaxelisCombo1", false);
                }
                else if (column == 3) {
                    this.setScheduleFlag("pediarixCombo2", false);
                    this.setScheduleFlag("pentacelCombo2", false);
                    this.setScheduleFlag("vaxelisCombo2", false);
                }
                else if (column == 4) {
                    this.setScheduleFlag("pediarixCombo3", false);
                    this.setScheduleFlag("pentacelCombo3", false);
                    this.setScheduleFlag("vaxelisCombo3", false);
                }
                else if (column == 7) {
                    this.setScheduleFlag("pentacelCombo4", false);
                    this.setScheduleMap("dtapSliderMax", 1);
                }
                else if (column == 8) {
                    this.setScheduleFlag("pentacelCombo4", false);
                }
                else if (column == 11) {
                    this.setScheduleFlag("kinrixCombo", false);
                    this.setScheduleFlag("quadracelCombo", false);
                }
            } else if (row.genericIndexName === "IPV") {
                if (column == 2) {
                    this.setScheduleFlag("pediarixCombo1", false);
                    this.setScheduleFlag("pentacelCombo1", false);
                    this.setScheduleFlag("vaxelisCombo1", false);
                }
                else if (column == 3) {
                    this.setScheduleFlag("pediarixCombo2", false);
                    this.setScheduleFlag("pentacelCombo2", false);
                    this.setScheduleFlag("vaxelisCombo2", false);
                }
                else if (column == 4) {
                    this.setScheduleFlag("pediarixCombo3", false);
                    this.setScheduleFlag("pentacelCombo3", false);
                    this.setScheduleFlag("vaxelisCombo3", false);
                }
                else if (column == 7 || column == 8) {
                    this.setScheduleFlag("pentacelCombo4", false);
                }
                else if (column == 11) {
                    this.setScheduleFlag("kinrixCombo", false);
                    this.setScheduleFlag("quadracelCombo", false);
                }
            } else if (row.genericIndexName === "IIV") {
                this.setScheduleMap("iivSliderColumn", 4);
                this.setScheduleMap("iivSliderMax", 12);
                for (let x = 4 ; x <= 16 ; x++)
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IIV"][columnName[x]];
            } else if (row.genericIndexName === "HIB") {
                if (column == 7 || column == 8) {
                    this.setScheduleMap("hibSliderColumn", 6);
                    this.setScheduleFlag("pentacelCombo4", false)
                    for (let x = 6 ; x <= 8 ; x++)
                        delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"][columnName[x]];
                }
            } else if (row.genericIndexName === "MMR") {
                if (column == 6 || column == 7)
                    this.setScheduleFlag("proQuadCombo1", false);
                else if (column == 11)
                    this.setScheduleFlag("proQuadCombo2", false);
            }

        } else {
            console.log("Selection Made: " + vaccine.name + " selected for " + row.genericIndexName + " in column " + column + " isDrag=" + isDrag);

            //Check combos first since they can be selected on multiple rows
            if (vaccine.name.toUpperCase() == "PEDIARIX") {
                row = this.state.v.get("HEPB");

                //Column 2 logic
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"][columnName[2]];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"][columnName[2]];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[2]];

                this.setScheduleFlag("pediarixCombo1", true);
                this.setScheduleFlag("pentacelCombo1", false);
                this.setScheduleFlag("vaxelisCombo1", false);

                //Column 3 logic
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"][columnName[3]];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"][columnName[3]];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[3]];

                this.setScheduleFlag("pediarixCombo2", true);
                this.setScheduleFlag("pentacelCombo2", false);
                this.setScheduleFlag("vaxelisCombo2", false);

                //Column 3 and slider logic
                for (let x = 4 ; x <= 8 ; x++) {
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"][columnName[x]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[x]];
                }
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"][columnName[4]];

                row = this.state.v.get("HEPB");
                this.setScheduleFlag("pediarixCombo3", true);
                this.setScheduleFlag("pentacelCombo3", false);
                this.setScheduleFlag("vaxelisCombo3", false);

                this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[2]] = vaccine.name.toUpperCase();
                this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[3]] = vaccine.name.toUpperCase();
                this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[4]] = vaccine.name.toUpperCase();

                column=4; //Put in 6M always
            } else if (vaccine.name.toUpperCase() == "PENTACEL") {
                //If <15M and not HIB at 12M, set Pentacel at 2M/4M/6M, otherwise 15M
                if (column < 7 && !(column == 6 && row.genericIndexName == "HIB")) {
                    if (this.getScheduleFlag("pediarixCombo1"))
                        delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"][columnName[2]];

                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"][columnName[2]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[2]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"][columnName[2]];

                    row = this.state.v.get("DTAP");
                    this.setScheduleFlag("pentacelCombo1", true);
                    this.setScheduleFlag("pediarixCombo1", false);
                    this.setScheduleFlag("vaxelisCombo1", false);

                    if (this.getScheduleFlag("pediarixCombo2"))
                        delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"][columnName[3]];

                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"][columnName[3]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[3]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"][columnName[3]];

                    row = this.state.v.get("DTAP");
                    this.setScheduleFlag("pentacelCombo2", true);
                    this.setScheduleFlag("pediarixCombo2", false);
                    this.setScheduleFlag("vaxelisCombo2", false);

                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"][columnName[6]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[6]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"][columnName[6]];

                    for (let x = 4 ; x <= 8 ; x++)
                        delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[x]];


                    //If selected at 6M or 9M, or at 12M and dose 3 is not selected, set it as dose 3, otherwise dose 4
                    if (column < 6 || (column == 6 && row.genericIndexName !== "HIB" && !this.getScheduleFlag("pentacelCombo3"))) {
                        //Setting row inside here since if statement checks the row
                        row = this.state.v.get("DTAP");
                        //Remove Hib from 6M since it's Pentacel dose 3
                        delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"][columnName[4]];
                        if (this.getScheduleFlag("pediarixCombo3")) {
                            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"][columnName[4]];
                            this.setScheduleFlag("pediarixCombo3", false);
                        }
                        this.setScheduleFlag("pentacelCombo3", true);
                        column = 4;
                    } else {
                        //Setting row inside here since if statement checks the row
                        row = this.state.v.get("DTAP");
                        this.setScheduleFlag("pentacelCombo4", true);
                        delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"][columnName[6]];
                        delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"][columnName[7]];
                        delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"][columnName[8]];
                        //Pentacel 4th dose can't be less than column 7 (15M)
                        if (column < 7)
                            column = 7;
                    }

                    row = this.state.v.get("DTAP");
                    this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[2]] = vaccine.name.toUpperCase();
                    this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[3]] = vaccine.name.toUpperCase();
                    this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[4]] = vaccine.name.toUpperCase();

                }
                else if (column == 6 || column == 7 || column == 8 || column ==9) {

                    // If Pentacel for HIB at 12M, move to dose 4 @15M
                    if (column == 6 && row.genericIndexName == "HIB")
                        column = 7;
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"][columnName[7]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[7]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"][columnName[7]];

                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"][columnName[8]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[8]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"][columnName[8]];

                    row = this.state.v.get("DTAP");
                    this.setScheduleFlag("pentacelCombo4", true);
                    this.setScheduleMap("dtapSliderMax", 1);
                }
            } else if (vaccine.name.toUpperCase() == "VAXELIS") {
                //Column 2 logic
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"][columnName[2]];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"][columnName[2]];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[2]];

                this.setScheduleFlag("pediarixCombo1", false);
                this.setScheduleFlag("pentacelCombo1", false);
                this.setScheduleFlag("vaxelisCombo1", true);

                //Column 3 logic
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"][columnName[3]];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"][columnName[3]];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[3]];

                this.setScheduleFlag("pediarixCombo2", false);
                this.setScheduleFlag("pentacelCombo2", false);
                this.setScheduleFlag("vaxelisCombo2", true);

                //Column 3 and slider logic
                for (let x = 4 ; x <= 8 ; x++) {
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"][columnName[x]];
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[x]];
                }
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"][columnName[4]];

                row = this.state.v.get("HEPB");
                this.setScheduleFlag("pediarixCombo3", false);
                this.setScheduleFlag("pentacelCombo3", false);
                this.setScheduleFlag("vaxelisCombo3", true);

                row = this.state.v.get("HEPB");
                this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[2]] = vaccine.name.toUpperCase();
                this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[3]] = vaccine.name.toUpperCase();
                this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[4]] = vaccine.name.toUpperCase();

                column=4; //Put in 6M always
            } else if (vaccine.name.toUpperCase() == "PROQUAD") {
                if (column == 6 || column == 7) {
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["VAR"][columnName[6]];
                    row = this.state.v.get("MMR");
                    this.setScheduleFlag("proQuadCombo1", true);
                }
                else if (column == 11) {
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["VAR"][columnName[11]];
                    row = this.state.v.get("MMR");
                    this.setScheduleFlag("proQuadCombo2", true);
                }
            } else if (vaccine.name.toUpperCase() == "QUADRACEL") {
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[11]];
                row = this.state.v.get("DTAP");
                this.setScheduleFlag("quadracelCombo", true);
            } else if (vaccine.name.toUpperCase() == "KINRIX") {
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"][columnName[11]];
                row = this.state.v.get("DTAP");
                this.setScheduleFlag("kinrixCombo", true);
            } else if (vaccine.name.toUpperCase() == "ROTARIX") {
                if (column == 2)
                    this.setScheduleFlag("rotarix1", true);
                else if (column == 3)
                    this.setScheduleFlag("rotarix2", true);
                if (this.getScheduleFlag("rotarix1") && this.getScheduleFlag("rotarix2")) {
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["RV"][columnName[4]];
                }
            } else if (vaccine.name.toUpperCase() == "ROTATEQ") {
                if (column == 2)
                    this.setScheduleFlag("rotarix1", false);
                else if (column == 3)
                    this.setScheduleFlag("rotarix2", false);
            } else if (vaccine.name.toUpperCase() == "MENQUADFI") {
                if (column == 13) {
                    this.setScheduleFlag("menquadfi1", true);
                    delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["MENACWY"]["16Y"];
                }
                else if (column == 15)
                    this.setScheduleFlag("menquadfi2", true);
            } else if (row.genericIndexName === "HEPA" && column == 6) {
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPA"][columnName[10]];
                this.setScheduleMap("hepADose2SliderColumn", 8);
            } else if (row.genericIndexName === "HEPA" && column == 7) {
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPA"][columnName[8]];
                this.setScheduleMap("hepADose2SliderColumn", 9);
            } else if (row.genericIndexName === "HEPA" && column >= 8 && column <= 10) {
                //For second dose of HEPA, if Havrix is selected set the slider max to 1, otherwise 2
                let isHavrix = vaccine != null && vaccine.name.toUpperCase() === "HAVRIX";
                this.setScheduleMap("hepADose2SliderMax", isHavrix ? 1 : 2);
                /*
                if (isHavrix && column === 10) {
                    console.log("******Setting column to 9");
                    column = 9;
                }
                 */
            } else if (row.genericIndexName === "LAIV") {
                //If IIV selection made in the same column, set flag to show flu popup
                showFluWarning = !isDrag && this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IIV"][columnName[column]] != null;
            } else if (row.genericIndexName === "IIV") {
                if (vaccine == null || vaccine.name.toUpperCase() === "FLUZONE QUADRIVALENT" || vaccine.name.toUpperCase() === "FLULAVAL QUADRIVALENT" || vaccine.name.toUpperCase() === "FLUARIX QUADRIVALENT" || vaccine.name.toUpperCase() === "AFLURIA QUADRIVALENT") {
                    this.setScheduleMap("iivSliderColumn", 4);
                    this.setScheduleMap("iivSliderMax", 12);
                    //If clear, set it to the the start of the range
                    if (vaccine == null)
                        column = 4;
                }
                else if (vaccine.name.toUpperCase() === "FLUCELVAX QUADRIVALENT") {
                    this.setScheduleMap("iivSliderColumn", 10);
                    this.setScheduleMap("iivSliderMax", 6);
                    //If selected column is out of range, set it to the the start of the range
                    if (column < 10)
                        column = 10;
                }
                //If LAIV selection made in the same column, set flag to show flu popup
                showFluWarning = !isDrag && this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["LAIV"][columnName[column]] != null;
            } else if (row.genericIndexName === "HIB") {
                if (column == 6 || column == 7 || column == 8) {
                    if (vaccine == null || vaccine.name.toUpperCase() === "PEDVAXHIB") {
                        this.setScheduleMap("hibSliderColumn", 6);
                        if (column > 7)
                            column = 6;
                    } else if (vaccine.name.toUpperCase() === "ACTHIB" || vaccine.name.toUpperCase() === "HIBERIX") {
                        this.setScheduleMap("hibSliderColumn", 7);
                       if (column == 6)
                            column = 7;
                    }
                }
            } else if (row.genericIndexName === "DTAP" && column == 7) {
                if (vaccine == null)
                    this.setScheduleMap("dtapSliderMax", 1);
                else if (vaccine.name.toUpperCase() === "DAPTACEL" || vaccine.name.toUpperCase() === "INFANRIX")
                    this.setScheduleMap("dtapSliderMax", 2);
                else
                    this.setScheduleMap("dtapSliderMax", 1);
            }

            if (showFluWarning) {
                this.setState({
                    fluWarningDialog: true
                })
            }

            console.log("Updating selections, adding " + vaccine.name + " in column " + columnName[column] + " for " + row.genericIndexName);

            this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"][row.genericIndexName][columnName[column]] = vaccine.name.toUpperCase();

        }
        this.forceUpdate();
    };

    clearCombo = (vaccine) => {
        if (vaccine == "PENTACEL") {
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["2M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["2M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"]["2M"];

            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["4M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["4M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"]["4M"];

            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["6M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["6M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"]["6M"];

            /*
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["15M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["15M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"]["15M"];

            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["18M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["18M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"]["18M"];
             */
        } else if (vaccine == "PEDIARIX") {
            if (this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["2M"] === "PEDIARIX")
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["2M"];

            if (this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["4M"] === "PEDIARIX")
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["4M"];

            if (this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["6M"] === "PEDIARIX")
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["6M"];

//            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["1M"];

//            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["2M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["2M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["2M"];

            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["4M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["4M"];

//            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["6M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["6M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["6M"];

            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["9M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["12M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["15M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["18M"];
        } else if (vaccine == "VAXELIS") {
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["2M"];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["2M"];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"]["2M"];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["2M"];

                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["4M"];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["4M"];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"]["4M"];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["4M"];

                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["6M"];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["6M"];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HIB"]["6M"];
                delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["HEPB"]["6M"];
        } else if (vaccine == "PROQUAD") {
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["MMR"]["12M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["MMR"]["15M"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["MMR"]["4-6Y"];
        } else if (vaccine == "QUADRACEL" || vaccine == "KINRIX") {
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["DTAP"]["4-6Y"];
            delete this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"]["IPV"]["4-6Y"];

        }
    }

    comboQuickSelect = (vaccine) => {

        console.log("Quick select for " + vaccine + " selected");

        if (vaccine == "PEDIARIX") {

            this.clearCombo("PENTACEL");
            this.clearCombo("VAXELIS");

            this.setScheduleFlag("pediarixCombo1",true);
            this.setScheduleFlag("pediarixCombo2",true);
            this.setScheduleFlag("pediarixCombo3",true);
            this.setScheduleFlag("pentacelCombo1",false);
            this.setScheduleFlag("pentacelCombo2",false);
            this.setScheduleFlag("pentacelCombo3",false);
            this.setScheduleFlag("vaxelisCombo1",false);
            this.setScheduleFlag("vaxelisCombo2",false);
            this.setScheduleFlag("vaxelisCombo3",false);

            //            this.setScheduleFlag("pentacelCombo4",false);

            this.setVaccineSelection(this.state.v.get("PEDIARIX"), this.state.v.get("HEPB"), 2, false);
            this.setVaccineSelection(this.state.v.get("PEDIARIX"), this.state.v.get("HEPB"), 3, false);
            this.setVaccineSelection(this.state.v.get("PEDIARIX"), this.state.v.get("HEPB"), 4, false);

        } else if (vaccine == "VAXELIS") {

            this.clearCombo("PENTACEL");
            this.clearCombo("PEDIARIX");

            this.setScheduleFlag("vaxelisCombo1",true);
            this.setScheduleFlag("vaxelisCombo2",true);
            this.setScheduleFlag("vaxelisCombo3",true);
            this.setScheduleFlag("pediarixCombo1",false);
            this.setScheduleFlag("pediarixCombo2",false);
            this.setScheduleFlag("pediarixCombo3",false);
            this.setScheduleFlag("pentacelCombo1",false);
            this.setScheduleFlag("pentacelCombo2",false);
            this.setScheduleFlag("pentacelCombo3",false);

            this.setVaccineSelection(this.state.v.get("VAXELIS"), this.state.v.get("HEPB"), 2, false);
            this.setVaccineSelection(this.state.v.get("VAXELIS"), this.state.v.get("HEPB"), 3, false);
            this.setVaccineSelection(this.state.v.get("VAXELIS"), this.state.v.get("HEPB"), 4, false);


        } else if (vaccine == "PENTACEL") {
            this.clearCombo("PEDIARIX");
            this.clearCombo("VAXELIS");

            this.setScheduleFlag("pentacelCombo1",true);
            this.setScheduleFlag("pentacelCombo2",true);
            this.setScheduleFlag("pentacelCombo3",true);
            this.setScheduleFlag("pentacelCombo4",true);
            this.setScheduleFlag("pediarixCombo1",false);
            this.setScheduleFlag("pediarixCombo2",false);
            this.setScheduleFlag("pediarixCombo3",false);
            this.setScheduleFlag("vaxelisCombo1",false);
            this.setScheduleFlag("vaxelisCombo2",false);
            this.setScheduleFlag("vaxelisCombo3",false);

            this.setVaccineSelection(this.state.v.get("PENTACEL"), this.state.v.get("DTAP"), 2, false);
            this.setVaccineSelection(this.state.v.get("PENTACEL"), this.state.v.get("DTAP"), 3, false);
            this.setVaccineSelection(this.state.v.get("PENTACEL"), this.state.v.get("DTAP"), 4, false);
            this.setVaccineSelection(this.state.v.get("PENTACEL"), this.state.v.get("DTAP"), 7, false);

            this.setScheduleMap("dtapSliderMax", 1);

        } else if (vaccine == "PROQUAD") {
            this.clearCombo("PROQUAD");

            this.setScheduleFlag("proQuadCombo1", true);
            this.setScheduleFlag("proQuadCombo2", true);

            this.setVaccineSelection(this.state.v.get("PROQUAD"), this.state.v.get("MMR"), 6, false);
            this.setVaccineSelection(this.state.v.get("PROQUAD"), this.state.v.get("MMR"), 11, false);
        } else if (vaccine == "QUADRACEL") {
            this.clearCombo("QUADRACEL");
            this.setScheduleFlag("quadracelCombo", true);
            this.setScheduleFlag("kinrixCombo", false);
            this.setVaccineSelection(this.state.v.get("QUADRACEL"), this.state.v.get("DTAP"), 11, false);
        } else if (vaccine == "KINRIX") {
            this.clearCombo("KINRIX");
            this.setScheduleFlag("kinrixCombo", true);
            this.setScheduleFlag("quadracelCombo", false);
            this.setVaccineSelection(this.state.v.get("KINRIX"), this.state.v.get("DTAP"), 11, false);
       }

        this.forceUpdate();

    }

    getFooterVaccines = () => {

            let footerVaccines = null;

            if (this.state.menuVisible) {
                footerVaccines = [this.state.v.get("QUADRACEL"), this.state.v.get("PENTACEL"), this.state.v.get("PEDIARIX"), this.state.v.get("PROQUAD"), this.state.v.get("KINRIX"), this.state.v.get("VAXELIS")];
            } else {
                let cr = this.state.currentRow;

                if (cr != null && !this.state.isTutorial) {
                    if (cr.name == this.state.v.get("HEPB").name)
                        footerVaccines = [this.state.v.get("ENGERIX-B"), this.state.v.get("RECOMBIVAX"), this.state.v.get("PEDIARIX"), this.state.v.get("VAXELIS")];
                    else if (cr.name == this.state.v.get("DTAP").name)
                        footerVaccines = [this.state.v.get("DAPTACEL"), this.state.v.get("PENTACEL"), this.state.v.get("QUADRACEL"), this.state.v.get("INFANRIX"), this.state.v.get("PEDIARIX"), this.state.v.get("KINRIX"), this.state.v.get("VAXELIS")];
                    else if (cr.name == this.state.v.get("TDAP").name)
                        footerVaccines = [this.state.v.get("ADACEL"), this.state.v.get("BOOSTRIX")];
                    else if (cr.name == this.state.v.get("IPV").name)
                        footerVaccines = [this.state.v.get("IPOL"), this.state.v.get("PENTACEL"), this.state.v.get("QUADRACEL"), this.state.v.get("PEDIARIX"), this.state.v.get("KINRIX"), this.state.v.get("VAXELIS")];
                    else if (cr.name == this.state.v.get("HIB").name)
                        footerVaccines = [this.state.v.get("ACTHIB"), this.state.v.get("PENTACEL"), this.state.v.get("HIBERIX"), this.state.v.get("PEDVAXHIB"), this.state.v.get("VAXELIS")];
                    else if (cr.name == this.state.v.get("RV").name)
                        footerVaccines = [this.state.v.get("ROTARIX"), this.state.v.get("ROTATEQ")];
                    else if (cr.name == this.state.v.get("PCV").name)
                        footerVaccines = [this.state.v.get("PREVNAR 13")];
                    else if (cr.name == this.state.v.get("IIV").name)
                        footerVaccines = [this.state.v.get("FLUZONE QUADRIVALENT"), this.state.v.get("FLULAVAL QUADRIVALENT"), this.state.v.get("AFLURIA QUADRIVALENT"), this.state.v.get("FLUARIX QUADRIVALENT"), this.state.v.get("FLUCELVAX QUADRIVALENT")];
                    else if (cr.name == this.state.v.get("LAIV").name)
                        footerVaccines = [this.state.v.get("FLUMIST QUADRIVALENT")];
                    else if (cr.name == this.state.v.get("MMR").name)
                        footerVaccines = [this.state.v.get("PROQUAD"), this.state.v.get("M-M-R II")];
                    else if (cr.name == this.state.v.get("VAR").name)
                        footerVaccines = [this.state.v.get("VARIVAX"), this.state.v.get("PROQUAD")];
                    else if (cr.name == this.state.v.get("HEPA").name)
                        footerVaccines = [this.state.v.get("HAVRIX"), this.state.v.get("VAQTA")];
                    else if (cr.name == this.state.v.get("HPV").name)
                        footerVaccines = [this.state.v.get("GARDASIL 9")];
                    else if (cr.name == this.state.v.get("MEN").name)
                        footerVaccines = [this.state.v.get("MENACTRA"), this.state.v.get("MENQUADFI"), this.state.v.get("MENVEO")];
                }
            }

            return footerVaccines;

    };

    showMenu = (flag) => {
        this.setState({
            menuVisible: flag,
            oldCurrentRow: flag ? this.state.currentRow : null,
            currentRow: flag ? null : this.state.oldCurrentRow
        });
    };

    showSanofiOnly = (flag) => {
        this.setState({sanofiOnly: flag});
    };

    generatePDF = (preview, showSanofiLogo, highlightPractice) => {
        console.log("Generate PDF");

        //TODO: Shouldn't modify the state here
        console.log("logo=" + showSanofiLogo + ", practice=" + highlightPractice + " email=" + this.state.selections.toEmail);
        this.state.selections["preview"] = preview;
        this.state.selections["logo"] = showSanofiLogo;
        this.state.selections["practice"] = highlightPractice;

        if (preview) {

            ReactGA.pageview("/preview");

            var post = true;

            if (!post)
                window.open("https://www.spimmunizationscheduler.com/sanofi2_API/preview_pdf.php?json_input=" + JSON.stringify(this.state.selections), "_blank");
            else {

                //Use prod URL only if spimmunization in URL, so schedulerqa and localhost will call QA
                let url = window.location.href.indexOf("spimmunization") > 0 ?
                    "https://www.spimmunizationscheduler.com/sanofi2_API/preview_pdf.php" //PROD URL
                    :
                    "http://www.schedulerqa.com/sanofi2_API/preview_pdf.php" //QA URL

                var form = document.createElement("form");
                form.setAttribute("method", "post");
                form.setAttribute("action", url);
                form.setAttribute("target", "_blank");

                var input = document.createElement('input');
                input.type = 'hidden';
                input.name = "json_input";
                input.value = JSON.stringify(this.state.selections);
                form.appendChild(input);

                document.body.appendChild(form);
                form.submit();
                document.body.removeChild(form);
            }
        } else {
            ReactGA.pageview("/submit");

            //Use prod URL only if spimmunization in URL, so schedulerqa and localhost will call QA
            let url = window.location.href.indexOf("spimmunization") > 0 ?
                "https://www.spimmunizationscheduler.com/sanofi2_API/email_pdf.php"  //PROD URL
                :
                "http://www.schedulerqa.com/sanofi2_API/email_pdf.php";  //QA URL

            fetch(url, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.selections)
            })
                .then( response => response.json() )
                .then( response => {
                    console.log(response.status);
                    console.log(response);
                    if(response.status===1) {
                        this.setState({
                            isLoaded: true,
                            loadError: false
                        });
                    } else {
                        this.setState({
                            isLoaded: true,
                            loadError: true
                        });
                    }
                })
        }
    };

    handleLoad = () => {
      this.setState({
          isLoaded: false
      })
    };

    clearSchedule = () => {
        console.log("Clear schedule");
        this.setState({"keyPrefix" : this.state.keyPrefix + 1});
        this.state.selections[this.state.sanofiOnly ? "SANOFI" : "MY"] = { HEPB: {}, DTAP: {}, TDAP: {}, IPV: {}, HIB: {}, RV: {}, PCV: {}, IIV: {}, LAIV: {}, MMR: {}, VAR: {}, HEPA: {}, HPV: {}, MENACWY: {} };
        this.setDefaultMapValues(this.state.scheduleMaps[this.state.sanofiOnly ? "SANOFI" : "MY"]);
        this.state.scheduleFlags[this.state.sanofiOnly ? "SANOFI" : "MY"] = new Array();
    };

    handleFluWarningClose = () => {
        this.setState({
           fluWarningDialog: false
        });
    };

    render() {

        //console.log("Current Row = " + (cr == null ? "null" : cr.name));

        //Sanofi Drugs should be first in the footer: ACTHIB, ADACEL, DAPTACEL, FLUZONE, IPOL, MENACTRA, PENTACEL, QUADRACEL

        let isLoaded = this.state.isLoaded;
        let fluWarningDialog = this.state.fluWarningDialog;

        return(
            <div className="App">

                <div className="container-fluid">
                    <Header key={isLoaded} burgerIcon={true} showMenu={this.showMenu} showSanofiOnly={this.showSanofiOnly} showScheduleType={true} sanofiOnly={this.state.sanofiOnly} isTutorial={this.state.isTutorial} comboQuickSelect={this.comboQuickSelect} clearSchedule={this.clearSchedule} generatePDF={this.generatePDF} isLoaded={this.state.isLoaded} handleLoad={this.handleLoad} SchedulerEmail={this.state.selections.toEmail} loadError={this.state.loadError} SanofiLogo={this.state.SanofiLogo} PracticeNameSwitch={this.state.PracticeNameSwitch} />
                    <HeaderNav/>
                    <Dialog
                        open={fluWarningDialog}
                        onClose={this.handleFluWarningClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <h4 id="alert-dialog-title" className="text-center text-danger">Warning!</h4>
                        <div id="alert-dialog-description" className="dialogMargin">
                           <h5>Administering IIV and LAIV at the same dosing schedule goes against CDC Guidelines</h5>
                        </div>
                        <DialogActions>
                            <Button onClick={this.handleFluWarningClose} color="primary" autoFocus>
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <div className="col-lg-8 col-xs-12 wrap" style={{paddingTop:"4px", paddingBottom:"4px", paddingLeft:"2px", paddingRight:"2px"}}>
                        <div className={this.state.isTutorial ? "row" : "displayNone"} style={{verticalAlign: 'top'}}>
                            <div className="col-md-12 col-xs-12">
                                <strong style={{fontSize: 18+"px"}} > Program Overview and Instructions: Immunization Scheduler </strong>
                                <p>Sanofi Pasteur is pleased to provide you with this interactive Immunization Scheduler. It is designed to help
                                    you create customized age-appropriate immunization programs specific to your practice. The Immunization
                                    Scheduler also offers practical information regarding the use of Sanofi Pasteur vaccines to meet
                                    your immunization needs.
                                </p>
                                <p>All company vaccines will be show across the series regardless of the age selected.</p>
                                <p> Please click on each highlighted section to view additional instructions. Click "Next" to continue.</p>
                            </div>
                        </div>
                        <SchedulerTable className={this.state.sanofiOnly ? "displayNone" : ""} keyPrefix={this.state.keyPrefix} sanofiOnly={false} flags={this.state.scheduleFlags["MY"]} map={this.state.scheduleMaps["MY"]} vaccines={this.state.v} currentRow={this.state.currentRow} setCurrentRow={this.setCurrentRow} selections={this.state.selections.MY} setVaccineSelection={this.setVaccineSelection} clearSliderSelection={this.clearSliderSelection} isTutorial={this.state.isTutorial} comboQuickSelect={this.comboQuickSelect}/>
                        <SchedulerTable className={this.state.sanofiOnly ? "" : "displayNone"} keyPrefix={this.state.keyPrefix} sanofiOnly={true} flags={this.state.scheduleFlags["SANOFI"]} map={this.state.scheduleMaps["SANOFI"]} vaccines={this.state.v} currentRow={this.state.currentRow} setCurrentRow={this.setCurrentRow} selections={this.state.selections.SANOFI} setVaccineSelection={this.setVaccineSelection} clearSliderSelection={this.clearSliderSelection} isTutorial={this.state.isTutorial} comboQuickSelect={this.comboQuickSelect}/>
                        <Footer currentRow={this.state.currentRow} vaccines={this.getFooterVaccines()}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Scheduler;