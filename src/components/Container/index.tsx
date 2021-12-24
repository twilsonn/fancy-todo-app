import React from 'react'

const Container: React.FC<{ ClassName?: string }> = ({
  children,
  ClassName
}) => {
  return (
    <div
      className={`w-full p-4 bg-white shadow-md shadow-slate-200 rounded-2xl ${ClassName}`}
    >
      {children}
    </div>
  )
}

export default Container
