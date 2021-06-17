import axios from 'axios';


export const getLogs = () => {
    return async (dispatch) => {
        try {
            setLoading();
            const res = await axios.get('/logs');
            dispatch({
                type: 'GET_LOGS',
                payload: res.data
            });

        }catch(err){
            console.log(err);
            // dispatch({
            //     type: 'LOGS_ERROR',
            //     payload: err.res.data
            // });
        }
    }
}


export const setLoading = () => {
    return {
        type: 'SET_LOADING'
    }
}