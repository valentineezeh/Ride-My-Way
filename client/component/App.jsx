import React from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from './NavigationBar.jsx';
import HomePage from '../component/home/HomePage.jsx';
import FootBar from '../component/footer/FootBar.jsx'
class App extends React.Component {
  render(){
    return (
      <div className="container">
        <NavigationBar />
        <div>
          <Route exact path='/' component={HomePage} />
        </div>
        <FootBar />
      </div>
    );
  }
}
export default App