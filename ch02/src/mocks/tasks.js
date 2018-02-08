const uuidv4 = require('uuid/v4');

let items = [
		{
			id: uuidv4(),
			name : "ABC",
			level: 0 //0: Small, 1: Medium, 2: High
		},
		{
			id: uuidv4(),
			name : "DEF",
			level: 1 //0: Small, 1: Medium, 2: High
		},
		{
			id: uuidv4(),
			name : "GHJ",
			level: 2 //0: Small, 1: Medium, 2: High
		},
		{
			id: uuidv4(),
			name : "GHJ",
			level: 2 //0: Small, 1: Medium, 2: High
		}
	]
export default items;