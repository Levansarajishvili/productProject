import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onSave, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleSave = () => {
        onSave(editedProduct);
        setIsEditing(false);
    };

    return (
        <div className="product-card">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="title"
                        value={editedProduct.title}
                        onChange={handleChange}
                        placeholder='Name'
                    />
                    <input
                        type="number"
                        name="price"
                        value={editedProduct.price}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        value={editedProduct.description}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="image"
                        value={editedProduct.image}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="category"
                        value={editedProduct.category}
                        onChange={handleChange}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>{product.description}</p>
                    <img src={product.image} alt={product.title} />
                    <p>Category: {product.category}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(product.id)}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
