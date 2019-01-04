
const initialState = [];
export default function tasklist (state = initialState, action){
	if (action.type === 'ADD_TASK') {
		return [
		...state,
		action.payload
	];
}
else if(action.type === 'DELERE_TASK'){
	return state;
}

	return state;
}