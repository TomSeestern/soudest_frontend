import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <TextField
                        id="outlined-helperText"
                        label="Ziel"
                        defaultValue="Wien"
                        helperText="Wo möchtest du heute hin?"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <TextField
                        id="outlined-helperText"
                        label="Start"
                        defaultValue="Berlin"
                        helperText="Wo Startet dein Abenteuer?"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <TextField
                        id="date"
                        label="Reisedatum"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <TextField
                        id="time"
                        label="Ankunftszeit"
                        type="time"
                        defaultValue="07:30"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
