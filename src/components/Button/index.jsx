import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ onClick, children }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};

// Adicione PropTypes para validar as props
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;