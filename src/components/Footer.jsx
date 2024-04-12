import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 The Food Village, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-body-emphasis" to="#"></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis" to="#"></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis" to="#"></Link></li>
      </ul>
    </div>
  )
}