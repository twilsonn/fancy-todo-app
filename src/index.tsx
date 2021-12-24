import { StrictMode, useReducer } from 'react'
import { render } from 'react-dom'

import './assets/index.css'
import App from 'components/App'
import Context from 'context'
import reducer, { initialState } from './store'

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StrictMode>
      <Context.Provider value={{ state, dispatch }}>
        <App />
      </Context.Provider>
    </StrictMode>
  )
}

render(<Main />, document.getElementById('root'))
