import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { ProductModel } from '../models/product.model';

interface IFormProps {
    onSubmit: (product: Partial<ProductModel>) => void;
}

const ProductCreationForm: React.FC<IFormProps> = ({ onSubmit }) => {
    const [stateForm, setStateForm] = useState({
        description: '',
        title: '',
    });
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({
            title: stateForm.title,
            description: stateForm.description,
        });
    };
    const onInputValueChange = (text: string) => {
        setStateForm(prevState => ({ ...prevState, title: text }));
    };
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div>
                <Input
                    type='text'
                    placeholder='Заголовок'
                    className='modalTitle'
                    onInputValueChange={onInputValueChange}
                />
            </div>
            <div>
                <textarea onChange={e => setStateForm(prevState => ({ ...prevState, description: e.target.value }))} />
            </div>
            <Button type='submit' innerClassName='modalButton'>
                create
            </Button>
        </form>
    );
};

export default ProductCreationForm;
