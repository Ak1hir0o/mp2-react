import React, {
  useState,
  useEffect,
} from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import "../styles/Recipe.css";

const Recipes = () => {
  const [categories, setCategories] = useState(
    []
  );
  const [selectedCategory, setSelectedCategory] =
    useState(null);
  const [categoryResults, setCategoryResults] =
    useState([]);

  useEffect(() => {
    fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    )
      .then((response) => response.json())
      .then((data) =>
        setCategories(data.categories)
      )
      .catch((error) => console.log(error));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Make another API call to get the results for the selected category
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
    )
      .then((response) => response.json())
      .then((data) =>
        setCategoryResults(data.meals)
      )
      .catch((error) => console.log(error));
  };

  const openDetailsWindow = (result) => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${result.strMeal}`
    )
      .then((response) => response.json())
      .then((data) => {
        const details = data.meals[0];
        const detailsWindow = window.open(
          "",
          "_blank"
        );
        detailsWindow.document.write(`
          <html>
            <head>
              <title>Meal Details</title>
            </head>
            <body>
              <h1>${details.strMeal}</h1>
              <img src="${details.strMealThumb}" alt="${details.strMeal}" />
              <p><strong>Ingredients:</strong> ${details.strIngredient1}, ${details.strIngredient2}, ${details.strIngredient3}, ...</p>
              <p><strong>Procedure:</strong> ${details.strInstructions}</p>
            </body>
          </html>
        `);
        detailsWindow.document.close();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <h1>Categories</h1>
      <Row>
        {categories.map((category) => (
          <Col
            key={category.idCategory}
            sm={6}
            md={4}
            lg={3}>
            <Card>
              <Card.Img
                variant="top"
                src={category.strCategoryThumb}
              />
              <Card.Body>
                <Card.Title>
                  {category.strCategory}
                </Card.Title>
                <Button
                  onClick={() =>
                    handleCategoryClick(category)
                  }>
                  View Category
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedCategory && (
        <>
          <h2>
            Results for{" "}
            {selectedCategory.strCategory}
          </h2>
          <Row>
            {categoryResults.map((result) => (
              <Col
                key={result.idMeal}
                sm={6}
                md={4}
                lg={3}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={result.strMealThumb}
                  />
                  <Card.Body>
                    <Card.Title>
                      {result.strMeal}
                    </Card.Title>
                    <Button
                      onClick={() =>
                        openDetailsWindow(result)
                      }>
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};
export default Recipes;
