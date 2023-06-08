import React, { useState } from 'react';
import Modal from './popup/Modal';
import CreateButton from '../CreateButton';
import ProductCreationForm from '../ProductCreationForm';
import { ProductModel } from '../../models/product.model';
import { createProductApi } from '../../services/product-api.service';
import { useAppDispatch } from '../../store/store';
import { setProduct } from '../../store/product/product.slice';

const ProductCreationContainer = () => {
    const [modalActive, setModalActive] = useState(false);
    const dispatch = useAppDispatch();
    const openModal = () => {
        setModalActive(true);
    };
    const closeModal = () => {
        setModalActive(false);
    };
    const handleSubmit = async (product: Partial<ProductModel>) => {
        if (!product.title) {
            alert('Введите заголовок');
        } else {
            setModalActive(false);
            const data = await createProductApi(product);
            dispatch(
                setProduct({
                    ...data,
                    id: Math.floor(Math.random() * 100000),
                    image: 'https://bing.ioliu.cn/v1/rand',
                    price: Math.floor(Math.random() * 100),
                })
            );
        }
    };
    return (
        <div>
            {modalActive && (
                <Modal closeModal={closeModal} title='Create Product'>
                    <ProductCreationForm onSubmit={handleSubmit} />
                </Modal>
            )}
            <CreateButton openModal={openModal} />
        </div>
    );
};

export default ProductCreationContainer;
