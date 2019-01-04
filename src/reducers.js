import {combineReducers} from 'redux'
import tasks from './tasks'
import time from './time'
import filterTasks from './filterTasks'

export default combineReducers({
	tasks,
	time,
	filterTasks
});