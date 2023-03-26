import React from "react";
import "../style/AdminHome.css";
import {Link} from "react-router-dom";
import Navbar from "./Navbar.js";
import { FaUser,FaUsers,FaCalendar,FaBox,FaClipboardCheck,FaExclamation } from "react-icons/fa";


const Adminhome = () => {
  return <div>
    <Navbar></Navbar>
    <div className="main-admin">
    <br></br>
    <div className="admin-flex">
    
      <Link to ="/ADmIn/allUSers">
        <div className="box-admin link-admin">
      
        <FaUser style={{marginTop:"20px"}}/><br></br>
          User
        </div>
      </Link>

      <Link to="/ADmIn/allClient"> 
        <div className="box-admin link-admin">
        <FaUsers style={{marginTop:"20px"}}/><br></br>
          Client
        </div>
      </Link>


      <Link to="/ADmIn/allassignment">
        <div className="box-admin link-admin" >
        <FaCalendar style={{marginTop:"20px"}}/><br></br>
          Assignment
        </div>
      </Link>
    </div>

    
    <br></br><br></br><br></br>
    <div className="admin-flex "> 
      
      <Link to="/ADmIn/allOrders">
        <div className="box-admin link-admin" >
        <FaBox style={{marginTop:"20px"}}/><br></br>
          Orders
        </div>
      </Link>
      <Link to="/ADmIn/feedback">
        <div className="box-admin link-admin">
        <FaClipboardCheck style={{marginTop:"20px"}}/><br></br>
          User Feedback
        </div>
      </Link>
      <Link to="/ADmIn/clientfeedback">
        <div className="box-admin link-admin">
        <FaExclamation style={{marginTop:"20px"}}/><br></br>
          Client Feedback
        </div>
      </Link>
      </div>
      <br></br>
    
  </div>
  </div>;
};

export default Adminhome;
