import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    const name = "Bilal";
    return (
        <div>
            <h1>{name}'s Custom App</h1>
        </div>
    )
}

// const domElement = {
//     type: "a",
//     properties: {
//         href: "https://www.google.com",
//         target: "_blank"
//     }, 
//     children: "Click to visit Google"
// };

const otherElement = (
    <a href="https://www.google.com" target="_blank">Google</a>
)

const name = "Bilal";
const reactElement = React.createElement(
    "a",
    {href: "https://www.google.com", target: "_blank"},
    "Visit Google!",
    name
)

createRoot(document.getElementById('root')).render(
    reactElement
)
