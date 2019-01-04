const initialState = [
   "22:30",
   "22 00"
   ];



function tasklist (state = initialState, action){
if (action.type === 'ADD_TIME'){
	return state;
}
else if (action.type === 'DELETE_TIME'){
	return state;
}
	return state;
}