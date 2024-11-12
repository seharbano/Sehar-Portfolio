import { Type } from 'lucide-react';
import React from 'react'
type props = {
  Placeholder: string;
  height?: string;
  width?: string;
  inputType: string;
  className?: any;
};
const GlobalInput = ({ Placeholder, height = "38px", width = "100%", inputType, className }: props) => {
  return (
    <div>
      <input
        style={{ height: height, width: width, }}
        type={inputType} placeholder={Placeholder} className={`  ${className}  border bg-transparent rounded-[5px] border-gray-400 text-white placeholder:text-gray-400 p-4 outline-none focus:outline-none focus:border focus:border-white `} />
    </div>
  )
}

export default GlobalInput