import React from 'react';
import { useSelector } from 'react-redux';

const TechSelectOptions = () => {


    const techs = useSelector(state => state.techs.techs);
    const loading = useSelector(state => state.techs.loading);

  
    return (
        <>
           {!loading && techs !== null &&

            techs.map(techie => (
                <option key={techie.id} value={`${techie.firstName} ${techie.lastName}`}> {`${techie.firstName}`} {`${techie.lastName}`} </option>
            ))
           }
        </>
    )
}

export default TechSelectOptions;
