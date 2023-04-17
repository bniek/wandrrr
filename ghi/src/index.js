import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// async function loadPosts() {
//   const response = await fetch('http://localhost:8000/wandrrrs/');
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//     root.render(
//       <React.StrictMode>
//         <App posts={data.posts} />
//       </React.StrictMode>
//     )
//   } else {
//     console.error(response);
//   }
// }
// loadPosts();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
