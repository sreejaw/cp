// // // import React from 'react';
// // // import ReactDOM from 'react-dom/client';
// // // import './index.css';
// // // import App from './App';
// // // import reportWebVitals from './reportWebVitals';

// // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // root.render(
// // //   <React.StrictMode>
// // //     <App />
// // //   </React.StrictMode>
// // // );

// // // // If you want to start measuring performance in your app, pass a function
// // // // to log results (for example: reportWebVitals(console.log))
// // // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // // reportWebVitals();



// // //   function Root(props){
// // //   // var name="Maheshh"
// // //   return(
// // //     <div>
// // //     <h1>Hello {props.name}</h1>
// // //     <Child1/>
// // //     <Child2/>
// // //     <Child3/>
// // //     <Child4/>
// // //     </div>
// // //   )
// // //   }

// // // function Child1(){
// // //   return <h1>Child 1 component</h1>
// // // }
// // // function Child2(){
// // //   return <h1>Child 2 component</h1>
// // // }
// // // function Child3(){
// // //   return <h1>Child 3 component</h1>
// // // }
// // // function Child4(){
// // //   return <h1>Child 4 component</h1>
// // // }


// // // ReactDOM.render(<Root name="Sreeja"/>,document.getElementById('root'))


// // const root= ReactDOM.createRoot(document.getElementById('root'));

// // function tick(){
// //   const element=(
// //     <div>
// //       <h1>Hellooooo</h1>
// //       <h2>It is {new Date().toLocaleTimeString()} </h2>
// //     </div>
// //   );
// //   root.render(element)
// // }
// // setInterval(tick,1000)



// import React from 'react';
// import ReactDOM from 'react-dom'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// function App(){

// const emps=[{"name":"sreeja","age":21,"salary":200},{"name":"tejita","age":65,"salary":2000000},{"name":"akshara","age":20,"salary":20}];


//   return(
//     <div>
//       <table border="2px">
//       <th>name</th>
//       <th>age</th>
//       <th>Salary</th>
//     {
//     emps.map((emp)=>
//     <tr><td>{emp.name}</td><td>{emp.age}</td><td>{emp.salary}</td></tr>)
// }
// </table>
// </div>
//   )
// }
// ReactDOM.render(<App/>,document.getElementById('root'))




import React from "react";
import ReactDOM from "react-dom";
import Login from "./login";

ReactDOM.render(<Login/>,document.getElementById('root'))