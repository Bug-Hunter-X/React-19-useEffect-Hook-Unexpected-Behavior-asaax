```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect runs');
    return () => {
      // Cleanup function, runs before the next effect runs or component unmounts
      console.log('Cleanup runs');
    };
  }, [/* No dependencies */]); // Missing dependency: count

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```