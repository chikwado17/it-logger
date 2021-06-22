import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectOptions from '../techs/TechSelectOptions';
import { useSelector } from 'react-redux';
import { upDateLog } from './logActions';
import { useDispatch } from 'react-redux';

const EditLogModal = () => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech,setTech] = useState('');

    //getting  out current selected log from redux state
    const current = useSelector(state => state.logs.current);
    const dispatch = useDispatch();



    useEffect(() => {
        if(current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current]);


    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({
                html: 'Please enter a message and tech'
            })
        }else {

            const updatedLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            }

            dispatch(upDateLog(current.id, updatedLog));

            //clear inputs
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }

    const modalStyle = {
        width: "80%",
        height: "80%"
    };

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" id="" className="browser-default" onChange={(e) => setTech(e.target.value)} value={tech}>
                            <option value="" disabled>Select Technician</option>
                           <TechSelectOptions />
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" value={attention} onChange={(e => setAttention(!attention))} checked={attention} />
                                <span>Needs Attention</span>
                            </label> 
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-green btn">Enter</a>
            </div>
        </div>
    )
}

export default EditLogModal;
