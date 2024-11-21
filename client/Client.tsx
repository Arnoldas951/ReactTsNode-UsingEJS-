import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'

const container = document.getElementById('root')!;
 
ReactDOM.hydrateRoot(container, <App/>);