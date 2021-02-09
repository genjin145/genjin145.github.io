```jsx
const [value, setValue] = React.useState('');

<RadioGroup
  name="fruit"
  items={[
    {value: 'apple', label: 'apple'},
    {value: 'banana', label: 'banana'},
    {value: 'orange', label: 'orange'},
    {value: 'kiwi', label: 'kiwi'},
  ]}
  value={value}
  onChange={(currentValue) => setValue(currentValue)}
/>
```
