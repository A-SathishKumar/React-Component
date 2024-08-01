import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, description, image}) => {
    return (
        <div className='containertemp'>

            <div className="left">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="right">
                <img src={image} alt={title} style={{ height: 400, width: 760 }} />
            </div>
        </div>
    );
  };
export default Card;
