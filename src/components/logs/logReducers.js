
const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

const logReducers = (state = initialState, action) => {
    switch(action.type) {

        case 'ADD_LOG':
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            }

        case 'GET_LOGS': 
            return {
                ...state,
                logs: action.payload,
                loading: false
            }

        case 'SEARCH_LOGS': 
            return {
                ...state,
                logs: action.payload,
                loading: false
            }

        case 'DELETE_LOG':
            return {
                ...state,
                logs: state.logs.filter((log) => log.id !== action.payload),
                loading: false
              }

        case 'SET_CURRENT_LOG':
            return {
                ...state,
                current: action.payload
            }
        
        case 'CLEAR_CURRENT_LOG':
            return {
                ...state,
                current: null
            }

        
        case 'UPDATE_LOG': 
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            }

        case "SET_LOADING":
            return {
                ...state,
                loading:true
            }
        case 'LOGS_ERROR':
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }


        default:
            return state;
    }
}

export default logReducers;