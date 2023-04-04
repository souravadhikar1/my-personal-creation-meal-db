import React from "react";
import { useNavigate } from "react-router-dom";

const SingleMeal = ({ meal }) => {
  // console.log(meal);
  const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
    meal;
  const navigate = useNavigate();

  const handleMeal = () => {
    navigate(`/meal/${idCategory}`);
  };

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5">
        <figure>
          <img src={strCategoryThumb} alt="food" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-500 text-2xl">
            Items: {strCategory}{" "}
          </h2>
          <p className="text-2xl font-bold text-pink-500">
            Our Meal ID: {idCategory}
          </p>
          <div className="card-actions justify-center">
            <button onClick={handleMeal} className="btn btn-info">
              Show me meal info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
