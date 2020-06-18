import React from 'react';



import Header from './components/Header'
import Container from './components/Container';
import Footer from './components/Footer';
import myStore from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={myStore}>

    <div className="App">
    
    <Container />
    
    
    
    </div>
    </Provider>
  );
}

export default App;
