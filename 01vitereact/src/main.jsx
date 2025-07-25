import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'
import Tile from './new.jsx'

function MyApp (){
    return (
        <div>
            <h1>Custom App! </h1>
            </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//         children: 'Google',
// }

const anotherElement =(
    <a href="https://google.com" target="_blank">Visit google</a>
        
)

const myname="Sweta"

const ReactElement=React.createElement(
    'a',
    { href:'https://google.com', target: '_blank' },
    'Google', myname
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  
   ReactElement 
 
)
 