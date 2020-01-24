import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import '../css/TransportSelector.css';

import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import TrainIcon from '@material-ui/icons/Train';
import SubwayIcon from '@material-ui/icons/Subway';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import TramIcon from '@material-ui/icons/Tram';
import FlightIcon from '@material-ui/icons/Flight';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

class TravelersSelector extends React.Component{

    constructor(props) {
        super(props);
        //const classes = useStyles();
        this.state = {taxi:true,bus:true,train:true,tram:true,subway:true,flight:true,boat:true}
    }

    render(){
        return (
            <div className="TransportSelectorRoot">
                <IconButton
                    id="taxi"
                    variant="contained"
                    color={this.state.taxi ? 'primary' : "grey"}
                    size="medium"
                    className="TransportButton"
                    onClick={event => this.setState({ taxi: !this.state.taxi })}
                    startIcon={<LocalTaxiIcon />}
                >
                    <LocalTaxiIcon />
                </IconButton>
                <IconButton
                    id="bus"
                    variant="contained"
                    color={this.state.bus ? 'primary' : "grey"}
                    onClick={event => this.setState({ bus: !this.state.bus })}
                    color="primary"
                    size="medium"
                    className="TransportButton"

                    startIcon={<DirectionsBusIcon />}
                >
                    <DirectionsBusIcon />
                </IconButton>
                {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
                <IconButton
                    id="train"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="TransportButton"
                    color={this.state.train ? 'primary' : "grey"}
                    onClick={event => this.setState({ train: !this.state.train })}
                    startIcon={<TrainIcon/>}
                >
                    <TrainIcon/>
                </IconButton>
                <IconButton
                    id="tram"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="TransportButton"
                    color={this.state.tram ? 'primary' : "grey"}
                    onClick={event => this.setState({ tram: !this.state.tram })}
                    startIcon={<TramIcon />}
                >
                    <TramIcon />
                </IconButton>
                <IconButton
                    id="subway"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="TransportButton"
                    color={this.state.subway ? 'primary' : "grey"}
                    onClick={event => this.setState({ subway: !this.state.subway })}
                    startIcon={<SubwayIcon />}
                >
                    <SubwayIcon />
                </IconButton>
                <IconButton
                    id="flight"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="TransportButton"
                    color={this.state.flight ? 'primary' : "grey"}
                    onClick={event => this.setState({ flight: !this.state.flight })}
                    startIcon={<FlightIcon />}
                >
                    <FlightIcon />
                </IconButton>
                <IconButton
                    id="boat"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className="TransportButton"
                    color={this.state.boat ? 'primary' : "grey"}
                    onClick={event => this.setState({ boat: !this.state.boat })}
                    startIcon={<DirectionsBoatIcon />}
                >
                    <DirectionsBoatIcon/>
                </IconButton>
            </div>
        )
    }
}
export default TravelersSelector;