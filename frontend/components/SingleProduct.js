import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Head from 'next/head';

const ProductStyles = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    min-height: 800px;
    max-width: var(--maxWidth);
    justify-content: center;
    align-items: center;
    gap: 2rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!) {
        Product(where: {
            id: $id
        }){
            name
            price
            description
            id
            photo{
                altText
                image{
                    publicUrlTransformed
                }
            }
        }
    }
`;

export default function SingleProduct({ id }){

    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, { variables: {id}});
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error.message}</p>
    const { Product } = data

    return(
        <ProductStyles>
            <Head>
                <title>Sick Fits | {Product.name}</title>
            </Head>
            <img src={Product.photo.image.publicUrlTransformed} alt={Product.photo.altText} />
            <div className='details'>
                <h2>{Product.name}</h2>
                <p>{Product.description}</p>
            </div>
        </ProductStyles>
    )
}
