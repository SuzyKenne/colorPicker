import React, {useEffect, useState} from "react";


function ColorHistory({currentColor, setCurrentColor} ){

    const [swatches, setSwatches] = useState([]);
    
     

    useEffect(()=>{
       const savedSwatches = localStorage.getItem('colorSwatches');
       if(savedSwatches) {
        setSwatches(JSON.parse(savedSwatches));
       }
    }, []);

    useEffect(() => {
        localStorage.setItem('colorSwatches' , JSON.stringify(swatches));

    }, [swatches]);
    
    const handleSaveSwatches = () => {
        if(!swatches.includes(currentColor)){
            setSwatches([...swatches, currentColor]);
        }
    };
    
    
    const handleSwatchClick = (color) => {
        setCurrentColor(color);

    }

     
    
    return(
        <div>
            <button
            style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
            }} 
            onClick={handleSaveSwatches}>Save Color</button>


                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                {swatches.map((color, index ) => (
                    <div
                    key={index}
                    onClick={()=>handleSwatchClick(color)}
                    style={{
                        backgroundColor: color,
                        width: '50px',
                        height: '50px',
                        display: 'inline-block',
                        margin: '5px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        border: color === currentColor ? '2px solid black' : 'none' 
                    }}
                    ></div>
                ))}
            </div>
            
        </div>
    )
}

export default ColorHistory;