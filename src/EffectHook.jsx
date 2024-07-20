// import { useState, useEffect } from "react";

// function Timer(){
//     const [count, setCount]=useState(0);

//     useEffect(()=>{
//        const timer = setTimeout(()=>{
//             setCount((count)=>count+1);
//         },1000);

//         return()=>clearTimeout(timer);
//     });

    
//     return <h1>I've rendered {count} times! </h1>;
// }

// export default Timer;

//2 ways to fetch from API
//1. Browser inbuilt features -> fetch()
//2. custom package -> axios

//----------------recipe-----------------------------------------

// import { Card, Alert } from "react-bootstrap";
// import React, { useState, useEffect } from "react";

// const EffectHook = () => {
//     const [recipes, setRecipes] = useState([]);
//     const [search, setSearch] = useState("");

//     useEffect(() => {
//         const controller = new AbortController();
//         const fetchData = async () => {
//             try {
//                 const data = await fetch(`https://dummyjson.com/recipes/search?q=${search}`, {
//                     signal: controller.signal,
//                 });
//                 const result = await data.json();
//                 console.log("Fetched data:", result); // Debugging log
//                 setRecipes(result?.recipes || []); // Ensure the result has the recipes key
//             } catch (error) {
//                 if (error.name !== "AbortError") {
//                     console.error("Fetch error:", error); // Debugging log
//                 }
//             }
//         };
//         if (search) {
//             fetchData();
//         } else {
//             setRecipes([]);
//         }
//         return () => {
//             controller.abort();
//         };
//     }, [search]);

//     return (
//         <div className="container m-5">
//             <div className="row">
//                 <h1 className="text-center">Recipes</h1>
//             </div>
//             <div className="row mb-2">
//                 <div className="col-md-6">
//                     <input
//                         placeholder="Search any recipes"
//                         className="form-control"
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                 </div>
//             </div>
//             <div className="row mb-2">
//                 {recipes.length > 0 ? (
//                     recipes.map((recipe) => (
//                         <div key={recipe?.id} className="col-md-4">
//                             <Card style={{ width: "18rem" }}>
//                                 <Card.Img variant="top" src={recipe?.image} />
//                                 <Card.Body>
//                                     <Card.Title>{recipe?.name}</Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     ))
//                 ) : (
//                     <div className="col-md-12">
//                         <Alert variant="danger" className="text-center">
//                             No recipes found!!
//                         </Alert>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default EffectHook;



//---------------product list----------------------------------------
import { Card, Alert } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const EffectHook = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const data = await fetch(`https://dummyjson.com/products/search?q=${search}`, {
                    signal: controller.signal,
                });
                const result = await data.json();
                console.log("Fetched data:", result); // Debugging log
                setProducts(result?.products || []); // Ensure the result has the products key
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Fetch error:", error); // Debugging log
                }
            }
        };
        if (search) {
            fetchData();
        } else {
            setProducts([]);
        }
        return () => {
            controller.abort();
        };
    }, [search]);

    return (
        <div className="container m-5">
            <div className="row">
                <h1 className="text-center">Products</h1>
            </div>
            <div className="row mb-2">
                <div className="col-md-6">
                    <input
                        placeholder="Search any products"
                        className="form-control"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mb-2">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product?.id} className="col-md-4">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={product?.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{product?.title}</Card.Title>
                                    <Card.Text>{product?.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <div className="col-md-12">
                        <Alert variant="danger" className="text-center">
                            No products found!!
                        </Alert>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EffectHook;


