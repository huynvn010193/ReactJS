import axios from 'axios';

export default class AxiosAPI{
    static getAllItemsapi()
    {
        let url = `http://localhost:8080/todos`;
        return axios.get(url);
    }

    static handleError(error)
    {
        console.log(error);
    }
}