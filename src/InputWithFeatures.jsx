import React, { useState, useEffect } from 'react';
import './index.css'; 

const InputWithFeatures = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [textareaValue, setTextareaValue] = useState('');


  useEffect(() => {
    const savedValue = localStorage.getItem('inputValue');
    if (savedValue) {
      setInputValue(savedValue);
      setWordCount(savedValue.trim() ? savedValue.trim().split(/\s+/).length : 0);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
    setWordCount(inputValue.trim() ? inputValue.trim().split(/\s+/).length : 0);
  }, [inputValue]);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    console.log(newValue);

   
    if (!/^[a-zA-Z\s]*$/.test(newValue)) {
      setError('Only letters and spaces are allowed.');
    } else {
      setError('');
    }
  };

  const handleClear = () => {
    setInputValue('');
    setError('');
  };

  const handleUppercase = () => {
    setInputValue(inputValue.toUpperCase());
  };

  const handleLowercase = () => {
    setInputValue(inputValue.toLowerCase());
  };

  const handleSubmit = () => {
    if (inputValue.trim() && !error) {
      alert(`Submitted Value: ${inputValue}`);
    } else {
      alert('Please fix errors before submitting.');
    }
  };

  const handleReset = () => {
    setInputValue('');
    setWordCount(0);
    setError('');
    localStorage.removeItem('inputValue');
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div className="container">
      <h3 className="header">Input With Enhanced Features</h3>

      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here"
        className="input"
      />
      <p>Character Count: {inputValue.length}</p>
      <p>Word Count: {wordCount}</p>

     
      <textarea
        value={textareaValue}
        onChange={handleTextareaChange}
        placeholder="Multiline input"
        className="textarea"
      />
      <p>Textarea Character Count: {textareaValue.length}</p>

 
      <select value={selectedOption} onChange={handleSelectChange} className="select">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected Option: {selectedOption}</p>

     
      {error && <p className="error">{error}</p>}

      <div className="buttonContainer">
        <button onClick={handleClear} className="button">
          Clear
        </button>
        <button onClick={handleUppercase} className="button">
          Uppercase
        </button>
        <button onClick={handleLowercase} className="button">
          Lowercase
        </button>
        <button onClick={handleSubmit} className="button">
          Submit
        </button>
        <button onClick={handleReset} className="resetButton">
          Reset
        </button>
      </div>

      
      <div className="radioContainer">
        <label>
          <input
            type="radio"
            name="textStyle"
            value="uppercase"
            checked={selectedOption === 'uppercase'}
            onChange={() => setSelectedOption('uppercase')}
          />
          Uppercase
        </label>
        <label>
          <input
            type="radio"
            name="textStyle"
            value="lowercase"
            checked={selectedOption === 'lowercase'}
            onChange={() => setSelectedOption('lowercase')}
          />
          Lowercase
        </label>
      </div>
    </div>
  );
};

export default InputWithFeatures;
