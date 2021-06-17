import { combineReducers } from "redux";
import logReducers from '../components/logs/logReducers';

const rootReducers = combineReducers({
   logs:logReducers
});

export default rootReducers;