import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItems } from "../redux/actions/basketActions";

const Card = ({ product }) => {
  const store = useSelector((store) => store.basket);

  const dispatch = useDispatch();

  const found = store.basket.find((i) => i.id === product.id);

  const handleClick = () => {
    if (found) {
      dispatch(updateItems(found));
    } else {
      dispatch(addToBasket(product));
    }
  };

  return (
    <div className="card py-4 px-3">
      <div className="d-flex justify-content-center">
        <img
          width={200}
          height={220}
          className="rounded"
          src={product.image}
          alt={product.model}
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>
          <span className="fw-bold me-2">{product.make}</span>
          <span>{product.model}</span>
        </p>

        <p className="d-flex flex-column">
          {product.specs.map((spec, i) => (
            <span key={i}>{spec}</span>
          ))}
        </p>
        <button onClick={handleClick} className="w-100">
          {found ? `Miktarı Artır (${found.amount})` : "Sepete Ekle"}
        </button>
      </div>
    </div>
  );
};

export default Card;
