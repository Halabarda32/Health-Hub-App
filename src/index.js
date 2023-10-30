import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './views/App'
import { worker } from './mocks/browser'
import AppProviders from './store/AppProviders'

worker.start()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<AppProviders>
			<App />
		</AppProviders>
	</React.StrictMode>
)
