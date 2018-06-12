const uuidv4 = require('uuid/v4');

let items = [
		{
			id: uuidv4(),
			name : "Abc Lorem ipsum , consectetur adipisicing elit. Reiciendis ea c",
			level: 0 //0: Small, 1: Medium, 2: High
		},
		{
			id: uuidv4(),
			name : "DEF Lorem ipsum , consectetur adipisicing elit. Reiciendis ea c",
			level: 1 //0: Small, 1: Medium, 2: High
		},
		{
			id: uuidv4(),
			name : "GHJ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
			level: 2 //0: Small, 1: Medium, 2: High
		},
		{
			id: uuidv4(),
			name : "123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
			level: 2 //0: Small, 1: Medium, 2: High
		}
	]
export default items;