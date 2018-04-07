import * as types from './../constants/ActionType'

let defaultState = {id:'',name:'',level:0};

const itemSelected = (state = defaultState,action) => {
	let id = null;
	switch(action.type)
	{
		// Nếu mà đúng là chính nó thì trả về cái item được chọn
		case types.SELECT_ITEM:
			return action.item;
		// Nếu là UNSELECT_ITEM thì trả về state là 1 đối tượng có id , name là rỗng và level là 0
		case types.UNSELECT_ITEM:
			return {id:'',name:'',level:0};
		default:
			return state;
	}
}

export default itemSelected;