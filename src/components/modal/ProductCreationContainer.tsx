import React, { useState } from "react";
import Modal from "./popup/Modal";
import { ProductModel } from "../../models/product.model";
import { createProductApi } from "../../services/product-api.service";
import { useAppDispatch } from "../../store/store";
import { setProduct } from "../../store/product/product.slice";
import Button from "../Button";
import ProductCreationForm from "../ProductCreationForm";

import s from "./ProductCreationContainer.module.css";

const ProductCreationContainer = () => {
    const [modalActive, setModalActive] = useState(false);
    const dispatch = useAppDispatch();

    const openModal = () => {
        setModalActive(true);
    };

    const closeModal = () => {
        setModalActive(false);
    };

    const onSubmit = async (product: Partial<ProductModel>) => {
        setModalActive(false);

        const data = await createProductApi(product);

        dispatch(
            setProduct({
                ...data,
                id: Math.floor(Math.random() * 100000),
                image: "https://bing.ioliu.cn/v1/rand",
                price: Math.floor(Math.random() * 100),
            })
        );
    };

    return (
        <div>
            {modalActive && (
                <Modal closeModal={closeModal} title='Create Product'>
                    <ProductCreationForm onSubmit={onSubmit} />
                </Modal>
            )}
            <Button onClick={openModal} innerClassName={s.openModalBtn}>
                Add
            </Button>
        </div>
    );
};

export default ProductCreationContainer;
