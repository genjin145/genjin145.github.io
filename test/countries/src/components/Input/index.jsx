import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.css';

function Input({value, onChange, label, maxLength, className}) {
  return (
    <label
      className={classNames([
        `${styles.wrapper}`,
        `${className}`
      ])}
    >
      <input
        className={classNames({
          [styles.input]: true,
          [styles.active]: value.length
        })}
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        maxLength={maxLength}
      />
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  maxLength: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  className: PropTypes.string
};

Input.defaultProps = {
  value: '',
  onChange: () => {},
  label: '',
  maxLength: null,
  className: ''
};

export default Input;
