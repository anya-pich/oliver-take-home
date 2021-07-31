import React, {useState, useEffect} from 'react';
import '../Styles/Products.scss';
import Product from './Product';

function Products () {
	const [data, setData] = useState();

	useEffect (() => {
		fetch('http://localhost:3004/products')
			.then(response => response.json())
			.then(setData)
			.catch(console.error);
	}, []);

	if (data)
		return (
			<div className="container">
				{data.map(product => <Product {...product} key={product.id} />)}
			</div>
		);
	return null;
}

export default Products;
