import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TechListItem from './TechListItem';

const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);


    const getTechs = async () => {
        setLoading(true);
        const res = await axios.get('/techs');
        setTechs(res.data);
        setLoading(false);
    }

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);


    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && 
                        techs.map(tech => (
                            <TechListItem tech={tech} key={tech.id} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TechListModal;
