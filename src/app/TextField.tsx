'use client';

interface ITextFieldProps {
  className?: string;
  placeholder?: string;
}

export default function TextField({ 
    className, 
    placeholder 
  }: ITextFieldProps) {
  return (
    <input
      type="text" 
      className={`${className} w-full border-b-2 text-white border-white focus:border-[#F94350] bg-transparent outline-none`}
      placeholder={placeholder}
    />
  )
}