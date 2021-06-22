

const initialState = {
    techs: null,
    loading: false,
    errror: null
}

const techsReducers = (state = initialState, action) => {
    switch(action.type) {

        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }

        case 'GET_TECHS':
            return {
                ...state,
                techs: action.payload,
                loading: false
            }

        case 'ADD_TECHS':
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            }

        case 'DELETE_TECH':
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
                loading: false
            }

        case 'TECHS_ERRORS':
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default: 
            return state;
    }
}

export default techsReducers;