import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getData } from "../redux/actions/productActions";
import Card from "../components/Card";
import { getBasket } from "../redux/actions/basketActions";

const HomePage = () => {
  const store = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());

    dispatch(getBasket());
  }, []);
  return (
    <div className="container p-5 ">
      {/* Veriler yükleniyorsa */}

      {store.isLoading && <Loader />}

      {/* Hata oluştuysa */}
      {store.isError && <h1 className="text-center my-5">{store.isError}</h1>}

      {/* veriler geldiyse */}
      <div className="d-flex flex-wrap gap-5 justify-content-center m-5">
        {store?.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
