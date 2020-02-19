// SOURCE: https://github.com/devias-io/react-material-dashboard
import React, {useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Grid,
    Button,
    TextField
} from '@material-ui/core';
import util from "util";
import profileStore from "../stores/profileStore";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

const useStyles = makeStyles(() => ({
    root: {}
}));


class AccountDetails extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            redirect: null,
            id: this.props.user.id,
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            email: this.props.user.email
        };

        this.handleChange = event => {
            this.setState({[event.target.id]: event.target.value});
        };


        this.states = [
            {
                value: 'alabama',
                label: 'Alabama'
            },
            {
                value: 'new-york',
                label: 'New York'
            },
            {
                value: 'san-francisco',
                label: 'San Francisco'
            }
        ];
    }

    saveChanges(event) {

    }

    handleSubmit = event => {
        console.log("Saving Updated Profile");
        profileStore.modifyProfile(this.state);
        this.props.history.go(0);
    };
    handleDelete = event => {
        console.log("Deleting Profile");
        profileStore.deleteProfile(this.state);
        Cookies.remove('jwt');
        this.props.history.push({pathname: "/SignIn", state: {logout: true}});
    };

    render() {
        return (
            <Card>
                <form
                    autoComplete="off"
                    noValidate>
                    <CardHeader
                        subheader="The information can be edited"
                        title="Profile"
                    />
                    <Divider/>
                    <CardContent>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    id='firstName'
                                    helperText="Please specify the first name"
                                    label="First name"
                                    margin="dense"
                                    name="firstName"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.firstName}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Last name"
                                    margin="dense"
                                    name="lastName"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.lastName}
                                    id='lastName'
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    margin="dense"
                                    name="email"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.email}
                                    id='email'
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    margin="dense"
                                    name="phone"
                                    onChange={this.handleChange}
                                    type="number"
                                    value={this.state.phone}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Select State"
                                    margin="dense"
                                    name="state"
                                    onChange={this.handleChange}
                                    required
                                    select
                                    // eslint-disable-next-line react/jsx-sort-props
                                    SelectProps={{native: true}}
                                    value={this.state.state}
                                    variant="outlined"
                                >
                                    {this.states.map(option => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Country"
                                    margin="dense"
                                    name="country"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.country}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider/>
                    <CardActions>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.handleSubmit}
                        >
                            Save details
                        </Button>
                        <Button
                            color="default"
                            variant="contained"
                            onClick={this.handleDelete}
                        >
                            DELETE ACCOUNT
                        </Button>
                    </CardActions>
                </form>
            </Card>
        );
    }
};
export default withRouter(AccountDetails);
AccountDetails.propTypes = {
    className: PropTypes.string
};