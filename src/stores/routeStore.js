import { observable, action } from 'mobx';
import config from "../../config/main.config";

class RouteStore {
    @observable selectedRoute = {};
    @action selectRoute(Route) {

        this.selectedRoute = Route;
    }

    @observable RouteFromServer = '';
    @observable error = '';
    @action fetchRoute() {
        return fetch('http://localhost:3000/Route', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        this.RouteFromServer = json.Route;
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

    @action addNewRoute(newRoute) {
        return fetch('http://localhost:3000/Route/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                name : newRoute.name,
                type : newRoute.type,
                powerPs : newRoute.powerPs,
                fin : newRoute.fin
            })
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                response.json().then(json => {
                    console.log(json);
                    this.fetchRoute();
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

    @action deleteRoute(RouteId) {
        return fetch('http://localhost:3000/Route/delete/' + RouteId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        console.log("Route deleted");
                        this.fetchRoute();
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