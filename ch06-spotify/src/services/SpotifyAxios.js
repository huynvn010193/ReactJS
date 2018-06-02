import * as configs from './../constants/Config';
import axios from 'axios';

export default class SpotifyAxios{
    static config = {
        method:'GET',
        headers: {
            'Authorization': 'Bearer ' + configs.API_KEY
        }
    }

    static getArtists(id)
    {
        let url = `${configs.BASE_URL}artists/${id}`;
        return axios.get(url,SpotifyAxios.config).catch(this.handleError);
    }

    static handleError(error)
    {
        console.log(error);
    }
}