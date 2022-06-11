import React ,{useContext}  from "react"
import './App.css';
import  NavbarAdmin  from './admin/NavbarAdmin'
import SidbarAdmin from './admin/SidbarAdmin'
import Dashboard from "./admin/Dashboard"
import FooterAdmin from './admin/FooterAdmin'
import Livreur  from "./admin/page/Livreur"
import Profile from "./admin/page/Profile"
import Login from "./user/Login";
import Home from "./user/Home";
import Categories from "./admin/page/Categories"
import {Header} from "./user/components/Header"
import {ShopIcon} from "./user/components/ShopIcon";
import { ImgList } from "./user/components/ImgList";
import { CategoryUser } from "./user/CategoryUser";
import { store } from './context/store'
import { Provider } from 'react-redux'
import {
  Routes,Route,BrowserRouter
} from "react-router-dom";
import {GlobaleState} from "./GlobaleState"
function App() {
  
  const role=localStorage.getItem("role")
  

  return (
   
    <div className="App"> 
     <Provider store={store}>
    <BrowserRouter>
    {
      role == "LIVREUR" ?   <div className="wrapper">
 

 
  <NavbarAdmin />
  <SidbarAdmin />
 
  
 <div className="content-wrapper">
  
 <Routes>
  <Route path="/" element={<Dashboard/>} />
  <Route path="/livreur" element={<Livreur />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/categories" element={<Categories />} />


</Routes>
  </div>
 


<FooterAdmin />
 

 
</div> : 
!role ?
<div>
<Header/>
<ShopIcon/>

<Routes>
 
<Route path="/" element={<Home/>} />
<Route path="/categories" element={<CategoryUser/>} />
<Route path="/login" element={<Login />} />

</Routes> 
</div>
:""

    }

</BrowserRouter>
</Provider>
    </div>
  );
}

export default App;
