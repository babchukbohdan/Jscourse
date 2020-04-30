import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'; 
// uncomment if u want to show GOT app
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


// Hooc testing
// function App() {

//   const [count, setCount] = useState(0);
//   const [data, refreshData] = useState([{
//     name: "Ivan",
//     sex: 'male'
//   }]);

//   useEffect(() => {
//     console.log(data, count);
//   });


//   return (
//     <div>
//       <p>You click {count} time(s)</p>
//       <button
//         onClick={() => setCount(count + 1)} >
//           Click me
//       </button>

      
//       {data.map(item => {
//         return (
//           <div>
//             Name: {item.name}, sex: {item.sex}
//           </div>
//         )
//       })}
//       <button
//         onClick={() => refreshData(data => ([...data, {name: 'Stepan', sex: 'male'}]))} >
//           Add data
//       </button>
//     </div>

    
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'));
