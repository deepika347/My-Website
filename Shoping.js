import React, { useState } from "react"; 
export default function Shop(){
    const [cart, setCart] = useState([]);
    const [Product] = useState ([  
        {
            name:"Shoes",
            cost:"$350",
            image:"https://tse3.mm.bing.net/th?id=OIP.JtUpnx65lJYBrZf_Yww5NwHaE7&pid=Api&P=0&h=180",
        },
        {
            name:"sleeper",
            cost:"$250",
            image:"https://tse4.mm.bing.net/th?id=OIP.8UuyMSu_Isb79FJM-WTF-QHaFj&pid=Api&P=0&h=180",
        }
    ])  

    const addToCart = (product) => {
        console.log("we are in add to cart");
        setCart([...cart, {...product}]);
    };

    const  removeFromCart = (productToRemove) => {
        console.log("we remove the product");
        setCart(cart.filter((product) => product !== productToRemove )
        );
    };
    return(
        <div className="first">
        <header>
        <div className="btn">
            <button>Go to cart({cart.length})</button>
            <button>View-Products </button>
        </div>
        </header>
        <h1>Products</h1>
        <div className="second">
        {Product.map((product) =>(
            <div>
                <h3>{product.name}</h3>
                <h3>{product.cost}</h3>
                <div className="img">
                <img src={product.image} alt={product.name}/>
                </div>
                <br/>
                <div className="btn">
                <button onClick={() => addToCart(product)}>Add to cart</button>
                <button onClick={() => removeFromCart(product)}>Remove</button>
                </div>
            </div>
        ))}
        </div>
        </div>
    )
};
