

import React, { useState } from 'react';


export  const Demo = () => {
  let data = Array.from({ length: 24 }).fill("white")
  
  const [selectedElementIndex, setSelectedElementIndex] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleElementClick = (index) => {
    if(selectedElementIndex == index) {
      setSelectedElementIndex(null)
    }
    else{
      setSelectedElementIndex(index)
    }
    
  } 

  const renderItem = (item, index) => (
    <div key={index} onClick={() => handleElementClick(index)}>
      {item}
      {selectedElementIndex === index && renderPopup(options)}
    </div>
  );

  const renderPopup = (options) => (
    <ul>
      {options.map((option) => (
        <li key={option}>{option}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {data.map(renderItem)}
    </div>
  );
};