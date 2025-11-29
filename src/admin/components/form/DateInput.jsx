import React from "react";
import Label from "./Label";

const DateInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div>
      {label && <Label name={name} label={label} required={required} />}
      <input
        type="date"
        id={name}
        name={name}
        value={value || ""}
        onChange={(e) => onChange(name, e.target.value)}
        required={required}
        className="w-full h-[50px] text-[12px] px-3 py-2 border border-[#45464f] rounded-[10px] bg-[#1e1e1e] text-[#eee] focus:outline-none focus:border-[#000]"
      />
    </div>
  );
};

export default DateInput;
