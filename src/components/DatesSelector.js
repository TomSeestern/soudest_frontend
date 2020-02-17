import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";


class DatesSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state={target:"Wien",source:"Berlin",date:"2017-05-24",time:"07:30"};
    }

    render() {
        return (
            <div className="root">
                <Grid container spacing={3}>
                    <Grid item xs>
                        <TextField
                            id="outlined-helperText"
                            label="Ziel"
                            defaultValue="Wien"
                            helperText="Wo möchtest du heute hin?"
                            variant="outlined"
                            value={this.target}
                            onChange={(event) => this.setState({target: event.target.value})}
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
                            value={this.source}
                            onChange={(event) => this.setState({source: event.target.value})}
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
                            className="textField"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={this.date}
                            onChange={(event) => this.setState({date: event.target.value})}
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
                            className="textField"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            value={this.time}
                            onChange={(event) => this.setState({time: event.target.value})}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default DatesSelector;
