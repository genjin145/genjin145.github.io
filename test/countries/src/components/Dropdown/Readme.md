```jsx
const [values, setValues] = React.useState(['three']);

<Dropdown
  label="Порт"
  items={[
    {value: 'one', label: 'A Shortfall of Gravitas'},
    {value: 'two', label: 'Fort Lauderdale'},
    {value: 'three', label: 'Port Canaveral'},
    {value: 'four', label: 'Last'},
  ]}
  values={values}
  onChange={(results) => setValues(results)}
/>
```
