import * as types from './../constants/ActionType';

let defaultState = [
    { to: '/', name: 'Home'} // HomePage (0)
    // ArtistPage (1)
    // AlbumPage (2)
]

const breadcrumb = (state = defaultState, action) =>
{
    let {name, to} = action;
    switch(action.type)
    {
        case types.GO_HOME:
        state = [{ to: '/', name: 'Home'} ];
            return [...state];
        case types.GO_ARTIST:
            console.log(action);
            // Cập nhật cho ArtistPage => Phần tử 1.
            state[1] = {to,name};
            return [...state];
        case types.GO_ALBUM:
            return state;
        default:
            return state;
    }
}
export default breadcrumb;