
import React, { useState, useEffect } from 'react';
import './App.css';

function Features() {
  let features
  fetch('/features/').then(res => res.json()).then(data => {
    features = data;
    console.log('from Feautres: ', features)
  });
  return features;
}

function Init_input(key, val) {
  return (
    <div key={key}>
      <label
        name='age'
        value='test'
      >{key}</label>
      <input type='range' // wie übergeben ich hier sowas wie ein self atritbut, dass die funktionen zu den slidern und labels gemapped sind
        onChange={function () { Set_value(key, "control", "label"); }}
      />
      <label
        name='age'
        value='test'
      >{val}</label>
    </div>
  );
};

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
  let features = Features()
  console.log('from App:  ' + features)

  let items = []
  for (let feature in features) {
    items.push(Init_input(feature, feature.val))  // content ist eine liste mit react objecten. warum werdne die nicht angezeigt?
  }


  return (
    <div >
      { items }
    </div>
  );

}

export default App;

