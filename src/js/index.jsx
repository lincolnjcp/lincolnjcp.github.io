import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './containers/Root'

// import '../scss/base/tests.css';
import '../scss/tests.css';
import '../scss/app.css';


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(Root) })
}
