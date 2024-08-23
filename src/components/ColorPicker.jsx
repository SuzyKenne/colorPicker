"import {SketchPicker} from 'react-color';"
import React, { useState } from 'react';
import ColorHistory from './ColorHistory';




function ColorPicker( ) {

    const [currentColor,setCurrentColor] = useState ([]);
    const [inputColor , setInputColor] = useState ([]);
    const [error , setError] = useState('');
    

    const handleColorChange = (e)=>{
        setCurrentColor(e.target.value);
        setError('');
    };

    const handleInputChange = (e) => {
      const newInputColor = e.target.value;
      if (/^#[0-9A-F]{6}$/i.test(newInputColor)){
        setCurrentColor(newInputColor);
        setInputColor(newInputColor);
        setError('')
      } else {
        setError('Invalid color code');
      }
    }

    
    
    const appStyle = {
      textAlign: 'center',
      backgroundColor: currentColor,
      margin: '5px',
      height: '100vh'
      
    }
  
    
  return (
    <div className='ColorPicker' style={appStyle}>
        <h1>Color Picker</h1>
      
      <input
      type='color'
      value={currentColor}
      onChange={handleColorChange}
      />
       <br/>
       <label style={{

        fontSize: '30px',
        fontWeight: 'bold',
        textAlign: 'center',
        }}>Enter the color code: </label>
      <input
      type='text'
      value={inputColor}
      onChange={handleInputChange}
      placeholder='#FFFFFF'
      />

      {error && <p style={{color: 'red'}}>{error}</p>}

      <div> <p style={{

        fontSize: '30px',
        fontWeight: 'bold',
        textAlign: 'center',
        }}>Selected color: {currentColor}</p>
      </div>
      <ColorHistory currentColor={currentColor} setCurrentColor={setCurrentColor}/>
    </div>
  );
}

export default ColorPicker;
