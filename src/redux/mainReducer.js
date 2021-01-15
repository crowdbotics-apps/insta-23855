import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn42193370Reducer from '../features/SignIn42193370/redux/reducers'
import CalendarView3193369Reducer from '../features/CalendarView3193369/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn42193370: SignIn42193370Reducer,
CalendarView3193369: CalendarView3193369Reducer,

});