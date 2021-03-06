import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import FooterNav from "./components/FooterNav";
import HomePage from  './components/Homepage'
import OneBusiness from  './components/SingleBusiness'
import NewBusinessForm from  './components/NewBusinessForm'
import UpdateBusinessForm from  './components/UpdateBusinessForm'
import {getBusinesses} from './store/business'
import SplashPage from './components/splash'


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // const {businessId} = useParams()

  useEffect(() => {
    dispatch(getBusinesses())
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
        <Route path='/' exact={true} >
          <SplashPage></SplashPage>
        </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/home'>
            <HomePage></HomePage>
          </Route>
          <Route path='/new'>
            <NewBusinessForm></NewBusinessForm>
          </Route>
          {/* <Route path='/update'> */}
          <Route path='/update/:id'>
            <UpdateBusinessForm ></UpdateBusinessForm>
          </Route>
          <Route path='/:businessId' >
            <OneBusiness></OneBusiness>
          </Route>
        </Switch>
      )}
      <FooterNav/>
      
    </>
  );
}

export default App;