import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
const Feature = ({ icon, title, description }) => {
    return (
      <div className="feature text-center">
        <FontAwesomeIcon icon={icon} size="2x" /><br/>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  Feature.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  
  export default Feature;