import { useState } from 'react';

export default function useForm(initial = {}){
    //create a state object for our inputs
    const [inputs, setInputs] = useState(initial);

    //handle change here, pass to input
    function handleChange(e) {
        //lets descructure some properties of our input we care about from e.target
        let { value, name, type } = e.target;
        
        if(type === 'number'){
            value = parseInt(value);
        }

        if(type === 'file'){
            console.log(e.target.files);
            [value] = e.target.files;
        }

        setInputs({ 
            ...inputs,
            [name] : value
        });
    }

    function resetForm(){
        setInputs(initial);
    }

    function clearForm(){
        const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
        setInputs(blankState);
    }

    //return the things we want to surface from this custom hook
    return {
        inputs,
        handleChange,
        resetForm,
        clearForm
    };
}
