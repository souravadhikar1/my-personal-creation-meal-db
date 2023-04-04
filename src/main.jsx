import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Meals from "./Components/Meals/Meals";
import Contact from "./Components/Contact/Contact";
import Highlight from "./Components/Highlight/Highlight";
import MealDetails from "./Components/MealDetail/MealDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Highlight></Highlight>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "meals",
        element: <Meals></Meals>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      },
      {
        path: "/meal/:mealId",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/categories.php/${params.mealId}`
          ),
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
