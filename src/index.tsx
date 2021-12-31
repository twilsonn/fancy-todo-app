import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import './assets/index.css'
import App from 'components/App'

const Main = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  )
}

render(<Main />, document.getElementById('root'))
