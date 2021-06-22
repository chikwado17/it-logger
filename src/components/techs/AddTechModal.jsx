import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTechs } from './techsActions';
import { useDispatch } from 'react-redux';


const AddTechModal = () => {


    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');

    const dispatch = useDispatch();
    

    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({
                html: 'Please enter the firstname and lastname'
            })
        }else {

            dispatch(
                addTechs({
                    firstName,
                    lastName
                }
            ))
            M.toast({
                html: `${firstName} ${lastName} was added as a tech`
            })
            //clear inputs
            setFirstname('');
            setLastname('');
        }
    }


    return (
        <div id="tech-modal" className="modal">
            <div className="modal-content">
                <h4>Add Tech</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstname" value={firstName} onChange={(e) => setFirstname(e.target.value)} />
                        <label htmlFor="message" className="active">
                           Enter firstname
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastname" value={lastName} onChange={(e) => setLastname(e.target.value)} />
                        <label htmlFor="message" className="active">
                            Enter lastname
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-green btn">Enter</a>
            </div>
        </div>
    )
}

export default AddTechModal;
