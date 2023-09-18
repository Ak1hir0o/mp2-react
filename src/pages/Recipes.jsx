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
  Form,
  Tab,
  Tabs,
} from "react-bootstrap";
import "../styles/Recipe.css";

const Recipes = () => {
  const [categories, setCategories] = useState(
    []
  );
  const firstCategory =
    categories.length > 0 ? categories[0] : null;

  const [selectedCategory, setSelectedCategory] =
    useState(null);
  const [categoryResults, setCategoryResults] =
    useState([]);
  const [searchResults, setSearchResults] =
    useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);
  useEffect(() => {
    if (firstCategory) {
      handleCategoryClick(firstCategory);
    }
  }, [firstCategory]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchCategoryResults(category.strCategory);
  };

  const fetchCategoryResults = async (
    category
  ) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setCategoryResults(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (searchTerm) => {
    // Check if the search term contains numbers or special characters
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(searchTerm)) {
      alert(
        "Invalid search term. Please enter only letters and spaces."
      );
      return;
    }

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      if (response.data.meals === null) {
        alert("No results found.");
      } else {
        setSearchResults(response.data.meals);
        setSelectedCategory(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openDetailsWindow = async (result) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${result.strMeal}`
      );
      const details = response.data.meals[0];
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
          <img src="${
            details.strMealThumb
          }" alt="${details.strMeal}" />
          <p><strong>Ingredients:</strong> ${
            details.strIngredient1
          }, ${details.strIngredient2}, ${
        details.strIngredient3
      }, ...</p>
          <p><strong>Procedure:</strong> ${
            details.strInstructions
          }</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${details.strYoutube.slice(
            -11
          )}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </body>
      </html>
    `);
      detailsWindow.document.close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>Recipe Search</h1>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          const searchTerm =
            event.target.elements.searchTerm
              .value;
          handleSearch(searchTerm);
        }}>
        <Form.Group controlId="searchForm">
          <Form.Control
            type="text"
            name="searchTerm"
            placeholder="Search for a recipe"
          />
          <Button type="submit">Search</Button>
        </Form.Group>
      </Form>

      {searchResults.length > 0 && (
        <>
          <h2>Search Results</h2>
          <Row>
            {searchResults.map((result) => (
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

      <h1>Categories</h1>
      <Tabs
        id="category-tabs"
        defaultActiveKey={
          firstCategory &&
          firstCategory.strCategory
        }
        onSelect={(category) => {
          const selectedCategory =
            categories.find(
              (cat) =>
                cat.strCategory === category
            );
          handleCategoryClick(selectedCategory);
        }}>
        {categories.map((category) => (
          <Tab
            key={category.idCategory}
            eventKey={category.strCategory}
            title={category.strCategory}></Tab>
        ))}
      </Tabs>

      {selectedCategory && (
        <>
          <section className="recipes-section">
            <h2>
              Results for{" "}
              {selectedCategory.strCategory}
            </h2>
          </section>
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
