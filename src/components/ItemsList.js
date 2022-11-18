import { useSelector, useDispatch } from "react-redux";
import { addFavourite } from "../features/account/accountSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ItemsList() {
	const products = useSelector((state) => state.products.value);
	const user = useSelector((state) => state.account.value);
	const account = useSelector((state) => state.account.value);
	const navigate = useNavigate();
	console.log("userStatuS", account.status);
	const checkIfFavourite = (id) => {
		const result = user.favourites.find((fav) => fav === id);
		return result;
	};

	const dispatch = useDispatch();
	// console.log(products);
	return (
		<section className="category" data-name="Boat">
			<h2>List</h2>
			<div className="category__container">
				{products.map((item) => (
					<div className="product">
						<button
							className="product__favourite"
							onClick={() => {
								if (account.status) {
									dispatch(addFavourite(item.id));
								} else {
									navigate("/account");
								}
							}}
						>
							<img
								src={
									checkIfFavourite(item.id)
										? "/images/product__favourite--true.png"
										: "/images/product__favourite.png"
								}
								alt="favourite"
								height="20"
							/>
						</button>
						<Link to={"details/" + item.id}>
							<img
								src={"/images/products/" + item.img + ".png"}
								className="product__img"
								alt={item.title}
								height="80"
							/>
						</Link>
						<p className="product__title">{item.title}</p>
						{item.sale && (
							<div className="product__sale">
								<span className="product__sale--old">${item.price}</span>
								<span className="product__sale--percent">
									-{item.salePercent}%
								</span>
							</div>
						)}

						<div className="product__info">
							<span className="product__price">
								${item.price - (item.price * (item.salePercent || 0)) / 100}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
