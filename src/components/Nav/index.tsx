import CreateNewTodo from 'components/CreateNewTodo'

import React from 'react'
import Settings from './Settings'

const Nav: React.FC<unknown> = () => {
  return (
    <nav className="py-5 px-8 mb-3 w-full bg-white rounded-2xl shadow-md shadow-slate-200">
      <ul className="flex justify-between">
        <li className="flex items-center">
          <h2 className="text-2xl font-semibold">Todo List</h2>
        </li>

        <li className='flex'>
          <CreateNewTodo />
          <div className='w-2' />
          <Settings />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
