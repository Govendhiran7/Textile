import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';
import VerifyCheck from './Auth/VerifyCheck';

export default function AddColls() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        collections: '',
        gifts: '',
        price: '',
        offerprice: '',
        colsimg: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await AddData(product);
            alert('Collection added!');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <VerifyCheck/>
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card '>
                    <input type='text' placeholder='Collection' name='collections' value={product.collections} onChange={handleInputChange} className='product-input' required/>
                    <input type='text' placeholder='Gifts' name='gifts' value={product.gifts} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='Price' name='price' value={product.price} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='Offer Price' name='offerprice' value={product.offerprice} onChange={handleInputChange} className='product-input' required />
                    <input type='text' placeholder='Collection img URL' name='colsimg' value={product.colsimg} onChange={handleInputChange} className='product-input' required />
                    <button type='submit' className='button2'>Add Collection</button>
                </form>
            </div>
            <BackBtn />
        </div>
    );
}
