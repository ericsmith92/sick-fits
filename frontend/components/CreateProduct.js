import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import { ALL_PRODUCTS_QUERY } from './Products';
import Router from 'next/router';

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION(
        #which variables are getting passed in?
        #what types are they?
        $name: String!
        $description: String!
        $price: Int!
        $image: Upload

    ){
        createProduct(data:{
            name: $name
            description: $description
            price: $price
            status: "AVAILABLE"
            photo: {
                create: {
                    image: $image,
                    altText: $name
                }
            }
        }){
            id
            price
            description	
            name
        }
    }`;

export default function CreateProduct(){
    
    const{ inputs, handleChange, clearForm, resetForm } = useForm({
        image: '',
        name: 'Tingz',
        price: 342567,
        description: 'Tingz be poppin off',
    });

    const [ createProduct, { loading, error, data } ] = useMutation(CREATE_PRODUCT_MUTATION, {
        variables: inputs,
        refetchQueries: [{ query: ALL_PRODUCTS_QUERY }]
    });

    return(
        <Form onSubmit={async (e) => {
            e.preventDefault();
            //the data we are sending
            //our function we got from useMutation() hook, we passed our query and vars above
            const res = await createProduct();
            clearForm();
            //go to that products page
            Router.push({
                pathname: `/production/${res.data.createProduct.id}`
            });
        }}>
            <fieldset disabled={loading} aria-busy={loading}>
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
