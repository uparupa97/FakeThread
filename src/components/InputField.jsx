import React from 'react';

const InputField = ({ typeInput, inputValue, inputText, onChange }) => {
  const [valueid, SetValueid] = useState('');

  const inputChange = (event) => {
    console.log('event', event.target.value);
    const { value } = event.target; // value = event.target.value랑 동일한 의미임
    SetValueid(value);
    onChange(value, inputValue);
  };

  return (
    <div>
      <input
        required
        type={typeInput}
        onChange={inputChange} //해당값이 변경했을 떄 일어나는 것
        name={inputValue}
        value={valueid}
        placeholder={inputText}
        className="bg-slate-500 block rounded-lg border border-gray-800 w-full p-2 mt-4"
      ></input>
    </div>
  );
};

export default InputField;
