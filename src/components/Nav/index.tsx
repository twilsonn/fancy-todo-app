import CreateNewTodo from 'components/CreateNewTodo'

import React from 'react'

const Nav: React.FC<unknown> = () => {
  return (
    <nav className="py-5 px-8 w-full bg-white rounded-2xl shadow-md shadow-slate-200">
      <ul className="flex justify-between">
        <li className="flex items-center">
          <h2 className="text-2xl font-semibold">Todo List 🎄</h2>
        </li>

        <li>
          <CreateNewTodo />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
