
// import React, { useState } from "react";
// const StateHookArray=()=>{

//     const [data, setData]=useState([
//         {name:"anji"},
//         {name: "sans"},
//         {name: "miku"},
//         {name: "rekh"},
//     ]);

//     const handleInputChange = (index, event) => {
//         const newData = [...data];
//         newData[index].name = event.target.value;
//         setData(newData);
//     };


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({ data });
//     };


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//             <ul>
//                 {data.length>0 &&
//                     data.map((item,index)=>{
//                         return(
//                             <>
//                                 <li key={index}>{item?.name}</li>
//                                 <input placeholder="correct the name"   
//                                 onChange={(e) => handleInputChange(index, event)}
//                                 />
//                             </>
//                         );
//                     })}
//             </ul>
//             </form>
//         </div>
//     )
// };

// export default StateHookArray;

import { useEffect, useState } from "react";
import { Card, Alert, Container, Row, Col, FormControl } from "react-bootstrap";

const Ecomdummy = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${search}`,
        { signal: controller.signal }
      );
      const result = await response.json();
      setProducts(result.products);
      console.log(result);
    };

    fetchProducts();

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
            placeholder="Search the products"
            onChange={(e) => handleChange(e.target.value)}
          />
        </Col>
      </Row>

      {products.length > 0 ? (
        <Row>
          {products.map((product) => (
            <Col key={product?.id} md={4} className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{product?.brand}</Card.Title>
                  {product?.images && product.images.length > 0 && (
                    <Card.Img
                      variant="top"
                      src={product.images[0]}
                      alt={product?.brand}
                      style={{
                        objectFit: "cover",
                        height: "200px",
                        width: "100%",
                      }}
                    />
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          <Col>
            <Alert variant="danger">Your Data Not Found</Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Ecomdummy;