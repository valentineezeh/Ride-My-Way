import React from 'react';
import { Route } from 'react-router-dom';
import AuthHomePage from '../component/home/AuthHomePage.jsx'
import NavigationBar from './NavigationBar.jsx';
import HomePage from '../component/home/HomePage.jsx';
import RidesPage from '../component/rides/RidesPage.jsx';
import UserRidePage from '../component/rides/UserRidePage.jsx'
import FlashMessagesList from './flashMessages/FlashMessageList.jsx';
import FootBar from '../component/footer/FootBar.jsx'
class App extends React.Component {
  render(){
    return (
      <div className="container">
        <NavigationBar />
        <FlashMessagesList />
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path="/home" component={AuthHomePage} />
          <Route exact path="/rides" component={RidesPage} />
          <Route exact path="/user/rides" component={UserRidePage} />
        </div>
        <FootBar />
      </div>
    );
  }
}
export default App