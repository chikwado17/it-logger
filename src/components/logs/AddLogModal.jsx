import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from './logActions';
import { useDispatch } from 'react-redux';


const AddLogModal = () => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech,setTech] = useState('');

    const dispatch = useDispatch();

    const modalStyle = {
        width: "80%",
        height: "80%"
    };


    const onSubmit = (e) => {
        e.preventDefault();
        e.name = e.length + 1
        if(message === '' || tech === ''){
            M.toast({
                html: 'Please enter a message and tech'
            })
        }else {
            
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }

            dispatch(addLog(newLog));

            M.toast({
                html: `New Log added by ${tech}`
            });

            //clear inputs
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }


    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" id="" className="browser-default" onChange={(e) => setTech(e.target.value)} value={tech}>
                            <option value="" disabled>Select Technician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
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

export default AddLogModal;
