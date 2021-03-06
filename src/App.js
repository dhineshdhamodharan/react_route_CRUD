import './App.css';
import Sidemenu from "./sidemenu"
import Topmenu from "./topmenu";
import Dashboard from './dashboard';
import Users from "./users"
import Products from './product';
import Createuser from './createuser'
import Edituser from './edituser';
import createproduct from './createproduct';
import Editproduct from './editproduct';
import { UserProvider } from './usercontext';
import { ProductProvider } from './productcontext';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
    <Sidemenu></Sidemenu>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topmenu></Topmenu>
      <div class="container-fluid">
          <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <UserProvider>
            <Route path="/users" component={Users} exact={true}/>
            <Route path="/create-user" component={Createuser} exact={true}/>
            <Route path="/users/edit/:id" component={Edituser} exact={true}/>
            <ProductProvider>
            <Route path="/products" component={Products} exact={true}/>
            <Route path="/create-product" component={createproduct} exact={true}/>            
            <Route path="/products/edit/:id" component={Editproduct} exact={true}/>
            </ProductProvider>
            </UserProvider>
          </Switch>
      </div>
      </div>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
