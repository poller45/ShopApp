import { useSelector } from "react-redux";
export default function FavouritesList() {
  const isUserLogin = useSelector((state) => state.account.value);
  const userFavourites = useSelector((state) => state.account.value.favourites);
  const products = useSelector((state) => state.products.value);
  const listOfFavourites = userFavourites.map((idFav) => {
    const result = products.find((item) => item.id === idFav);
    return result;
  });
  console.log(isUserLogin);
  if (!isUserLogin) {
    // redirect
    return <div>Please Login</div>;
  }

  return (
    <div className="favourites__container">
      <div className="table__container">
        <table className="order__table">
          <caption>Favourite Items</caption>
          <thead>
            <tr>
              <th>Item Description</th>
              <th>Price</th>
              <th>Sale</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listOfFavourites.map((item) => (
              <tr>
                <td>
                  <div className="item__info">
                    <img
                      src={"images/products/" + item.img + ".png"}
                      alt="Cabriolet"
                      height="100"
                    />
                    <div>
                      <p className="item__info--title">{item.title}</p>
                    </div>
                  </div>
                </td>
                <td>${item.price}</td>
                <td>
                  {item.sale && (
                    <span className="item__sale">- {item.salePercent}%</span>
                  )}
                </td>
                <td>
                  ${item.price - (item.price * (item.salePercent || 0)) / 100}
                </td>
                <td>
                  <button className="item__favourite">
                    <img
                      src="images/product__favourite--true.png"
                      alt="favourite"
                      height="20"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
