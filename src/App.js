
import React, { useState, useEffect } from 'react';
import './App.css';



function Features() {
  let features_objects = [];
  fetch('/features/').then(res => res.json()).then(data => {
    let features = data;
    Object.keys(features).forEach(function (key, index) {
      features_objects.push(Init_input(index, key, features[key]))    
    });
  });
  console.log(features_objects)
  return features_objects;
}







function Init_input(index, key, val) {
  return (
    <div key={key}>
      <label
        name='age'
        value='test'
      >{key}</label>
      <input type='range'
        onChange={set_value} />
      <label
        name='age'
        value='test'
      >{val}</label>
    </div>
  );
};


function set_value() {
  console.log('456')
}

function App() {
  return (
    <div >
      {Features()}
    </div>
  );

}

export default App;

