import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EditData, FindData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';
import VerifyCheck from './Auth/VerifyCheck';

export default function EditColls() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        collections: '',
        gifts: '',
        price: '',
        offerprice: '',
        colsimg: '',
    });

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await FindData(productId);
            setProduct(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

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
            await EditData(productId, product);
            alert('Collection Updated !');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <VerifyCheck/>
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card'>
                    <label>Collection</label>
                    <input type='text' placeholder='Collection' name='collection' value={product.collections} onChange={handleInputChange} className='product-input' required />
                    <label>Gifts</label>
                    <input type='text' placeholder='Gifts' name='gifts' value={product.gifts} onChange={handleInputChange} className='product-input' required />
                    <label>Price</label>
                    <input type='number' placeholder='Price' name='price' value={product.price} onChange={handleInputChange} className='product-input' required />
                    <label>Offer Price</label>
                    <input type='number' placeholder='Offer Price' name='offerprice' value={product.offerprice} onChange={handleInputChange} className='product-input' required />
                    <label>Collection Image URL</label>
                    <input type='text' placeholder='Collection img URL' name='colsimg' value={product.colsimgimg} onChange={handleInputChange} className='product-input' required />
                    <button type='submit' className='button2'>Update</button>
                </form>
            </div>
            <BackBtn />
        </div>
    );
}
