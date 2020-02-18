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

// for The Modal:
import RouteOverviewTable from './RouteOverviewTable';
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";

import util from 'util';

export default @observer class InputCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open : false};

        this.TransportSelectorRef = React.createRef();
        this.DatesSelectorRef = React.createRef();
        this.TravelersSelectorRef = React.createRef();
        this.RouteOverviewTableRef = React.createRef();
    }

     handleSubmit(){
        let req = {};
        let transState = this.TransportSelectorRef.current.state;
        req.taxi = transState.taxi;
        req.bus = transState.bus;
        req.train = transState.train;
        req.tram = transState.tram;
        req.subway = transState.subway;
        req.flight = transState.flight;
        req.boat = transState.boat;

        let DateSel = this.DatesSelectorRef.current.state;
        req.src = DateSel.source;
        req.trgt = DateSel.target;
        req.time = DateSel.time;
        req.date = DateSel.date;

        //let TravSel = TravelersSelectorRef.current.state;
        req.travelerId = 1;

        //Now lets ask the Server what he thinks of our Parameters
        routeStore.fetchRoute(req).then(()=> {
                this.setState({open: true});
            }
        );


    }
    render() {
        let {RouteFromServer} = routeStore;
        let routesArray=[];
        if(typeof RouteFromServer != 'undefined'){
            routesArray = [...RouteFromServer];
        }else{
        }
        //console.log("INFO: "+" RoutesArray: "+ util.inspect(RouteFromServer, false, null, true /* enable colors */));
        return (
            <Card className="card">
                <CardContent>
                    <TransportSelector ref={this.TransportSelectorRef}/>
                    <DatesSelector ref={this.DatesSelectorRef}/>
                    <TravelersSelector ref={this.TravelersSelectorRef}/>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className="modal"
                        open={this.state.open}
                        onClose={()=>{this.setState({open:false})}}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={this.state.open}>
                            <div className="modalPaper">
                                <RouteOverviewTable routes={routesArray} ref={this.RouteOverviewTableRef}/>
                            </div>
                        </Fade>
                    </Modal>
                </CardContent>
                <CardActions>
                    <Fab variant="extended" onClick={()=>this.handleSubmit()} >
                        <NavigationIcon className="extendedIcon" />
                        Navigate
                    </Fab>
                </CardActions>
            </Card>
        );

    }
}