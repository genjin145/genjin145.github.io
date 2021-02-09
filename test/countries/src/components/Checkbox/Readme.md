```jsx
const [isChecked, setIsChecked] = React.useState(true);

<Checkbox
  checked={isChecked}
  onChange={() => setIsChecked(prev => !prev)}
  label="Port of Los Angeles"
/>
```
