import React from 'react';
import { Route } from 'react-router-dom';
import AuthHomePage from '../component/home/AuthHomePage.jsx'
import NavigationBar from './NavigationBar.jsx';
import HomePage from '../component/home/HomePage.jsx';
import RidesPage from '../component/rides/RidesPage.jsx';
import UserRidePage from '../component/rides/UserRidePage.jsx'
import FlashMessagesList from './flashMessages/FlashMessageList.jsx';
import PostRidePage from '../component/rides/PostRidePage.jsx';
import FootBar from '../component/footer/FootBar.jsx'
import requiredAuth from '../utils/requiredAuth.js';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <NavigationBar />
        <FlashMessagesList />
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path="/home" component={AuthHomePage} />
          <Route exact path="/rides" component={requiredAuth(RidesPage)} />
          <Route exact path="/user/ride" component={requiredAuth(PostRidePage)} />
          <Route exact path="/user/rides" component={requiredAuth(UserRidePage)} />
        </div>
        <FootBar />
      </div>
    );
  }
}
export default App