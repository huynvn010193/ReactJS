import * as configs from './../constants/Config';
import axios from 'axios';
const queryString = require('query-string');

export default class SpotifyAxios{
    static config = {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + configs.API_KEY,
        }
    }

    static getArtists(id)
    {
        let url = `${configs.BASE_URL}/artists/${id}`;
        axios.get(url,SpotifyAxios.config)
            .then((response) => {
                console.log(response);
            })
            .catch(this.handleError);

        // return fetch(url,SpotifyFetch.config)
        //     .then((response) => response.json());
    }

    static handleError(error)
    {
        console.log(error);
    }
}