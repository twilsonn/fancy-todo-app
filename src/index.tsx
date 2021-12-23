import { StrictMode, useMemo, useState } from 'react'
import { render } from 'react-dom'

import './assets/index.css'
import App from 'components/App'
import AppContext, { defaultState, Todo } from 'state'

const Main = () => {
  const [todos, setTodos] = useState<Todo[]>()
  const value = useMemo(() => ({ todos, setTodos }), [todos])

  return (
    <StrictMode>
      <AppContext.Provider value={value}>
        <App />
      </AppContext.Provider>
    </StrictMode>
  )
}

render(<Main />, document.getElementById('root'))
