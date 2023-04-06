'use client';

import React from 'react';

interface IButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Button ({ className, children }: IButtonProps) {
  return (
    <button
      className={`${className} w-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold uppercase rounded-md px-4 py-2 transition-colors duration-150 ease-in-out`}
    >
      {children}
    </button>
  )
}