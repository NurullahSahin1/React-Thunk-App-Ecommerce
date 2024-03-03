import React from "react";
import {
  deleteItems,
  removeItem,
  updateItems,
} from "../redux/actions/basketActions";
import { useDispatch } from "react-redux";

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="rounded-2 p-4 bg-white d-flex justify-content-between text-black mb-5">
      <div
        className="d-flex align-items-center gap-3
        "
      >
        <img className="rounded-3" width={60} src={product.image} alt="" />
        <h4>
          <span>{product.make}</span>
          <span>{product.model}</span>
        </h4>
        <h4 className="text-success">{product.price} TL</h4>
      </div>
      <div className="d-flex align-align-items-center gap-3">
        <h6>Miktar: {product.amount}</h6>
        <button
          onClick={() => dispatch(updateItems(product))}
          className="btn btn-sm btn-primary"
        >
          +
        </button>
        <button
          onClick={() =>
            dispatch(
              product.amount == 0
                ? removeItem(product.id)
                : deleteItems(product)
            )
          }
          className="btn btn-sm btn-danger"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
