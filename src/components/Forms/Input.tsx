import React from 'react'

const Input: React.FC<{
  title: string
  value: string
  changeValue: React.ChangeEventHandler<HTMLInputElement>
}> = ({ title, value, changeValue }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700 capitalize"
      >
        {title.toLowerCase()}
      </label>
      <div className="mt-1">
        <input
          type="text"
          name={title}
          id={title}
          value={value}
          onChange={changeValue}
          className="block w-full sm:text-sm rounded-md border-gray-300 shadow-sm focus:border-fuchsia-500 focus:ring-fuchsia-500"
          autoComplete="off"
          data-lpignore="true"
          data-form-type="other"
        />
      </div>
    </div>
  )
}

export default Input
