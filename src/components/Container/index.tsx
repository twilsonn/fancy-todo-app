import React, { MouseEventHandler } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
const Container: React.FC<{
  ClassName?: string
  dataValue?: string
  onClick?: MouseEventHandler
}> = ({ children, ClassName, dataValue, onClick }) => {
  return (
    <div
      onClick={onClick}
      data-value={dataValue}
      className={`w-full p-4 bg-white shadow-md shadow-slate-200 rounded-2xl ${ClassName}`}
    >
      {children}
    </div>
  )
}

export default Container
