import { Route, Routes } from "react-router-dom"
import { Login, Main, Navbar, Register } from "./components"

export const App = () => {
	return (
		<>
		<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	)
}
