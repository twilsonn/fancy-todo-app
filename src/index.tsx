import { StrictMode } from 'react'
import { render } from 'react-dom'
import { RecoilRoot } from 'recoil'

import './assets/index.css'
import App from 'components/App'

const Main = () => {
  return (
    <StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </StrictMode>
  )
}

render(<Main />, document.getElementById('root'))
