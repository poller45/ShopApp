import "./assets/css/style.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<Outlet />
				</div>
			</main>
		</>
	);
}

export default App;
