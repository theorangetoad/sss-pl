const createAction = function() {
  const initialData = arguments
  return function() {
    const payload = {}
    for (let i = 1; i < initialData.length; i++) {
      payload[initialData[i]] = arguments[i-1]
    }
    console.log(initialData[0], payload)
    return {type: initialData[0], payload}
  }
}


export const ADD_DONE_TASK ='ADD_DONE_TASK'
export const addDoneTask = createAction(ADD_DONE_TASK, 'date', 'taskId')

export const CHANGE_TASK = 'CHANGE_TASK'
export const changeTask = createAction(CHANGE_TASK, 'task')

export const DELETE_TASK = 'DELETE_TASK'
export const deleteTask = createAction(DELETE_TASK, 'taskId')

export const REMOVE_DONE_TASK = 'REMOVE_DONE_TASK'
export const removeDoneTask = createAction(REMOVE_DONE_TASK, 'date', 'taskId')

export const SET_EDIT_TASK_SHOWING_CUSTOM_DATES = 'SET_EDIT_TASK_SHOWING_CUSTOM_DATES'
export const setEditTaskShowingCustomDates = createAction(SET_EDIT_TASK_SHOWING_CUSTOM_DATES, 'showingCustomDates')

export const SET_EDIT_TASK_CALENDAR_INITIAL_DATE = 'SET_EDIT_TASK_CALENDAR_INITIAL_DATE'
export const setEditTaskCalendarInitialDate = createAction(SET_EDIT_TASK_CALENDAR_INITIAL_DATE, 'date')

export const SET_EDIT_TASK_CALENDAR_MONTH_MODE = 'SET_EDIT_TASK_CALENDAR_MONTH_MODE'
export const setEditTaskCalendarMonthMode = createAction(SET_EDIT_TASK_CALENDAR_MONTH_MODE, 'monthMode')

export const SET_EDITING_TASK = 'SET_EDITING_TASK'
export const setEditingTask = createAction(SET_EDITING_TASK, 'task')

export const SET_INITIAL_DATE = 'SET_INITIAL_DATE'
export const setInitialDate = createAction(SET_INITIAL_DATE, 'date')

export const SET_TASK_LIST_VISIBILITY = 'SET_TASK_LIST_VISIBILITY'
export const setTaskListVisibility = createAction(SET_TASK_LIST_VISIBILITY, 'visible')

export const SET_MAIN_MENU_EXPANDED_STATE = 'SET_MAIN_MENU_EXPANDED_STATE'
export const setMainMenuExpandedState = createAction(SET_MAIN_MENU_EXPANDED_STATE, 'expanded')



