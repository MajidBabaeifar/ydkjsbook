import { useState } from 'react';
import './App.css';
import ch1_File from './chapter1/ch1.md'
import { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';





function App() {
  const [ch1, setCh1] = useState(null)
  useEffect(() => {
    fetch(ch1_File)
      .then(response => response.text())
      .then(result => setCh1(result));
  }, [])


  return (
    <div>
      {ch1 && <Markdown>{ch1}</Markdown>}
    </div>
  );
}

export default App;
