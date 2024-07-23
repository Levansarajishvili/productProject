// src/App.js
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import AddProductForm from './components/AddProductForm';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleSave = (updatedProduct) => {
        fetch(`https://fakestoreapi.com/products/${updatedProduct.id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(savedProduct => {
            setProducts(products.map(product =>
                product.id === savedProduct.id ? savedProduct : product
            ));
        })
        .catch(error => console.error('Error updating product:', error));
    };

    const handleAdd = (newProduct) => {
        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(addedProduct => {
            setProducts([...products, addedProduct]);
        })
        .catch(error => console.error('Error adding product:', error));
    };

    const handleDelete = (productId) => {
        fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => {
            setProducts(products.filter(product => product.id !== productId));
        })
        .catch(error => console.error('Error deleting product:', error));
    };

    return (
        <div className="App">
            <h1>Product Cards</h1>
            <AddProductForm onAdd={handleAdd} />
            <div className="card-container">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onSave={handleSave} 
                        onDelete={handleDelete} 
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
