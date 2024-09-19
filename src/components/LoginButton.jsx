import React from 'react'

const LoginButton = ({buttontype, buttonName, buttonEvent}) => {
  return (
    <div>
       <button type={buttontype} onClick={buttonEvent} className="rounded-lg bg-slate-100 hover:bg-slate-300 text-slate-900 w-full p-2 my-4 font-mono text-md" >{buttonName}</button> 
    </div>
  )
}

export default LoginButton