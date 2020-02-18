// SOURCE: https://github.com/devias-io/react-material-dashboard
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Avatar,
    Typography,
    Divider,
    Button,
    LinearProgress
} from '@material-ui/core';
// observer einbinden
import { observer } from "mobx-react";
// der Store auf den gehört werden soll, muss eingebunden werden
import profileStore from "../stores/profileStore"
import Cookies from "js-cookie";
import util from "util";

const useStyles = makeStyles(theme => ({
    root: {},
    details: {
        display: 'flex'
    },
    avatar: {
        marginLeft: 'auto',
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0
    },
    progress: {
        marginTop: 0
    },
    uploadButton: {
        marginRight: 0
    }
}));

export default class AccountProfile extends React.Component {
    constructor(props){
        super(props);
        const { className, ...rest } = props;
    };



    render() {

        console.log("INFO: " + " props in Account Profile: " + util.inspect( this.props.user.firstName, false, null, true));

        return (
            <Card
                //{...rest}
                //className={clsx(classes.root, className)}
            >
                <CardContent>
                    <div className={useStyles.details}>
                        <div>
                            <Typography
                                gutterBottom
                                variant="h2"
                            >
                                {this.props.user.firstName}
                            </Typography>
                            <Typography
                                className={useStyles.locationText}
                                color="textSecondary"
                                variant="body1"
                            >
                                {this.props.user.city}, {this.props.user.country}
                            </Typography>
                            <Typography
                                className={useStyles.dateText}
                                color="textSecondary"
                                variant="body1"
                            >
                                {moment().format('hh:mm A')} ({this.props.user.timezone})
                            </Typography>
                        </div>
                        <Avatar
                            className={useStyles.avatar}
                            src={this.props.user.avatar}
                        />
                    </div>
                    <div className={useStyles.progress}>
                        <Typography variant="body1">Profile Completeness: 70%</Typography>
                        <LinearProgress
                            value={70}
                            variant="determinate"
                        />
                    </div>
                </CardContent>
                <Divider/>
                <CardActions>
                    <Button
                        className={useStyles.uploadButton}
                        color="primary"
                        variant="text"
                    >
                        Upload picture
                    </Button>
                    <Button variant="text">Remove picture</Button>
                </CardActions>
            </Card>
        );
    }
};


AccountProfile.propTypes = {
    className: PropTypes.string
};
