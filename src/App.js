import React, { useState } from 'react';

const App = () => {
  const [text, setUserText] = useState('');

  const updateText = event => {
    setUserText(event.target.value);
    console.log('Current text', text);
  }
  
  return (
    <div>
      <h1>Elevate your typing skills!</h1>
      <input value={text} onChange={updateText}/>
    </div>
  );
}

export default App;
