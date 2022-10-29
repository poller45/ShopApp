import "./assets/css/style.css";
//import { useState } from "react";
//import db from "./db";
import Header from "./components/Header";
//import FavouritesList from "./components/Favourites";
//import ItemsList from "./components/ItemsList";
import Account from "./components/Account";
function App() {
	// const [users, setUsers] = useState(db.usersDb);
	// const [products, setProducts] = useState(db.productsDb);

	return (
		<>
			<Header />
			<main>
				<div className="container">
					<Account />
				</div>
			</main>
		</>
	);
}

export default App;
