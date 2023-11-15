import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { worker } from './mocks/browser'
import AppProviders from './store/AppProviders'
import App from './views/App'

worker.start()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
		<AppProviders>
			<App />
		</AppProviders>
)
