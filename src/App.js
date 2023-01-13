import React from 'react'
import { Route, Switch,BrowserRouter as Router, } from 'react-router-dom'
import Home_V1 from './components/home-v1'
import ProptertyDetails from './components/property-details'
import ProptertyGrid from './components/property-grid';
import Propterty from './components/property';
import About from './components/about';
import Team from './components/team';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import AddProperty from './components/add-property';
import Contact from './components/contact';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';
import Notfound from './components/Notfound';
import Account from './components/common-component/pages/Account';
import Activities from './components/common-component/pages/Activities';
import Inventory from './components/common-component/pages/Inventory';
import Overview from './components/common-component/pages/Overview';


const App = () => {
  return (
    <Router>
	                <Switch>
                        <Route exact path="/" component={Home_V1} />
                        <Route  path="/property-details" component={ProptertyDetails} />
                        <Route  path="/property-grid" component={ProptertyGrid} />
                        <Route  path="/property" component={Propterty} />
                        <Route  path="/about" component={About} />
                        <Route  path="/team" component={Team} />
                        <Route  path="/sign-in" component={SignIn} />
                        <Route  path="/sign-up" component={SignUp} />
                        <Route  path="/add-property" component={AddProperty} />
                        <Route  path="/contact" component={Contact} />
                        <Route  path="/blog" component={Blog} />
	                    <Route  path="/blog-details" component={BlogDetails} />
                      <Route  path="/account" component={Account} />
                        <Route  path="/activities" component={Activities} />
                        <Route  path="/inventory" component={Inventory} />
                        <Route  path="/overview" component={Overview} />
                      <Route path="*"><Notfound /></Route>
	                </Switch>
                </Router>
  )
}

export default App