import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const mealDetail = useLoaderData();
  console.log(mealDetail);
  return (
    <div>
      <h2>Here is my specific meal</h2>
    </div>
  );
};

export default MealDetails;
