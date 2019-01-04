import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './App';
import reducers from './reducers'



const store =createStore(reducers);

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));



//const addTaskBtn = document.querySelectorAll('.addTask')[0];

//const taskInput = document.querySelectorAll('.taskInput')[0];

//const list = document.querySelectorAll('.list')[0];

//store.subscribe(() => {
	
	
	//list.innerHTML = '';
	//taskInput.value = "";
	//store.getState().forEach(task => {
	//	const li = document.createElement('li');
	//	li.textContent = task;
	//	list.appendChild(li);
	//})
//})

//addTaskBtn.addEventListener('click', () => {
//	const taskName = taskInput.value;
	
//	store.dispatch({type:'ADD_TASK', payload: taskName});
//})