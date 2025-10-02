import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('loading...');

  useEffect(() => {
    fetch('/api')
      .then(r => r.text())
      .then(setMessage)
      .catch(() => setMessage('error'));
  }, []);

  return <h1>{message}</h1>;
}
export default App;