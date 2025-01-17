import React from "react";
import { Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute"

import Login from './components/Login';
import SignupPage from './components/SignUpPage'
import DonationsPage from './components/DonationsPage'
import {Navbar, NavbarBrand, NavItem, NavLink, Nav
} from 'reactstrap';


import "./App.css";
import AddDonorPage from "./components/AddDonorPage";

function App() {
  return (
    <div className="App">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Donor Management</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/signup">Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/donationform">Add Donor</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <ProtectedRoute path="/donationform" component={AddDonorPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignupPage} />
      <Route exact path="/" component={DonationsPage} />  
      {/* <PrivateRoute path="/" component={} />  */}
    </div>
  );
}

export default App;
