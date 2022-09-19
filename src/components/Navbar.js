import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" style={{height: '30px', width:'30px'}}>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" aria-checked="false" onClick={props.toggleMode} />
                    <label className="form-check-label text-${props.mode==='light' ? 'dark' : 'light'" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div> */}


          {/* COLOUR PALLETTE --> */}
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px', width:'30px', cursor:'pointer'}}></div>
            <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" aria-checked="false" onClick={()=>{props.toggleMode(null)}} />
                    <label className="form-check-label text-${props.mode==='light' ? 'dark' : 'light'" htmlFor="flexSwitchCheckDefault">{props.toggleMode}</label>
            </div>
          </div>

        </div> 
      </nav>
    </div>
  )
}


// PropTypes-->
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

// use .isRequired for making the field required compulsory.

// Default PropTypes-->
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText:'Set About here'
}
