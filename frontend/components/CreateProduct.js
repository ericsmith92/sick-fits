import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct(){
    
    const{ inputs, handleChange, clearForm, resetForm } = useForm({
        image: '',
        name: 'Tingz',
        price: 342567,
        description: 'Tingz be poppin off',
    });

    return(
        <Form onSubmit={(e) => e.preventDefault()}>
            <fieldset>
                <label htmlFor='image'>
                    <input 
                        type='file' 
                        name='image' 
                        id='image' 
                        onChange={handleChange}
                        required
                    /> 
                </label>
                <label htmlFor='name'>
                    Name
                    <input 
                        type='text' 
                        name='name' 
                        id='name' 
                        placeholder='Name' 
                        value={inputs.name} 
                        onChange={handleChange}
                    /> 
                </label>
                <label htmlFor='price'>
                    Price
                    <input 
                        type='number'
                        id='price'
                        name='price'
                        placeholder='price'
                        value={inputs.price}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='description'>
                    Description
                    <textarea
                        id='description'
                        name='description'
                        placeholder='Description'
                        value={inputs.description}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <button type='submit'>+ Add Product</button>
            </fieldset>
        </Form>
    )
}
