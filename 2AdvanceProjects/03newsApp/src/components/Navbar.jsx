import React from "react";

const Navbar = ({setcategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
             {/* logo  */}
            <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4">NewsMag</span>
            </a>
            

            {/* all Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" >
                    {/* 1 */}
                    <li className="nav-item" style={{cursor: 'pointer'}}>
                        {/* OnClick function to change the category */}
                        <div className="nav-link" href="#" onClick={() =>setcategory("technology")}>
                            Technology
                        </div>
                    </li>
                    
                    {/* 2 */}
                    <li className="nav-item" style={{cursor: 'pointer'}}>
                        <div className="nav-link" href="#" onClick={() =>setcategory("business")}>
                            Business
                        </div>
                    </li>
                    {/* 3 */}
                    <li className="nav-item" style={{cursor: 'pointer'}}>
                        <div className="nav-link" href="#" onClick={() =>setcategory("health")}>
                            Health
                        </div>
                    </li>
                    {/* 4 */}
                    <li className="nav-item" style={{cursor: 'pointer'}}>
                        <div className="nav-link" href="#" onClick={() =>setcategory("sports")}>
                            Sports
                        </div>
                    </li>
                    {/* 5 */}
                    <li className="nav-item" style={{cursor: 'pointer'}}>
                        <div className="nav-link" href="#" onClick={() =>setcategory("entertainment")}>
                            Entertainment
                        </div>
                    </li>  
                </ul>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
