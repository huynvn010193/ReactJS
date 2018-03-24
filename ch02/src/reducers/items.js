const defaultState = [
	{id:"A1",name:"Coding",level:0},
	{id:"A2",name:"Football",level:1},
	{id:"A3",name:"Watch TV",level:2}
];

const items = (state = defaultState,action) => {
	switch(action.type)
	{
		case 'CLOSE_FORM':
			//console.log("CLOSE_FORM",state);
			state = false;
			return state;
		case 'OPEN_FORM':
			//console.log("CLOSE_FORM",state);
			state = true;
			return state;
		case 'TOGGLE_FORM':
			//console.log("CLOSE_FORM",state);
			state = !state;
			return state;
		default:
			return state;
	}
}

export default items;