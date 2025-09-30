import { useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import MemeCanvas from './components/MemeCanvas';

function App() {
  const [image, setImage] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  return (
    <>
      <Controls
        onImageChange={setImage}
        onTopTextChange={setTopText}
        onBottomTextChange={setBottomText}
      />
      <MemeCanvas
        image={image}
        topText={topText}
        bottomText={bottomText}
      />
    </>
  );
}

export default App;
