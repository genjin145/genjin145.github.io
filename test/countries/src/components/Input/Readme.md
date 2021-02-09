```jsx
const [value, setValue] = React.useState('');

<Input
  value={value}
  onChange={(text) => setValue(text)}
  label="Название"
/>
```
