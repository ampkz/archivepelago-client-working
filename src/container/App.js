import React from 'react';
import './App.css';
import { SITE_VERSION } from '../siteConfig';
import { INITIAL_INSTRUCTIONS } from '../presenter/presenters';
import InitialInstructions from '../presenter/InitialInstructions';
import ZoomSlider from '../applet/controls/ZoomSlider';
import LettersGraph from '../applet/LettersGraph';

function App() {
  const [presenter, setPresenter] = React.useState(INITIAL_INSTRUCTIONS);

  const zoomRef = React.useRef();
  const lettersGraphRef = React.useRef();

  const renderSidePresenter = () => {
    switch(presenter){
      default:
      case INITIAL_INSTRUCTIONS:
        return <InitialInstructions />;
    }
  }

  const setZoomSliderVal = (value) => {
    if(zoomRef.current) zoomRef.current.handleZoomVal(value);
  }

  const handleZoomValChange = (event, value) => {
    if(lettersGraphRef.current.setZoomVal(value));
    //if(zoomRef.current) zoomRef.current.handleZoomVal(value);
  }
  
  return (
    <div className="app">
      <header className="site-title">
        <h1>
          <span className="site-title-main">Archivepelago</span><span className="version">v{SITE_VERSION}</span>
        </h1>
        <h2>Networked Correspondence Map</h2>
      </header>
      <main>
        <section id="side-presenter">
          {renderSidePresenter()}
        </section>
        <ZoomSlider ref={zoomRef} handleZoomChange={handleZoomValChange} />
        <LettersGraph ref={lettersGraphRef} handleZoomChange={setZoomSliderVal} />
      </main>
    </div>
  );
}

export default App;
