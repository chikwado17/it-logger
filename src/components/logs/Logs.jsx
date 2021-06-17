import React, { useEffect } from 'react';
import LogsItem from './LogsItem';
import Preloader from '../layouts/Preloader';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import  { getLogs } from './logActions';

const Logs = () => {

    const dispatch = useDispatch()
    const logs = useSelector(state => state.logs.logs);
    const loading = useSelector(state => state.logs.loading);

     
   
    useEffect(() => {
        dispatch(getLogs());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(loading || logs === null) {
        return (
            <Preloader />
        )
    }
    return (
        <div className="container">
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">System Logs</h4>
                </li>
                {!loading && logs.length === 0 ? (
                    <p className="center">No logs to show...</p>
                ) : (
                    logs.map(log => (
                        <LogsItem key={log.id} log={log} />
                    ))
                )}
            </ul>
        </div>
    )
}



export default Logs;
