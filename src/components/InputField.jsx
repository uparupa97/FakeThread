import React, { useState } from 'react';

const InputField = ({
  typeInput,
  inputChange,
  inputName,
  inputText,
  isClear,
  test,
}) => {
  // const [value, setValue] = useState('');

  // const boxChange = (event) => {
  //   const { value } = event.target;
  //   setValue(value);
  //   inputChange(value, inputName);
  // };
  const boxChange = (event) => {
    inputChange(event.target.value, inputName);
  };

  return (
    <div>
      <input
        required
        type={typeInput}
        onChange={boxChange}
        name={inputName}
        // value={isClear ? '' : value}
        value={test}
        placeholder={inputText}
        className="bg-slate-500 block rounded-lg border border-gray-800 w-full p-2 mt-4"
      ></input>
    </div>
  );
};

export default InputField;
