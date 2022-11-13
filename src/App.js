import React, { useState, useEffect } from 'react';
import './App.css';


function init_item(name, data) {
  let items = []

  let label_txt = build_label(name);
  let label_val = build_label(data[name]);
  let control = build_control(name, data[name], label_val);
  items.push(label_txt);
  items.push(control);
  items.push(label_val);
  return items
};

function build_label(val) {
  let label = document.createElement('output');
  //label.type = 'label';
  label.value = val;
  return label
}

function build_control(name, val, label_val) {
  let control = document.createElement('input');
  control.type = "range";
  control.value = val;
  control.addEventListener("change", function () {
    const [value, set_value] = useState(0);
    useEffect(() => {
      let val = control.value
      fetch('/feature/' + name + '/' + val).then(res => res.json()).then(data => {
        set_value(data.result);
      });
    }, []);
    label_val.value = value;
  });
  return control
}

function tableCreate(items) {
  let tbl = document.createElement('table');
  tbl.style.width = '100px';
  for (let row = 0; row < items.length; row++) {
    const tr = tbl.insertRow();
    for (let item = 0; item < items[row].length; item++) {
      const td = tr.insertCell();
      td.appendChild(items[row][item]);
      td.setAttribute('rowSpan', '1');
    };
  };
  return tbl
}





function App() {
  const [features, set_features] = useState(0);
  useEffect(() => {
    fetch('/features/').then(res => res.json()).then(data => {
      set_features(data)
    });
  }, []);
  let items = []
  console.log(features)
  for (var key in features) {
    items.push(init_item(key, features));
  };
  let tbl = tableCreate(items);
  let main =  (
    <div className="App">
    <header className="App-header">
    </header>
  </div>
  )
  //document.getElementById(main).appendChild(tbl)
return main
};


export default App;
