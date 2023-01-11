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
import Dashboard from './components/Dashboard/Dashboard';
import DashboardSidebar from './components/common-component/sidebar/Sidebar';
import Account from './components/Dashboard/Account';
import { DashboardWrapper } from './components/Dashboard/style';
import DashboardPages from './components/common-component/pages/DashboardPages';
import Activities from './components/Dashboard/Activities';
import Inventory from './components/Dashboard/Inventory';
import Overview from './components/Dashboard/Overview';
import Notfound from './components/Notfound';
import PrivateRoute from './components/auth/PrivateRoute';

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
                        {/* <Route  path="/account" component={Dashboard} /> */}
	                </Switch>

                    {/* <DashboardWrapper>
                        <DashboardSidebar/>
                        <DashboardPages>
                        <Switch>
                        <Route  path="/dashboard" component={Account} />
                        <Route  path="/activities" component={Activities} />
                        <Route  path="/inventory" component={Inventory} />
                        <Route  path="/overview" component={Overview} />
                        </Switch>
                        </DashboardPages>
                    </DashboardWrapper> */}
                </Router>
  )
}

export default App