import React from 'react';

const Form = (props) => {
    return (
        // set up props to getWeather which will be hooked up to a fetchData function in App.js
        <form onSubmit={props.getWeather}>
            <input 
            type='text'
            placeholder='city'
            name='city'
            />

            <input 
            type='text'
            placeholder='country'
            name='country'
            />

            <button>Submit</button>

        </form>
    )
}

export default Form;