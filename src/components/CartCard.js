import React, { useContext } from "react";
import { addItem, updateItem } from "../components/cartHelpers";

import MyContext from "../context/Context";
import Checkout from "./Checkout";

const CartCard = ({ product }) => {
  const { count, setCount } = useContext(MyContext);
  setCount(product.count);

  const handleChange = (productId) => (event) => {
    // event.preventDefault();
    // setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  // const showCartUpdateOptions = () => {
  //   return (
  //     <div>
  //       <div className="input-group mb-3">
  //         <div className="input-group-prepend">
  //           <span className="input-group-text">Adjust Quantity</span>
  //         </div>
  //         <input
  //           type="number"
  //           className="form-control"
  //           value={product.count}
  //           onChange={handleChange(product._id)}
  //         />
  //       </div>
  //     </div>
  //   );
  // };

  const showCartUpdateOptions = () => {
    return (
      <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
          <input type="number" class="form-control" id="inputPassword2" />
        </div>
        <button type="submit" class="btn btn-primary mb-2">
          Confirm identity
        </button>
      </form>
    );
  };

  return (
    <>
      <div class="card mb-3 ml-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.photoURL}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as.
              </p>
              {/* <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p> */}
              <div>{showCartUpdateOptions()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;