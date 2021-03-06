import React from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { deleteLog, setCurrentLog } from './logActions';

const LogsItem = ({log}) => {

    const dispatch = useDispatch();

    return (
        <li className="collection-item">
            <div>
                <a onClick={() => dispatch(setCurrentLog(log))} href="#edit-log-modal" className={` modal-trigger ${log.attention ? 'red-text' : 'blue-text'} `}>
                    {log.message}
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> last updated by {' '}
                    <span className="black-text">{log.tech}</span> on <Moment format='MMMM Do YYYY, hh:mm:ss a'>{log.date}</Moment>
                </span>
                <a href="#!" onClick={() => dispatch(deleteLog(log.id))} className="secondary-content">
                    <i className="material-icons red-text">delete</i>
                </a>
            </div>
        </li>
    )
}

export default LogsItem;
