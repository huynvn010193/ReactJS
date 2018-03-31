let defaultState = [
	{id:"A1", name:"Coding",level:1}
];
let tasks = JSON.parse(localStorage.getItem('task'));
defaultState = (tasks !== null && tasks.length > 0 ) ? tasks : defaultState;

const items = (state = defaultState,action) => {
	switch(action.type)
	{
		case "LIST_ITEM":
			return state;
		default:
			return state;
	}
}

export default items;