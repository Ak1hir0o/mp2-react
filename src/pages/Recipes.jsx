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
    <title>FOODIE</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    
    <style>
      body {
        background-color: red;
       
      }
      .card {
        background: transparent;
        margin-bottom: 20px;
        border: none;
      }
      img {
        height: 500px;
        width: 100%;
        object-fit: cover;
      }
      
      h1.card-title {
        text-align: center;
        font-family: "Roboto Mono", monospace;
        color: #2c2c2c;
        font-size: 70px;
        margin-bottom: 20px;
        font-weight: lighter;
        padding: 0;
      }

      p.card-text {
        font-family: "Roboto Mono", monospace;
        color: black;
        font-size: 25px;
        margin-bottom: 25px;
        letter-spacing: 2px;
      }

      h5.card-title {
        font-family: "Roboto Mono", monospace;
        color: black;
        font-size: 25px;
        margin-bottom: 25px;
        letter-spacing: 2px;
      }

      li {
        font-family: "Roboto Mono", monospace;
        color: #2c2c2c;
        font-size: 18px;
        margin-bottom: 45px;
        letter-spacing: 1px;
      }

    </style>
  </head>
  <body>
  <img src="${details.strMealThumb}" alt="${
        details.strMeal
      }" />
    <div class="container">
      <div class="row">
            <div class="card-body">
              <h1 class="card-title">${
                details.strMeal
              }</h1>
              <p class="card-text"><strong>Ingredients:</strong> ${
                details.strIngredient1
              }, ${details.strIngredient2}, ${
        details.strIngredient3
      }
              <h5 class="card-title">Procedure:</h5>
              <ul>
                ${details.strInstructions
                  .split("\n")
                  .filter(
                    (step) => step.trim() !== ""
                  )
                  .map(
                    (step, index) =>
                      `<li>${step}</li>`
                  )
                  .join("")}
              </ul>
              <div class="card">
            <div class="card-body">
              <h5 class="card-title">YouTube Video</h5>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${details.strYoutube.slice(
                  -11
                )}" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
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
      <section className="recipes-section">
        <h1>Recipe Search</h1>
      </section>
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
          <Button
            type="submit"
            className="search-btn">
            Search
          </Button>
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

      <section className="recipes-section">
        <h2>Categories</h2>
      </section>
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
