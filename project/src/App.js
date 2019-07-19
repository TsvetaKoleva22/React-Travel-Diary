import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './App.css';

import { registerFetch, loginFetch } from './services/auth-service';
import { getAllAdventuresFetch, createAdventureFetch, editAdventureFetch, likeAdventureFetch, deleteAdventureFetch } from './services/advs-service';
import { createCatFetch, getAllCatsFetch } from './services/cat-service';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './views/Home';
import About from './views/About';
import UserMain from './views/user/UserMain';
import AdvMain from './views/adventures/AdvMain';
import CategoryMain from './views/categories/CategoryMain';

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
      foundAdvs: [],
      hasFetched: false
    }

    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logout = this.logout.bind(this);
    this.createAdventure = this.createAdventure.bind(this);
    this.editAdventure = this.editAdventure.bind(this);
    this.likeAdventure = this.likeAdventure.bind(this);
    this.deleteAdventure = this.deleteAdventure.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.getAllAdvs = this.getAllAdvs.bind(this);
    this.getAllCats = this.getAllCats.bind(this);
    this.searchByCat = this.searchByCat.bind(this);
  }

  registerUser(userData) {
    registerFetch(userData)
      .then(body => {
        // console.log(body)
        if (!body.success && body.errors) {
          toast.warn(body.message, { closeButton: false });
          for (let er in body.errors) {
            toast.error(body.errors[er], { closeButton: false });
          }
        } else if (body.success === false) { //user already exists! dava go samo kato message!
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
        if(body){
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
        } else{
          toast.error('Unothorized 401!!!!', { closeButton: false });
          this.setState({
            hasFetched: false
          })
        }       
      })
  }

  editAdventure(advData, id) {
    editAdventureFetch(advData, id)
      .then(body => {
        //console.log(body);

        if(body){
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
        } else{
          toast.error('Unothorized 401!!!!', { closeButton: false });
          this.setState({
            hasFetched: false
          })
        }
      })
  }
  
  likeAdventure(advData, id) {
    likeAdventureFetch(advData, id)
      .then(body => {
        //console.log(body);

        if(body){
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
        } else{
          toast.error('Unothorized 401!!!!', { closeButton: false });
          this.setState({
            hasFetched: false
          })
        }
      })
  }

  deleteAdventure(id) {
    deleteAdventureFetch(id)
      .then(body => {
        //console.log(body);

        if(body){
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
        } else{
          toast.error('Unothorized 401!!!!', { closeButton: false });
          this.setState({
            hasFetched: false
          })
        }
      })
  }

  createCategory(catData) {
    createCatFetch(catData)
      .then(body => {
        //console.log(body);

        if(body){
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
        } else{
          toast.error('Unothorized 401!!!!', { closeButton: false });
          this.setState({
            hasFetched: false
          })
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

  searchByCat(catId) {
    let advToShow = this.state.adventures.filter(adv => adv.category.toString() === catId.toString())
    //console.log(advToShow);
    this.setState({
      foundAdvs: advToShow
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

          <Route path='/about' component={About} />

          <Route path='/user' render={(props) =>
            <UserMain
              registerUser={this.registerUser}
              loginUser={this.loginUser}
              username={this.state.username}
              {...props}
            />} />

          <Route path='/logout' render={() => <Logout logout={this.logout} />} />

          <Route path='/adventure' render={(props) => (
            <AdvMain
              createAdventure={this.createAdventure}
              editAdventure={this.editAdventure}
              likeAdventure={this.likeAdventure}
              deleteAdventure={this.deleteAdventure}
              searchByCat={this.searchByCat}
              {...this.state}
              {...props}
            />)} />

          <Route path='/category' render={(props) => (
            this.state.isAdmin ?
              (<CategoryMain
                createCategory={this.createCategory}
                categories={this.state.categories}
                hasFetched={this.state.hasFetched}
                {...props} />)
              : (<Home
                username={this.state.username}
                isAdmin={this.state.isAdmin}
                adventures={this.state.adventures}
              />)
          )} />

          <Route component={NotFound} />

        </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;
