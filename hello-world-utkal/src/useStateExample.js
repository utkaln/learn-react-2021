import React, {useState} from 'react';

const UseStateExample = () => {
  const [text, setText] = useState('Sample Text');
  
  const handleClick = () => {
    if(text === 'Updated Text') {
      setText('Original Text');
    } else {
      setText('Updated Text');
    }   
  };

  return (
    <React.Fragment>
    <h2>{text}</h2>
    <button className='btn' onClick={handleClick}> Change Title </button>
    </React.Fragment>
  );
};

export default UseStateExample;