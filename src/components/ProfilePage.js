// SOURCE: https://github.com/devias-io/react-material-dashboard
import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';

import AccountProfile from './AccountProfile';
import AccountDetails from './AccountDetails';
// observer einbinden
import {observer} from "mobx-react";
// der Store auf den gehört werden soll, muss eingebunden werden
import routeStore from "../stores/routeStore"
import profileStore from "../stores/profileStore";
import Cookies from "js-cookie";
import util from "util";

const useStyles = makeStyles(theme => ({
    root: {
        padding: 16
    }
}));

export default @observer class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded:false
        }
    };

    componentDidMount() {
        let userId = JSON.parse(this.getJwt()).id;
        profileStore.fetchProfile(userId).then(r => {
            this.setState({loaded:true});
            console.log("Set State: "+ this.state.loaded);
    }
        )
        console.log("In between: "+typeof profileStore.ProfileFromServer);

    }

    getJwt = () => {
        let token = Cookies.get('jwt');
        console.log("INFO: " + "token" + token);
        if (typeof token !== 'undefined') {
            var base64Url = token.split(".")[1];
            var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            var jsonPayload = decodeURIComponent(
                atob(base64)
                    .split("")
                    .map(function (c) {
                        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                    })
                    .join("")
            );
            console.log("INFO: " + "got Jwt: " + jsonPayload);
            return jsonPayload

        } else {
            console.log("INFO: " + "No JWT found");
            return null;
        }
    };

    render() {

        if (this.state.loaded===false){
            return(
                <text>Loading...</text>
            );
        }else{
            let profileFromServer = profileStore.ProfileFromServer;
            return (

                <div className={useStyles.root}>
                    <Grid
                        container
                        spacing={4}
                    >
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xl={4}
                            xs={12}
                        >
                            <AccountProfile user={profileFromServer}/>
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={6}
                            xl={8}
                            xs={12}
                        >
                            <AccountDetails user={profileFromServer}/>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
};