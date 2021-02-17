import React from 'react';
import { useForm } from "react-hook-form";

const CreateQuote = () => {
    
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
        <input
          type="text"
          placeholder="Class"
          name="class"
          ref={register}
        />
      </label>

      <button>Add phrase!</button>
    </form>
   ) 
};

export default CreateQuote;