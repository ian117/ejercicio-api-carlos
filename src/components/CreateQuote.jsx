import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const CreateQuote = ({classes}) => {
    
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            axios.post('https://prof-quotes.herokuapp.com/api/quotes', {
                quote: data.quote,
                class: data.class
              });
          } catch (er) {
            console.error(er)
          }
        }

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