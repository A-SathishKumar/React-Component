// eslint-disable-next-line no-unused-vars
import React from 'react';
import propTypes from 'prop-types';
const Hero = ({title}) => {
    return (
      <div className='hero text-center'>
        <h1 style={{ color: 'white', alignItems: 'center' }}>{title}</h1>
        <form className='form'>
          <input type='mail' className='form-control' placeholder='Email Address'></input>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    );
};

Hero.propTypes = {
    title: propTypes.string.isRequired,
}

export default Hero;
  