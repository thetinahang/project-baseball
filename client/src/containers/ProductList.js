import React from 'react'; 

  const ProductList = (props) => {
 	function listProducts() {
 		return props.products.map((product, id) => {
 			return (
 				<div key={id}>
 					<h1>{product.name}</h1>
 				</div>
 			)
 		})
 	}

  	return (
 		<div>
 			{listProducts()}
 		</div>
 	)
 }

export default ProductList; 