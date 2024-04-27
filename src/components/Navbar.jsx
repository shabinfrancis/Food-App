import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid  fs-0.5 fst-italic">
                <img src="../public/Food-logo.png" alt="" style={ {height: "50px"}}/>
                    <Link className="navbar-brand fc-light" to="/">The Food Village</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin" >Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}