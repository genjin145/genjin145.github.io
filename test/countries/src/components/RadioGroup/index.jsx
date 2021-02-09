import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './RadioGroup.module.css';

import Radio from '../Radio';

function RadioGroup({title, name, items, value, onChange, className}) {
  return (
    <div>
      {title ? <h4 className={styles.title}>{title}</h4> : null}

      <ul
        className={classNames([
          `${styles.list}`,
          `${className}`,
        ])}
      >
        {items.map(item => (
          <li
            key={item.value}
          >
            <Radio
              checked={item.value === value}
              onChange={(currentValue) => onChange(currentValue)}
              name={name}
              value={item.value}
              label={item.label}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

RadioGroup.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

RadioGroup.defaultProps = {
  title: '',
  items: [],
  value: '',
  onChange: () => {},
  className: ''
};

export default RadioGroup;
