import React, { useState } from "react";
import Navbar from "./Navbar";
import "../style/Login.css";
import { useDispatch } from "react-redux";
import signin from "../images/image2.gif"
import Modal from "react-modal/lib/components/Modal";
import { Link, useHistory } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import { toast } from "react-toastify";
import { adminData } from "../Reducer/admin.reducer";
import {  loginUserService } from "../OneForAll";
Modal.setAppElement("#root");
const Signin=()=>{
    const [logUser, setLoguser] = useState({
        email: "",
        password: null,
      });
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const dispatch = useDispatch();
      const history = useHistory();

    const referesh = (e) => {
        e.preventDefault();
      };

      const formInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setLoguser({ ...logUser, [name]: value });
      };

      const LoginUser = async () => {
        setModalIsOpen(true);
        console.log("logUser: ", logUser);
        if (logUser.email !== "" && logUser.password !== null) {
            try {
              const response = await loginUserService(logUser);
              if (response) {
                setModalIsOpen(false);
              }
              console.log("response: ", response.receive.data);
      
              if (response.receive.data.status === "404") {
                toast.error("invalid details");
              } else {
                toast.success("login successfull");
              }
              const x =response.receive.data.logedActor.actor;
              console.log("x",x)
              const {  token } = response.receive.data.logedActor;
              const   user  = x;
              console.log("User: ", user);
              // console.log("User: ", token);

              const {  email, usertype, _id } = user;
              const signupUser = {  email,  _id };
              const theUser = { signupUser, token };
              if (usertype === "admin") {
                dispatch(adminData({ theUser }));
                if ( response.receive.data.logedActor.actor) {
                  return history.push("/ADmIn/adminHome");
                }
              }
            } catch (error) {
                console.log("error: ", error);
              }
            } else {
                toast.info("please enter details", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                setModalIsOpen(false);
              }
      }
    return(
        <>
            <Navbar/>
           <form onSubmit={(e) => referesh(e)}>
                <div style={{ display: "flex",  }}>
                <div style={{ flex: "50%" }}>
                <h2 className="signin-title">Please Enter Your Login Details</h2>
                <hr className="hr-signin"></hr>
                <div style={{ textAlign: "center" }}>
                <br></br>
              <p style={{ marginRight: "190px", marginBottom: "-1px" }}>
                Email.
              </p>
              <input
                type="text"
                placeholder="Enter email.."
                className="input-signin"
                name="email"
                value={logUser.email}
                onChange={formInput}
              ></input>
              <br></br>
              <br></br>
              <p style={{ marginRight: "180px", marginBottom: "-1px" }}>
                Password
              </p>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input-signin"
                name="password"
                value={logUser.password}
                onChange={formInput}
              ></input>
              <br></br>
              <br></br>
              <br></br>
              <button className="button" 
              onClick={LoginUser}
              >
                Log In
              </button>
                </div>
                </div>
                <hr className="hr-signin"></hr>
                <div style={{ flex: "50%" }}>
                <img
                    src={signin}
                    alt="crashed"
                     style={{ height: "600px", width: "800px" }}
                ></img>
                </div>
                </div>
            </form>
            
        </>
    )
}

export default Signin;