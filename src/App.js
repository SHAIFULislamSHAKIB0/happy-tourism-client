import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import Header from './Pages/Header/Header'
import Booking from './Pages/Booking/Booking';
import Places from './Pages/Home/Places/Places';
import Footer from './Pages/Footer/Footer';
import AddPlace from './Pages/Addplace/AddPlace';
import ManagePlaces from './Pages/ManagePlaces/ManagePlaces';
import MyOrders from './Pages/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/places">
              <Places></Places>
            </Route>
            <PrivateRoute path="/booking/:placeId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/addplace">
              <AddPlace></AddPlace>
            </Route>
            <Route path="/manageplace">
              <ManagePlaces></ManagePlaces>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
