import Container from 'components/Container'
import Context from 'context'
import React, { useContext } from 'react'

const Todo: React.FC<unknown> = () => {
  const { state } = useContext(Context)

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {state.todos?.map(({ id, title, details, tags }) => {
          return (
            <Container key={id} ClassName="prose flex flex-col h-64">
              <div>
                <h3 className="mt-0">{title}</h3>
                <p>{details}</p>
              </div>
              <div className="flex justify-end items-end space-x-2 h-full">
                {tags?.map((tag) => {
                  return (
                    <span
                      key={tag}
                      className="py-2 px-3 text-sm font-semibold rounded-full cursor-pointer bg-slate-200 hover:bg-slate-300"
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            </Container>
          )
        })}
      </div>
    </div>
  )
}

export default Todo
