import React from 'react'
import Label from './Label'

const TextInput = ({ label, name, value, onChange, required = false ,type="text"}) => {
  return (
    <div className="">
      {label && (
        <Label name={name} label={label} required={required}/>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={`Enter ${label}`}
        className="w-full h-[50px] block text-[12px] px-3 py-2 border border-[#45464f] rounded-[10px] bg-transparent text-[#eee] focus:outline-none focus:border-[#000]"
      />
    </div>
  )
}

export default TextInput
