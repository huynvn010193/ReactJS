const defaultState = {
	orderBy : 'level',
	orderDir : 'desc'
}

const sort = (state = defaultState,action) => {
	// Viết tắt: action.orderBy,action.orderDir => {orderBy, orderDir} = action;
	// Cách viết thay đổi vị trí nhớ
	let {orderBy,orderDir} = action;
	switch(action.type)
	{
		case 'SORT_ITEM':
			return {orderBy,orderDir};
		default:
			return state;
	}
}

export default sort;