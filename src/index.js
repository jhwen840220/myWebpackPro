import React from 'react'

import ReactDom from 'react-dom'

function App() {
  return <div style={{color: 'red'}}>i'm a react</div>
}

ReactDom.render(<App></App>, document.getElementById('app'))