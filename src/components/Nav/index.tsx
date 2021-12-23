import React from 'react'

const Nav: React.FC<unknown> = () => {
  return (
    <nav className="py-5 px-8 w-full bg-white rounded-2xl shadow-md shadow-slate-200">
      <ul className="flex justify-between">
        <li className="flex items-center">
          <h2 className="text-2xl font-semibold">Todo List</h2>
        </li>
        <li>
          <button
            type="button"
            className="py-2 px-6 font-semibold text-white rounded-lg shadow-md bg-fuchsia-500 shadow-fuchsia-200 hover:bg-fuchsia-600"
          >
            New Todo
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
