// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p>Hello, i'm Skandar!</p>
    </div>
  );
};

export default App;
