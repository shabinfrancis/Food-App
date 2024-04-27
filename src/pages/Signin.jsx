import React from "react"
import { Link } from "react-router-dom"

export default function Signin() {
  return (
    <>
      <div className="m-5"><h1><b>SIGN IN HERE</b></h1></div>
      <form noValidate>
        <div className="row m-5">
          <label for="inputEmail3" className="col-sm-2 col-form-label mt-5">Email</label>
          <div className="col-sm-10 mt-5">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row m-5">
          <label for="inputName3" className="col-sm-2 col-form-label mt-5">Username</label>
          <div className="col-sm-10 mt-5">
            <input type="name" className="form-control" id="inputName3" />
          </div>
        </div>
        <div className="row m-5">
          <label for="inputPassword3" className="col-sm-2 col-form-label mt-5 mb-5">Password</label>
          <div className="col-sm-10 mt-5 mb-5">
            <input type="password" className="form-control" id="inputPassword3" />
          </div>
        </div>
        <button type="submit" className="btn btn-danger m-5">Sign in</button>
      </form>
    </>
      )
}