import React from 'react'

const InputField = ({typeInput, inputValue, inputText}) => {

  return (
    <div>
        <input type={typeInput} name={inputValue} placeholder={inputText} className="bg-slate-500 block rounded-lg border border-gray-800 w-full p-2 mt-4"></input>
    </div>
  )
}

export default InputField