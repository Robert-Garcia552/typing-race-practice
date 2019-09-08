import React, { useState, useEffect } from 'react';



const center = {
  width: '400px',
  margin: '15% auto',
  textAlign: 'center'
}

const buttons = {
  padding: '10px',
  margin: '10px',
  background: 'lightblue',
  borderRadius: '20px'
}

const App = () => {
  const SNIPPETS = [
    'Bears, beets, battlestar galactica',
    "What's Forrest Gump's password? 1Forrest1",
    'Where do programmers like to hangout? The Foo Bar'
  ];

  const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null };
  const [snippet, setSnippet] = useState('');
  const [text, setUserText] = useState('');
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const updateText = event => {
    setUserText(event.target.value);

    if (event.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime
      });
    }
  }

  const chooseSnippet = snippetIndex => () => {
    console.log('setSnippet', snippetIndex);
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({ ...gameState, startTime: new Date().getTime() });
  }

  useEffect(() => {
    if (gameState.victory) document.title = 'Victory!';
  });
  
  return (
   
      <div style={center}>
        <h1>Elevate your typing skills!</h1>
        <hr />
        <h3>Snippet</h3>
        <p>{snippet}</p>
        <h2>{gameState.victory ? `Done! 🎉 Time: ${gameState.endTime}ms` : null}</h2>
        <input value={text} onChange={updateText}/>
        <hr />
        {
          SNIPPETS.map((SNIPPET, index) => (
            <button onClick={chooseSnippet(index)} key={index} style={buttons}>
              Challenge #{index+1}
            </button>
          ))
        }
      </div>
  
  );
}

export default App;
