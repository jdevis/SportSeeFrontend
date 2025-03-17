import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/index.jsx'
import SideBar from './components/SideBar/index.jsx'
import Home from './pages/Home/index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'
import Error from './pages/Error/index.jsx'
import '../src/assets/styles/index.scss'

createRoot(document.getElementById('root')).render(
	<StrictMode>
			<Router>
				<Header />
				<main>
					<SideBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/user/:id" element={<Dashboard />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</main>
			</Router>
	</StrictMode>
)
