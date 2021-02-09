import useForm from '../lib/useForm';

export default function CreateProduct(){
    
    const{ inputs, handleChange, clearForm } = useForm({
        name: 'Tingz',
        price: 342567,
        description: 'Tingz be poppin off',
    });

    return(
        <form>
            <label htmlFor='name'>
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
                <input 
                    type='number'
                    id='price'
                    name='price'
                    placeholder='price'
                    value={inputs.price}
                    onChange={handleChange}
                />
            </label>
            <button type='button' onClick={clearForm}></button>
        </form>
    )
}
