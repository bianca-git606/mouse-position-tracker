import './App.css';
import { useEffect, useState } from 'react';

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect( () => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: e.clientX,
        y: e.clientY
      })
    }
  
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }
  , [])

  return render({mousePosition})
}

const PanelMouseLogger = () => {

  return(
    <div className='panel'>
    <MousePosition render={({mousePosition}) => (
      <>
        <p>x coordinate: {mousePosition.x}</p>
        <p>y coordinate: {mousePosition.y}</p>
      </>
    )} 
    />
  </div>
  )
}

const PointMouseLogger = () => {

  return (
    <MousePosition render={({mousePosition}) => (
      <p>({mousePosition.x}, {mousePosition.y})</p>
    )}
    />
  )

}

function App() {
  return (
    <div className='main'>
      <h1>Mouse position tracker</h1>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>

  );
}

export default App;
