import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';


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

    return (
        <Card className={classes.card}>
            <CardContent>
                <TransportSelector/>
                <DatesSelector/>
                <TravelersSelector/>
            </CardContent>
            <CardActions>
                <Fab variant="extended">
                    <NavigationIcon className={classes.extendedIcon} />
                    Navigate
                </Fab>
            </CardActions>
        </Card>
    );
}