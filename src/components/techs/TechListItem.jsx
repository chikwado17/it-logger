import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useDispatch } from 'react-redux';
import { deleteTech } from './techsActions';

const TechListItem = ({tech}) => {

    const dispatch = useDispatch();

    //function to delete tech
    const handleDeleteTech = () => {
        dispatch(deleteTech(tech.id));
        
        M.toast({
            html: 'Tech deleted'
        })
    }

   

    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a onClick={handleDeleteTech} href="#!" className="secondary-content">
                    <i className="material-icons red-text">delete</i>
                </a>
            </div>
        </li>
    )
}

export default TechListItem;
