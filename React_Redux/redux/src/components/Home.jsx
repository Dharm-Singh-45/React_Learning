import React from "react";

const Home = (props) => {
  console.log("praops at home", props);
  return (
    <div>
      
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://th.bing.com/th/id/R.7622dbd87c4e2cd19ca63915efe25b04?rik=6CdrawVaIDKKHA&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>Iphone-16</span>
          <span>Price:$1000</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              console.log("Button clicked");
              props.addToCartHandler({ price: 1000, name: "iphone-16" });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
