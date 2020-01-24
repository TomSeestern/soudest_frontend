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

export default function IconLabelButtons() {
    const classes = useStyles();

    return (
        <div className="TransportSelectorRoot">
            <IconButton
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                startIcon={<LocalTaxiIcon />}
            >
                <LocalTaxiIcon />
            </IconButton>
            <IconButton
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                startIcon={<DirectionsBusIcon />}
            >
                <DirectionsBusIcon />
            </IconButton>
            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
            <IconButton
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                startIcon={<TrainIcon/>}
            >
                <TrainIcon/>
            </IconButton>
            <IconButton
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                startIcon={<TramIcon />}
            >
                <TramIcon />
            </IconButton>
            <IconButton
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                startIcon={<SubwayIcon />}
            >
                <SubwayIcon />
            </IconButton>
            <IconButton
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                startIcon={<FlightIcon />}
            >
                <FlightIcon />
            </IconButton>
            <IconButton
                variant="contained"
                color="primary"
                size="medium"
                disabled
                className={classes.button}
                startIcon={<DirectionsBoatIcon />}
            >
                <DirectionsBoatIcon/>
            </IconButton>
        </div>
    );
}
