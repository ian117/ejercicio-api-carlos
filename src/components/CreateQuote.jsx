import React from 'react';
import { useForm } from "react-hook-form";

const CreateQuote = ({classes}) => {
    
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };

   return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Quote:
        <input
          type="text"
          name="quote"
          ref={register} 
          placeholder="Quote"
        />
      </label>

      <label>
        Password:
        <select name="class" ref={register}>
        {classes.map(value => (
                <option key={value} value={value}>
                     {value}
                </option>
            ))}
        </select>
      </label> 

      <button>Add phrase!</button>
    </form>
   ) 
};

export default CreateQuote;