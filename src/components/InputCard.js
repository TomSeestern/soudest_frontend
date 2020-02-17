import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

// observer einbinden
import { observer } from "mobx-react";
// der Store auf den gehört werden soll, muss eingebunden werden
import routeStore from "../stores/routeStore"

import TransportSelector from './TransportSelector';
import DatesSelector from "./DatesSelector";
import TravelersSelector from "./TravelersSelector";

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const TransportSelectorRef = React.createRef();
    const DatesSelectorRef = React.createRef();
    const TravelersSelectorRef = React.createRef();


    function handleSubmit(){
        let req = {};
        let transState = TransportSelectorRef.current.state;
        req.taxi = transState.taxi;
        req.bus = transState.bus;
        req.train = transState.train;
        req.tram = transState.tram;
        req.subway = transState.subway;
        req.flight = transState.flight;
        req.boat = transState.boat;

        let DateSel = DatesSelectorRef.current.state;
        req.src = DateSel.source;
        req.trgt = DateSel.target;
        req.time = DateSel.time;
        req.date = DateSel.date;

        //let TravSel = TravelersSelectorRef.current.state;
        req.travelerId = 1;

        console.log("INFO: "
            +" Taxi: "+req.taxi
            +" bus: "+req.bus
            +" train: "+req.train
            +" tram: "+req.tram
            +" subway: "+req.subway
            +" flight: "+req.flight
            +" boat: "+req.boat
            +" src: "+req.src
            +" trgt: "+req.trgt
            +" time: "+req.time
            +" date: "+req.date
            +" travelerId: "+req.travelerId
        );

        //Now lets ask the Server what he thinks of our Parameters
        routeStore.fetchRoute(req)
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <TransportSelector ref={TransportSelectorRef}/>
                <DatesSelector ref={DatesSelectorRef}/>
                <TravelersSelector ref={TravelersSelectorRef}/>
            </CardContent>
            <CardActions>
                <Fab variant="extended" onClick={()=>handleSubmit()} >
                    <NavigationIcon className={classes.extendedIcon} />
                    Navigate
                </Fab>
            </CardActions>
        </Card>
    );
}