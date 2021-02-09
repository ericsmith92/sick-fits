import Link from 'next/link';
import ItemStlyes from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

export default function Product( { product } ){
    return(
        <ItemStlyes>
            <img src={product?.photo?.image?.publicUrlTransormed} alt={product.name} />
            <Title>
                <Link href={`/product/${product.id}`}>{product.name}</Link>
            </Title>
            <PriceTag>{formatMoney(product.price)}</PriceTag>
            <p>{product.description}</p>
        </ItemStlyes>
    )
}
