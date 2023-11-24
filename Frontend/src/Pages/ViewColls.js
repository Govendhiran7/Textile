import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FindData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';

export default function ViewColls() {
    const { productId } = useParams();
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
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='product-view'>
            <div className='product-container-main cardx'>
                <div className='product-img-main card-container'>
                    <img src={product.colsimg} alt='-image' className='product-cover' />
                </div>
                <div className='product-content-main'>
                    <h1 className='product-title'>{product.collections}</h1>
                    <h3 className='product-price'>Gifts: {product.gifts}</h3>
                    <h3 className='product-rating'>Offerprice: {product.offerprice}</h3>
                </div>
            </div>
            <BackBtn />
        </div>
    );
}
