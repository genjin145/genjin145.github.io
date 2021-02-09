import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Radio.module.css';
import { ReactComponent as Off } from '../../assets/svg/radio-off.svg';
import { ReactComponent as On } from '../../assets/svg/radio-on.svg';

function Radio({checked, onChange, name, value, label, className}) {
  return (
    <label
      className={classNames([
        `${styles.wrapper}`,
        `${className}`
      ])}
    >
      <input
        className={styles.input}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className={styles.box}>
        {checked ? <On /> : <Off />}
      </span>
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
}

Radio.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string
};

Radio.defaultProps = {
  checked: false,
  onChange: () => {},
  name: '',
  value: '',
  label: '',
  className: ''
};

export default Radio;
