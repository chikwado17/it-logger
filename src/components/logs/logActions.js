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


//select current log
export const setCurrentLog = (log) => {
    return {
        type: 'SET_CURRENT_LOG',
        payload:log
    }
}

//clear selected current log
export const clearCurrentLog = () => {
    return {
        type: 'CLEAR_CURRENT_LOG'
    }
}

//function to update selected log
export const upDateLog = (id,update) => {
    return async (dispatch) => {
        try {
            setLoading();

             await axios.put(`/logs/${id}`, update);

            dispatch({
                type: 'UPDATE_LOG',
                payload: update
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

//fetching all logs
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

//function to search for log
export const searchLogs = (text) => {
    return async (dispatch) => {
        try {
            setLoading();
            const res = await axios.get(`/logs?q=${text}`);

            dispatch({
                type: 'SEARCH_LOGS',
                payload: res.data
            });

        }catch(err){
            console.log(err);
        }
    }
}
