import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
    <a href='https://google.com' target='_blank'>Click me to visit google.</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://youtube.com', target: '_blank'},
    'Click me to Visit GOOGLE',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // anotherElement
    reactElement
    // <App />
  
)
