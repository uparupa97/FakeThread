import React from 'react';

const InputField = ({ typeInput, inputValue, inputText, inputChange }) => {
  return (
    <div>
      <input
        required
        type={typeInput}
        onChange={inputChange} //해당값이 변경했을 떄 일어나는 것
        name={inputValue}
        placeholder={inputText}
        className="bg-slate-500 block rounded-lg border border-gray-800 w-full p-2 mt-4"
      ></input>
    </div>
  );
};

export default InputField;
