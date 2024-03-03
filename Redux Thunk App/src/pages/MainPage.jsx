import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setProduct,
} from "../redux/actions/productActions";
import Loader from "../components/Loader";

const MainPage = () => {
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();
  console.log(store);

  useEffect(() => {
    dispatch(setLoading());
    axios
      .get("http://localhost:3050/products")
      .then((res) => dispatch(setProduct(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, []);
  return (
    <div className="container p-5 ">
      {/* Veriler yükleniyorsa */}

      {store.isLoading && <Loader />}

      {/* Hata oluştuysa */}
      {store.isError && <h1 className="text-center my-5">{store.isError}</h1>}

      {/* veriler geldiyse */}
      {store?.products.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default MainPage;
