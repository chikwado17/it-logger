import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TechListItem from './TechListItem';
import { getTechs } from './techsActions';


const TechListModal = () => {

    const techs = useSelector(state => state.techs.techs);
    const loading = useSelector(state => state.techs.loading);
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getTechs());
        //eslint-disable-next-line
    }, []);

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs !== null &&
                        techs.map(tech => (<TechListItem tech={tech} key={tech.id} />))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TechListModal;
