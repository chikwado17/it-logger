import axios from 'axios';


export const setLoading = () => {
    return {
        type: 'SET_LOADING'
    }
}

//add new log
export const addLog = (log) => {
    return async (dispatch) => {
       try {
           setLoading();
            const res = await axios.post('/logs',log);
            dispatch({
                type: 'ADD_LOG',
                payload: res.data
            })
       }catch(err){
           console.log(err);
       }
    }
}

//delete log
export const deleteLog = (id) => {
    return async (dispatch) => {
        try {
            setLoading();
            await axios.delete(`/logs/${id}`);
           
            dispatch({
                type: 'DELETE_LOG',
                payload: id
            })
        }catch(err) {
            console.log(err);
        }
    }
}

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

