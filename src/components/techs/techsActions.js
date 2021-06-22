import axios from 'axios';


export const setLoading = () => {
    return {
        type: 'SET_LOADING'
    }
}


export const getTechs = () => {
    return async (dispatch) => {
        try {
            setLoading();
            const response = await axios.get('/techs');

            dispatch({
                type: 'GET_TECHS',
                payload: response.data
            });

        }catch(err) {
            dispatch({
                type: 'TECHS_ERRORS',
                payload: err.response.statusText
            })
        }
    }
}


export const addTechs = (tech) => {
    return async (dispatch) => {
        try {
            setLoading();
            const response = await axios.post('/techs', tech);

            dispatch({
                type: 'ADD_TECHS',
                payload: response.data
            });

        }catch(err) {
            dispatch({
                type: 'TECHS_ERRORS',
                payload: err.response.statusText
            });
        }
    }
}

export const deleteTech = (id) => {
    return async (dispatch) => {
        try {
            setLoading();

            await axios.delete(`/techs/${id}`);

            dispatch({
                type: 'DELETE_TECH',
                payload: id
            });
        }catch(err) {
            dispatch({
                type: 'TECHS_ERRORS',
                payload: err.response.statusText
            });
        }
    }
}