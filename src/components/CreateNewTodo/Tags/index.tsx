import { PlusIcon } from '@heroicons/react/solid'
import React, { KeyboardEvent, useRef, useState } from 'react'
import AutosizeInput from 'react-input-autosize'
import { TagFunction } from '..'

import Tag from './Tag'

const Tags: React.FC<{
  tags: string[]
  addTag: TagFunction
  removeTag: TagFunction
}> = ({ tags, addTag, removeTag }) => {
  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event: KeyboardEvent
  ) => {
    if (event.key === 'Enter') {
      addTag(value)
      setValue('')
    }
  }

  const activeTagContent = useRef<HTMLButtonElement>(null)

  const clickOutsideContent = (e: MouseEvent) => {
    if (
      activeTagContent.current &&
      active &&
      !activeTagContent.current.contains(e.target as Node)
    ) {
      setActive(false)
      setValue('')
    }
  }

  document.addEventListener('mousedown', clickOutsideContent)

  return (
    <div className="w-full">
      <span className="block text-sm font-medium text-gray-700">Tags</span>
      <div className="flex flex-wrap justify-start items-center">
        {tags.map((tag) => {
          return <Tag removeTag={removeTag} key={tag} name={tag} />
        })}
        <button
          ref={activeTagContent}
          className="flex py-2 px-2 mt-2 mr-1 h-10 rounded-full bg-slate-100"
        >
          {active && (
            <AutosizeInput
              placeholder=" "
              value={value}
              autoFocus
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              inputClassName="p-0 pl-1 m-0 bg-transparent text-sm font-medium -translate-y-1 border-none focus:border-none ring-0 focus:ring-0 outline-none focus:outline-none"
            />
          )}

          <PlusIcon
            className="w-6 h-6 text-slate-400 hover:text-slate-500"
            onClick={() => setActive(!active)}
          />
        </button>
      </div>
    </div>
  )
}

export default Tags
