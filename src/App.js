import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './App.css';

import { registerFetch, loginFetch } from './services/auth-service';
import { getAllAdventuresFetch, createAdventureFetch, editAdventureFetch, deleteAdventureFetch } from './services/advs-service';
import { createCatFetch, getAllCatsFetch } from './services/cat-service';


import Header from './common/Header';
import Footer from './common/Footer';

import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import CreateAdventure from './views/CreateAdventure';
import AllAdventures from './views/AllAdventures';
import MyPosts from './views/MyPosts';
import Details from './views/Details';
import EditAdventure from './views/EditAdventure';
import DeleteAdventure from './views/DeleteAdventure';
import CreateCategory from './views/CreateCategory';
import AllCategories from './views/AllCategories';

const NotFound = () => {
  return <h2>UUUUPPS, 404 - Page not found!</h2>
}

const Logout = (props) => {
  props.logout();
  return <Redirect to="/" />
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      isAdmin: false,
      adventures: [],
      categories: [],
      hasFetched: false
    }

    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logout = this.logout.bind(this);
    this.createAdventure = this.createAdventure.bind(this);
    this.editAdventure = this.editAdventure.bind(this);
    this.deleteAdventure = this.deleteAdventure.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.getAllAdvs = this.getAllAdvs.bind(this);
    this.getAllCats = this.getAllCats.bind(this);

  }

  registerUser(userData) {
    registerFetch(userData)
      .then(body => {
        //console.log(body)
        if (!body.success && body.errors) {
          toast.warn(body.message, { closeButton: false });
          for (let er in body.errors) {
            toast.error(body.errors[er], { closeButton: false });
          }
        }  else if (body.success === false) { //user already exists! dava go samo kato message!
          toast.error(body.message, { closeButton: false });
        } else {
          this.loginUser(userData, body.message)
        }
      })
  }

  loginUser(userData, regMessage) {
    loginFetch(userData)
      .then(body => {
        //console.log(body);
        let isAdminCheck = false;

        if (body.success === false && body.errors) { //neuspeh zaradi prazni poleta
          toast.warn(body.message, { closeButton: false });
          for (let er in body.errors) {
            toast.error(body.errors[er], { closeButton: false });
          }
        } else if (body.success === false) { //neuspeh zaradi greshni username i/ili parola
          toast.error(body.message, { closeButton: false });
        } else {
          //USPESHNA REGISTRACIQ
          sessionStorage.setItem('username', body.user.username);
          sessionStorage.setItem('token', body.token);

          if (body.user.roles.includes('Admin')) {
            sessionStorage.setItem('isAdmin', true);
            isAdminCheck = true;
          } else {
            sessionStorage.setItem('isAdmin', false);
          }

          if (regMessage) {
            toast.success(regMessage, { closeButton: false });
          }
          toast.success(body.message, { closeButton: false });

          this.setState({
            username: body.user.username,
            isAdmin: isAdminCheck
          })
        }
      })
  }

  logout() {
    sessionStorage.clear();
    toast.success('Successfully logged out', { closeButton: false });
    this.setState({
      username: null,
      isAdmin: false
    })
  }

  createAdventure(advData) {
    createAdventureFetch(advData)
      .then(body => {
        //console.log(body);
        if (body.success === false && body.errors) {
          toast.warn(body.message, { closeButton: false });
          for (let er in body.errors) {
            toast.error(body.errors[er], { closeButton: false });
          }
          this.setState({
            hasFetched: false
          })
        } else if (body.success === false) {
          toast.error(body.message, { closeButton: false });
          this.setState({
            hasFetched: false
          })
        } else {
          this.setState({
            hasFetched: true
          })
          this.getAllAdvs(body.message);
        }
      })
  }

  editAdventure(advData, id) {
    editAdventureFetch(advData, id)
      .then(body => {
        //console.log(body);
        if (body.success === false) {
          toast.error(body.message, { closeButton: false });
          this.setState({
            hasFetched: false
          })
        } else {
          this.setState({
            hasFetched: true
          })
          this.getAllAdvs(body.message);
        }
      })
  }

  deleteAdventure(id) {
    deleteAdventureFetch(id)
      .then(body => {
        //console.log(body);
        if (body.success === false) {
          toast.error(body.message, { closeButton: false });
          this.setState({
            hasFetched: false
          })
        } else {
          this.setState({
            hasFetched: true
          })
          this.getAllAdvs(body.message);
        }
      })
  }

  createCategory(catData) {
    createCatFetch(catData)
      .then(body => {
        //console.log(body);
        if (body.success === false && body.errors) {
          toast.warn(body.message, { closeButton: false });
          for (let er in body.errors) {
            toast.error(body.errors[er], { closeButton: false });
          }
          this.setState({
            hasFetched: false
          })
        } else if (body.success === false) {
          toast.error(body.message, { closeButton: false });
          this.setState({
            hasFetched: false
          })
        } else {
          this.setState({
            hasFetched: true
          })
          this.getAllCats(body.message);
        }
      })
  }

  getAllAdvs(mesFromPrevTask) {
    getAllAdventuresFetch()
      .then(body => {
        // console.log(body)
        if (mesFromPrevTask) {
          toast.success(mesFromPrevTask, { closeButton: false });
        }
        this.setState({
          adventures: body,
          hasFetched: false
        })
      })
  }

  getAllCats(mesFromPrevTask) {
    getAllCatsFetch()
      .then(body => {
        // console.log(body)
        if (mesFromPrevTask) {
          toast.success(mesFromPrevTask, { closeButton: false });
        }
        this.setState({
          categories: body,
          hasFetched: false
        })
      })
  }

  componentDidMount() {
    this.getAllAdvs();
    this.getAllCats();
    let currUsername = sessionStorage.getItem('username');
    let currIsAdmin = sessionStorage.getItem('isAdmin');
    if (currIsAdmin === 'true') { //vrashta go KATO STRING!! a ne kato bool
      this.setState({
        username: currUsername,
        isAdmin: true
      })
    } else if (currUsername) {
      this.setState({
        username: currUsername,
        isAdmin: false
      })
    } else {
      this.setState({
        username: null,
        isAdmin: false
      })
    }
  }


  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Header username={this.state.username} isAdmin={this.state.isAdmin} logout={this.logout} />
        <Switch>
          <Route path='/' exact render={() => (
            <Home username={this.state.username} isAdmin={this.state.isAdmin} adventures={this.state.adventures} />)}
          />
          <Route path='/register' render={() => <Register registerUser={this.registerUser} username={this.state.username} />} />
          <Route path='/login' render={() => <Login loginUser={this.loginUser} username={this.state.username} />} />
          <Route path='/logout' render={() => <Logout logout={this.logout} />} />

          <Route path='/alladvs' exact render={() => (
            <AllAdventures adventures={this.state.adventures} />)}
          />

          <Route path='/myposts' exact render={() => (
            this.state.username ?
              (<MyPosts adventures={this.state.adventures} />)
              : (<Home username={this.state.username} isAdmin={this.state.isAdmin} adventures={this.state.adventures} />)
          )} />

          <Route path='/details/:advid' exact render={(props) => (
            <Details adventures={this.state.adventures} isAdmin={this.state.isAdmin} {...props} />
          )} />

          <Route path='/advcreate' render={(props) => (
            this.state.username ?
              (<CreateAdventure createAdventure={this.createAdventure} categories={this.state.categories} hasFetched={this.state.hasFetched} {...props} />)
              : (<Home username={this.state.username} isAdmin={this.state.isAdmin} adventures={this.state.adventures} />)
          )} />

          <Route path='/edit/:advid' exact render={(props) => (
            this.state.username ?
              (<EditAdventure editAdventure={this.editAdventure} adventures={this.state.adventures} hasFetched={this.state.hasFetched} {...props} />)
              : (<Home username={this.state.username} isAdmin={this.state.isAdmin} adventures={this.state.adventures} />)
          )} />

          <Route path='/delete/:advid' exact render={(props) => (
            this.state.username ?
              (<DeleteAdventure deleteAdventure={this.deleteAdventure} adventures={this.state.adventures} hasFetched={this.state.hasFetched} {...props} />)
              : (<Home username={this.state.username} isAdmin={this.state.isAdmin} adventures={this.state.adventures} />)
          )} />

          <Route path='/createcategory' render={(props) => (
            this.state.isAdmin ?
              (<CreateCategory createCategory={this.createCategory} hasFetched={this.state.hasFetched} {...props} />)
              : (<Home username={this.state.username} isAdmin={this.state.isAdmin} adventures={this.state.adventures} />)
          )} />

          <Route path='/allcats' render={(props) => (
            this.state.isAdmin ?
              (<AllCategories categories={this.state.categories} {...props} />)
              : (<Home username={this.state.username} isAdmin={this.state.isAdmin} adventures={this.state.adventures} />)
          )} />

          <Route component={NotFound} />

        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;
