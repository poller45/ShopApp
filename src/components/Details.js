import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Details() {
	let { itemId } = useParams();
	const item = useSelector((state) =>
		state.products.value.find((el) => el.id === parseInt(itemId))
	);

	console.log(item);
	return (
		<section>
			<h1>{item.title}</h1>
			<div>
				<img src={"/images/products/" + item.img + ".png"} alt="" />
			</div>
		</section>
	);
}
