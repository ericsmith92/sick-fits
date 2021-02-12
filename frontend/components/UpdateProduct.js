import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/client';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import { ALL_PRODUCTS_QUERY } from './Products';

const SINGLE_PRODUCT_QUERY = gql`
    query SINGLE_PRODUCT_QUERY($id: ID!){
        Product(where: {
            id: $id
        }){
            id
            name
            price
            description
        }
    }
`;

const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION(
        #vars passed in here
        $id: ID!
        $name: String
        $description: String
        $price: Int
    ){
        updateProduct(
            #we need id AND data here since we are updating
            id: $id,
            data: {
                name: $name
                description: $description
                price: $price
            }){
                #get some shit back after updating
                id
                price
                description	
                name
            }
        }
    `;

export default function updateProduct({ id }){
    //1. we need to get the existing product
    const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, { variables: {id}});

    //remember, if we are loading none of the shit below will work, so just return loading p tag
    //if we are in that state


    //2. we need to get the mutation to update the product
    //remember, updateProduct is our setter function
    //we also rename our destructured values WHILE destructuring to avoid naming conflicts since we are using 2 hooks
    const [updateProduct, { data: updateData, error: errorLoading, loading: updateLoading }] = useMutation(UPDATE_PRODUCT_MUTATION);
    //3. we need the form to handle(post) the updates
    const{ inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);

    if(loading) return <p>Loading...</p> //nothing passed here will execute

    return(
        <Form onSubmit={async (e) => {
            e.preventDefault();
            console.log(inputs);
            //the data we are sending
            //our function we got from useMutation() hook, we passed our query and vars above
            const res = await updateProduct({
                variables: {
                    id,
                    data: {
                       name: inputs.name,
                       price: inputs.price,
                       description: inputs.description 
                    }
                },
                refetchQueries: [{ query: ALL_PRODUCTS_QUERY }]
            }).catch(console.error);
            console.log(res);
            //clearForm();
            //go to that products page
        }}>
            <fieldset disabled={updateLoading} aria-busy={updateLoading}>
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
                <button type='submit'>+ Update Product</button>
            </fieldset>
        </Form>
    )
}
