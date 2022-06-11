import React ,{useState} from 'react';
import {GrConfigure} from "react-icons/gr"
import {Link} from "react-router-dom"

 const SidbarAdmin = () => {
      const [admin,setAdmin] = useState({
          nom:"hamza",
          email:"hamza@gmail.com",
          Image:"https://i.pinimg.com/564x/57/f0/c7/57f0c74a5b6b0f78e565f9d268a6bba7.jpg"
      })
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="/" className="brand-link">
      <img src={admin.Image} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Apero Admin</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={admin.Image} className="img-circle elevation-2" alt="UserImage" />
        </div>
        <div className="info">
          <a href="/profile" className="d-block">{admin.email}</a>
        </div>
      </div>
  
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        
        <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                dashboard
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                list Commandes
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/livreur" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                Livreur
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/categories" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                Categories
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/gcqngdc" className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
                Produits
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/forms/general.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>General Elements</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/advanced.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Advanced Elements</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/editors.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Editors</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/validation.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Validation</p>
                </a>
              </li>
            </ul>
          </li>
         </ul>
      </nav>
     
    </div>
  </aside>
  );
};
export default SidbarAdmin ;