import React from 'react'
import { render } from 'react-dom'

const App = () => {
  return <div>hi</div>
}
// console.log(import.meta.env.VITE_API_URL)

const rootElement = document.getElementById('root')
render(<App />, rootElement)
