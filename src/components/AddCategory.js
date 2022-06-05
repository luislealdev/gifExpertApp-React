import React from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputText, setInputText] = useState('');  

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    const handleInputSubmit = (e) => {
        e.preventDefault();

        if(inputText.trim().length > 2){
        setCategories(category => [inputText,...category]);
        setInputText('');
        }

    }

  return (
    <form onSubmit={handleInputSubmit}>
        <input
            type="text"
            placeholder="Enter new category"
            value={inputText}
            onChange={handleInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}  
