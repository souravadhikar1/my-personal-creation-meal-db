import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleMeal from "../SingleMeal/SingleMeal";

const Meals = () => {
  const meals = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold">This our offers dish for you</h1>
      <div className="mt-5 grid md:grid-cols-3">
        {meals.categories.map((meal) => (
          <SingleMeal meal={meal} key={meal.idCategory}></SingleMeal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
