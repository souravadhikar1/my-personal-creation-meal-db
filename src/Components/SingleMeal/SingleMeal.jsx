import React from "react";

const SingleMeal = ({ meal }) => {
  console.log(meal);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5">
        <figure>
          <img src="" alt="food" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
