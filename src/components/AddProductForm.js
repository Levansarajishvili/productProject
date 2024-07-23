import React, { useState } from 'react';
import './AddProductForm.css';

const AddProductForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price: parseFloat(price),
            description,
            image,
            category,
        };

        onAdd(newProduct);

        setTitle('');
        setPrice('');
        setDescription('');
        setImage('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-product-form">
            <h2>Add New Product</h2>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
    
            <div>
                <label>Category:</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
