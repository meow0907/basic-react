// import { useState } from "react";
// import { Button } from "react-bootstrap";
// const StateHook=()=>{
//     const [color, setColor]= useState("red");
//     const [userColor, setUserColor]=useState("");
//     return(
//     <>
//         <div className="container m-5"></div>
//         <input placeholder="Enter your color" className="form-group" onChange={(e)=>setUserColor(e.target.value)}/>
//         <Button variant="danger" onClick={()=>setColor(userColor)}>Change</Button>
//         <div>I have {color} color ball</div>
//     </>
//     );
    
// };

// export default StateHook;

import { useEffect, useState } from "react";
import { Container, Row, Col, FormControl, Card, Alert } from "react-bootstrap";

const Reactdummy = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${search}`,
        { signal: controller.signal }
      );
      const result = await response.json();
      setRecipes(result.recipes);
    };
    fetchData();
    return () => controller.abort();
  }, [search]);

  const handleChange = (value) => {
    setSearch(value);
  };

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <FormControl
            placeholder="Search any recipes"
            className="form-control"
            onChange={(e) => handleChange(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Col key={recipe.id} md={4} className="mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={recipe.image} alt={recipe.name} style={{ objectFit: 'cover', height: '200px', width: '100%' }} />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          search && (
            <Col>
              <Alert variant="danger">No recipes found</Alert>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};

export default Reactdummy;
