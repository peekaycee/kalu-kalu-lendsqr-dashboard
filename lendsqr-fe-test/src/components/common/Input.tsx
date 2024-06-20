import React, { ChangeEvent } from 'react';

type InputProps = {
  className: string;
  type: string;
  value: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <div className='input__container'>
      <input
      className={props.className}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
