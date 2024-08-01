// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Testimonial.css';
import PropTypes from 'prop-types';
const Testimonial = ({ name, quote, image }) => {
  return (
    <div className="testimonial">
      <img src={image} alt={name} className="testimonial-image" />
      <h4>{name}</h4>
      <p>"{quote}"</p>
    </div>
  );
};


export default Testimonial;

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}