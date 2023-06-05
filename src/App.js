import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [count, setCount] = useState(0);
    const [isNight, setNight] = useState(true);
    return (
        <div className={`box ${isNight ? 'dayLight' : ''}`}>
            <h1>{isNight ? 'Night' : 'Morning'}</h1>
            <button onClick={() => setNight(!isNight)}>Update</button>
            <h1>Counter value = {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Counter</button>
            <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
        </div>
    );
}
export default App;