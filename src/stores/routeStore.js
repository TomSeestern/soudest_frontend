import { observable, action } from 'mobx';

class RouteStore {
    @observable selectedRoute = {};
    @action selectRoute(Route) {

        this.selectedRoute = Route;
    }

    @observable RouteFromServer = '';
    @observable error = '';
    @action fetchRoute(req) {
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
        return fetch('http://localhost:3000/route', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                taxi : req.taxi,
                bus : req.taxi,
                train : req.train,
                tram : req.tram,
                subway : req.subway,
                flight : req.flight,
                boat : req.boat,
                src : req.src,
                trgt : req.trgt,
                time : req.time,
                date : req.date,
                travelerId : req.travelerId
            })
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        this.RouteFromServer = json.Trip;
                       //console.log("INFO: "+" Got a valid Response from Server:\n"+ JSON.stringify(json))
                        console.log("INFO: "+" Got a valid Response from Server:\n"+ JSON.stringify(this.RouteFromServer))
                    });

                } else {
                    this.error = "Error on fetching";
                }
            })
            .catch(
                error => {
                    this.error = "Error on fetching";
                    throw error;
                }
            );
    }
}

const store = new RouteStore();

export default store;