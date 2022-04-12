// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => <h1>Hello from React !!!!!!!!!! and me too</h1>;
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <>
    <h1>Hello from React 18!</h1>
    <h2>I'm glad to see you!</h2>
    <h3>WOW</h3>
  </>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
