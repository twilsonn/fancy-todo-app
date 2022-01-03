import React from 'react'
import { useAppSelector } from 'hooks'
import { motion } from 'framer-motion'

const InteractionBar: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.present)
  return todos.filter ? (
    <motion.div
      initial={{ height: '0', opacity: 0 }}
      animate={{ height: 'auto', opacity: '1' }}
      className="flex items-center h-10"
    >
      <span className="mr-3">Filters: </span>
      <span className="inline-flex items-center py-2.5 px-3 mr-1 text-sm font-medium rounded-full text-slate-700 bg-slate-200">
        {todos.filter}
      </span>
    </motion.div>
  ) : null
}

export default InteractionBar
