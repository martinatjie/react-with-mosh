import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

const myelement = <h1>Hi world</h1>;

console.log(myelement);

//ReactDOM.render(myelement,document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(myelement);
root.render(<Counter />);


function sayHello() {
    console.log('hello');
}