import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Chai from './chai.jsx'



function MyApp(){
  return(
    <h1>Hey React</h1>
  )
};


const customeReactElement = {
  type: 'a',
  props:{
      href:"https://www.google.com/",
      target:"_blank"
  },
  children:"Click me to visit Google"
  
}

const reactElement = React.createElement(
  'a',
  {
    href:"https://www.google.com/",
    target:"_blank"
  },
  "Click me to visit Google"
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp />
    // MyApp()
    // customeReactElement
    // reactElement
    <App/>

)
