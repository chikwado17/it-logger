import React from 'react';

const TechListItem = ({tech}) => {
    return (
        <li className="collection-item">
            <div>
                {tech.firstName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons red-text">delete</i>
                </a>
            </div>
        </li>
    )
}

export default TechListItem;
