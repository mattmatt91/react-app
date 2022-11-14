
import React, { useState, useEffect } from 'react';
import './App.css';


// fetching data - dict with entire dataset
function Features() {

  fetch('/features/').then(res => res.json()).then(data => {
    let items = []
    let features = data;
    //console.log('from Feautres: ', features)
    for (let feature in features) {
      items.push(Init_input(feature, features[feature]))  // content ist eine liste mit react objecten. warum werdne die nicht angezeigt?

    }
    return items;
  });

}

// building react object
function Init_input(key, val) {
  return (
    <div key={key}>
      <label
        name='age'
        value='test'
      >{key}</label>
      <input type='range' // wie übergeben ich hier sowas wie ein self atritbut, dass die funktionen zu den slidern und labels gemapped sind
        onChange={console.log(183)}
      />
      <label
        name='age'
        value='test'
      >{val}</label>
    </div>
  );
};

// setter for slider, fetching with key and value a new value from api, sets label to new value
function Set_value(key, control, label) { // wie übergebe ich da am besten die argumente, bzw wie verweise ich auf den richtigen fader und das label
  const [value, set_value] = useState(0);
  useEffect(() => {
    let val = control.value
    fetch('/feature/' + key + '/' + val).then(res => res.json()).then(data => {
      set_value(data.result);
    });
  }, []);
  label.value = value;
}

function App() {
  let feautes = Features()
  console.log(feautes) // warum ist das hier undefined ?
  return (
    <div >
      { Init_input("feature", 123)}
    </div>
  );
}

export default App;

