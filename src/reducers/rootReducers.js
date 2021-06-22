import { combineReducers } from "redux";
import logReducers from '../components/logs/logReducers';
import techsReducers from '../components/techs/techsReducers';


const rootReducers = combineReducers({
   logs:logReducers,
   techs: techsReducers
});

export default rootReducers;