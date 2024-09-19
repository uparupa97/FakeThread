import React from 'react';

const InputField = ({ typeInput, inputChange, inputValue, inputText }) => {
  return (
    <div>
      <input
        required
        type={typeInput}
        onChange={inputChange}
        name={inputValue}
        placeholder={inputText}
        className="bg-slate-500 block rounded-lg border border-gray-800 w-full p-2 mt-4"
      ></input>
    </div>
  );
};

export default InputField;
