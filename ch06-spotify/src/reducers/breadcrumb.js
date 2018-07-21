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
            // Cập nhật cho ArtistPage => Phần tử 1.
            state[1] = { to,name };
            // Nếu lớn hơn 3 thì bỏ phần tử cuối cùng đi. 
            //(0 là ptu dau => -1 là pt cuối),=> xóa 1 ptu tính từ ptu cuoi
            if(state.length > 2) {
                state.splice(-1,1);
            }
            return [...state];
        case types.GO_ALBUM:
            state[2] = { to,name };
            return [...state];
        default:
            return state;
    }
}
export default breadcrumb;