import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Navbar from "./components/navbar/Navbar";
import Oredr from "./components/Order/Oredr";
import News from './Page/News/News'
import NoMatch from "./Page/NoMatch/NoMatch";
import Products from "./Page/Products/Products";
import Featured from "./components/ProductsCoponents/Featured";
import New from "./components/ProductsCoponents/New";
import Users from "./components/Users/Users";
import UserDetailes from "./components/Users/UserDetailes";
import Admin from "./components/Users/Admin";
import Profile from './Page/Profile/Profile'
import { AuthProvider } from "./components/Auth";
import { Login } from "./components/Login";
import CounterReducer from "./UseReducer/CounterReducer";
import FetchData from "./components/FechData/FetchData";
import FetchData2 from "./components/FechData/FetchData2";
const App = () => {
  return (
    <AuthProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News/>}/>
        <Route path="products" element={<Products/>}>
          <Route index element={<Featured/>}/>
          <Route path="featured" element={<Featured/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
        <Route path="order" element={<Oredr/>}/>
        <Route path="*" element={<NoMatch/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="users" element={<Users/>}>
        <Route path=":userId" element={<UserDetailes/>}/>
        <Route path="admin" element={<Admin/>}/>
        </Route>
        <Route path="counterreducer" element={<CounterReducer/>}/>
        <Route path="fetchdata" element={<FetchData/>}/>
        <Route path="fetchdata2" element={<FetchData2/>}/>
      </Routes>
      </AuthProvider>
  );
};

export default App;
