import React, { useState } from 'react';
import WithToggle from './HOCs/WithToggle';

// + or - icons
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (props) => {

  return (
    <article className='question'>
      <header>
        <h4>{props.title}</h4>
        <button className='btn' onClick={props.toggleShow}>
          {props.showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {props.showInfo && <p>{props.info}</p>}
    </article>
  );
};

export default WithToggle(Question);
