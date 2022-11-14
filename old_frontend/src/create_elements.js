//import React from "react";
//
//const Build_label = ({ source }) => (
//    <label value={source} />
//    );
//
//
//const Image = ({ source }) => (
//  <img src={`./images/${source}`} alt="Example" className="w-25 m-2" />
//);
//
//export default Build_label;


// function init_item(name, data) {
    //     let items = []
    //   
    //     let label_txt = build_label(name);
    //     let label_val = build_label(data[name]);
    //     let control = build_control(name, data[name], label_val);
    //     items.push(label_txt);
    //     items.push(control);
    //     items.push(label_val);
    //     return items
    //   };
    //   
//   
//   function build_control(name, val, label_val) {
//     let control = document.createElement('input');
//     control.type = "range";
//     control.value = val;
//     control.addEventListener("change", function () {
//       const [value, set_value] = useState(0);
//       useEffect(() => {
//         let val = control.value
//         fetch('/feature/' + name + '/' + val).then(res => res.json()).then(data => {
//           set_value(data.result);
//         });
//       }, []);
//       label_val.value = value;
//     });
//     return control
//   }
//   
//   function tableCreate(items) {
//     let tbl = document.createElement('table');
//     tbl.style.width = '100px';
//     for (let row = 0; row < items.length; row++) {
//       const tr = tbl.insertRow();
//       for (let item = 0; item < items[row].length; item++) {
//         const td = tr.insertCell();
//         td.appendChild(items[row][item]);
//         td.setAttribute('rowSpan', '1');
//       };
//     };
//     return tbl
//   }
//   
//   function Build_page() {
//     const [features, set_features] = useState(0);
//     useEffect(() => {
//       fetch('/features/').then(res => res.json()).then(data => {
//         set_features(data)
//       });
//     }, []);
//     return { features }
//     // let items = []
//     // console.log(features)
//     // for (var key in features) {
//     //   items.push(init_item(key, features));
//     // };
//     // let tbl = tableCreate(items);
//     // return tbl;
//   };