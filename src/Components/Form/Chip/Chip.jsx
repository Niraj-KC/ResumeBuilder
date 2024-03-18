import React from 'react';
import './Chip.css';

const Chip = ({ text, onClick }) => {
  return (
    <div className='chip-div'>
      <label>{text}</label>
      <button className="chip-del" onClick={onClick}>X</button>
    </div>    
  );
}

export default Chip;

