import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogsItem from './LogsItem';
import Preloader from '../layouts/Preloader';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);


    const getLogs = async () => {
        setLoading(true);
        const res = await axios.get('/logs');
        setLogs(res.data);
        setLoading(false);
    }

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, []);

    if(loading) {
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

export default Logs
