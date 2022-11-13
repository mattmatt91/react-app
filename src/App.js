
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [features, set_features] = useState(0);
  useEffect(() => {
    fetch('/features/').then(res => res.json()).then(data => {
      set_features(data)
    });
  }, []);
  function createInputs() {
    features_objects = [];
    Object.keys(features).forEach(function (key, index) {
      fea_ob = (<div key={i}>
             <label>{el}</label>
             <label>{i}</label>)
      features_objects.push()
      console.log(index, key);
    });
  };
  //const [values, setValues] = useState({ val: [] });
  //return values.val.map((el, i) 
  //onsole.log(feature);
  //   <div key={i}>
  //     <label>{el}</label>
  //     <label>{i}</label>
  //     <input type="range" onChange={handleChange.bind(i)} />
  // <input type="range" onChange={handleChange.bind()} />
  // <input type='button' value='remove' onClick={removeClick.bind(i)} />
  //     <input type='button' value='remove' onClick={removeClick.bind(i)} />
  //   </div>
  // );


  // function handleChange(event) {
  //   console.log(event.target.value)
  //   console.log(values)
  //   let vals = [...values.val];
  //   console.log(vals)
  //   vals[this] = event.target.value;
  //   setValues({ val: vals });
  // }
  // 
  // const addClick = () => {
  //   setValues({ val: [...values.val, ''] })
  // }
  // 
  // const removeClick = () => {
  //   let vals = [...values.val];
  //   vals.splice(this, 1);
  //   setValues({ val: vals });
  // }
  // 
  // const handleSubmit = event => {
  //   alert('A name was submitted: ' + values.val.join(', '));
  //   event.preventDefault();
  // }
  // 
  // <input type='button' value='add more' onClick={addClick} />
  // <form onSubmit={handleSubmit}>
  // 

  return (
    <form >
      {createInputs()}
      <input type="submit" value="Submit" />
    </form>
  );

}

export default App;

