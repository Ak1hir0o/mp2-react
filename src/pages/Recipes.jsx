import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/Recipe.css";

const SearchMeals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchNotFound, setSearchNotFound] = useState(false);

  const handleSearch = async () => {
    if (/^\d+$/.test(searchTerm)) {
      // Check if searchTerm is a number
      alert("Please enter a valid search term without numbers.");
      return;
    }

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setMeals(response.data.meals);
      setSearchNotFound(response.data.meals === null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  const handleBackClick = () => {
    setSelectedMeal(null);
  };

  if (selectedMeal) {
    return (
      <Container>
        <button onClick={handleBackClick}>Back</button>
        <h3>{selectedMeal.strMeal}</h3>
        <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
        <h4>Ingredients:</h4>
        <ul>
          {Object.entries(selectedMeal)
            .filter(([key, value]) => key.startsWith("strIngredient") && value)
            .map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
        </ul>
        <h4>Cooking Procedure:</h4>
        <p>{selectedMeal.strInstructions}</p>
      </Container>
    );
  }

  return (
    <Container>
      <input
        className="recipies"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchNotFound ? (
        <p>Search not found.</p>
      ) : (
        <Row>
          {meals.map((meal) => (
            <Col key={meal.idMeal} sm={6} md={4} lg={3}>
              <Card onClick={() => handleMealClick(meal)}>
                <Card.Img
                  variant="top"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
                <Card.Body>
                  <Card.Title>{meal.strMeal}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchMeals;
