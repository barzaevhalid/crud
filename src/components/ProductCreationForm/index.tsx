import React, { useState } from "react";
import s from "./ProductCreationForm.module.css";
import styled from "styled-components";

import Input from "../Input";
import Button from "../Button";

import { ProductModel } from "../../models/product.model";

interface FormProps {
    onSubmit: (product: Partial<ProductModel>) => void;
}

const InputWrapper = styled.div`
    margin-top: 20px;
`;
const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    margin-top: 10px;
    resize: none;
`;

const WarningMassage = styled.div`
    color: red;
    font-size: 30px;
    font-weight: 700;
`;
const ProductCreationForm = ({ onSubmit }: FormProps) => {
    const [stateForm, setStateForm] = useState({
        description: "",
        title: "",
    });
    const [isTitleFocus, setIsTitleFocus] = useState<boolean | null>(null);
    const onFocusInput = () => {
        if (!stateForm.title) {
            setIsTitleFocus(true);
        } else {
            setIsTitleFocus(false);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({
            title: stateForm.title,
            description: stateForm.description,
        });
    };
    const onInputValueChange = (text: string) => {
        setStateForm(prevState => ({ ...prevState, title: text }));
        setIsTitleFocus(true);
    };
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <InputWrapper>
                <Input
                    onBlur={onFocusInput}
                    innerClassName={s.inputForm}
                    type='text'
                    placeholder='Заголовок'
                    onInputValueChange={onInputValueChange}
                />
                {!stateForm.title && isTitleFocus && <WarningMassage>Введите заголовок</WarningMassage>}
            </InputWrapper>
            <div>
                <TextArea onChange={e => setStateForm(prevState => ({ ...prevState, description: e.target.value }))} />
            </div>
            <Button type='submit' innerClassName={s.modalButton} disabled={!stateForm.title}>
                Create
            </Button>
        </form>
    );
};

export default ProductCreationForm;
