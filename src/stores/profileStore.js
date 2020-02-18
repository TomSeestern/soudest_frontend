import { observable, action } from 'mobx';
import util from "util";

class ProfileStore {
    @observable selectedProfile = {};
    @action selectProfile(Profile) {

        this.selectedProfile = Profile;
    }

    @observable ProfileFromServer = '';
    @observable error = '';
    @action async fetchProfile(req) {
        console.log("INFO: " + "Feting Profile with ID: " + req);
         await fetch('http://localhost:3000/users/' + req, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
         }
         ).then(async response => {
             console.log("INFO: " + " Got a Response from Server:\n");
                if (response.status >= 200 && response.status < 300) {
                        this.ProfileFromServer = await response.json();
                        //console.log("INFO: "+" Got a valid Response from Server:\n"+ JSON.stringify(json))
                        console.log("INFO: " + " Got a valid Response from Server:\n");
                        return true

                } else {
                    this.error = "Error on fetching";
                    console.log("INFO: " + " Got a INVALID Response from Server:\n");
                    return false;
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

const store = new ProfileStore();

export default store;