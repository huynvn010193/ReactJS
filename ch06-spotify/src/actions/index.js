import * as types from './../constants/ActionType';

export const actSearch = (query) =>
{
    return {
        types: types.SEARCH_ARTIST,
        query
    }
}

export const actChangeQuery = (query) =>
{
    return {
        type : types.CHANGE_QUERY,
        query
    }
}

export const artGoArtist = (name,to) => {
    return{
        type: types.GO_ARTIST,
        name,
        to
    }
}
