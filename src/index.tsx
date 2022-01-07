import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import NewStore from './store'

import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

import './assets/index.css'

import App from 'components/App'
import { PersistGate } from 'redux-persist/integration/react'

const {store, persistor} = NewStore()

const Main = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </StrictMode>
  )
}

render(<Main />, document.getElementById('root'))
