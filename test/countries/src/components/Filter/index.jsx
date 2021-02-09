import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue, setContinentValue, setCurrencyValue } from './filterSlice.js';

import Input from '../Input';
import Dropdown from '../Dropdown';
import RadioGroup from '../RadioGroup';

function Filter({onChange}) {
  const filterSelector = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div
      className={styles.wrapper}
      onChange={() => onChange()}
    >
      <h2 className={styles.title}>Filters</h2>

      <Input
        value={filterSelector.search}
        onChange={(text) => dispatch(setSearchValue(text.toUpperCase()))}
        label="Code countrie"
        maxLength="2"
      />

      <Dropdown
        label="Currency"
        items={[
          {value: 'USD', label: 'USD'},
          {value: 'EUR', label: 'EUR'},
          {value: 'RUB', label: 'RUB'}
        ]}
        values={filterSelector.currency}
        onChange={(values) => dispatch(setCurrencyValue(values))}
      />

      <RadioGroup
        title="Continent"
        name="continent"
        items={[
          {value: 'AF', label: 'Africa'},
          {value: 'AN', label: 'Antarctica'},
          {value: 'AS', label: 'Asia'},
          {value: 'EU', label: 'Europe'},
          {value: 'NA', label: 'North America'},
          {value: 'OC', label: 'Oceania'},
          {value: 'SA', label: 'South America'}
        ]}
        value={filterSelector.continent}
        onChange={(value) => dispatch(setContinentValue(value))}
      />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func
};

Filter.defaultProps = {
  onChange: () => {}
};

export default Filter;
