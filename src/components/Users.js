import React from "react";
import { useSelector } from "react-redux";
import "../style/Users.css";
import {Link} from "react-router-dom";
import Navbar from "./Navbar.js";
import  { useEffect, useState } from "react";
import { getUserApi,deleteUserApi } from "../OneForAll";
import { Triangle } from "react-loader-spinner";
import Modal from "react-modal/lib/components/Modal";
import { toast } from "react-toastify";
import { FaUserCircle, FaWindowClose,FaUser,FaEnvelope,FaMapMarkedAlt,FaPhone } from "react-icons/fa";


const Users=()=>{
    useEffect(() => {
        getUsers();
      }, []);
    const [allUsers,setAllUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid black",
    },
    };
  const token =  useSelector((state)=>state.adminReducer).token;
//   console.log("🚀 ~ file: Users.js:29 ~ Users ~ token:", token)
  const getUsers = async ()=>{
    setModalIsOpen(true);
      try {
      const headers = {headers:{Authorization: `Bearer ${token}` }} 
      const response = await getUserApi(headers);
      console.log("🚀 ~ file: Users.js:38 ~ getUsers ~ response:", response)
      if(response){
          setModalIsOpen(false);
      }
  
      setAllUsers(response.data.allusers.users);
          
      } catch (error) {
          console.log('error: ', error);
      }
  }

  const deleteUser = async(item)=>{
    setModalIsOpen(true);

    try {
        const{_id} = item;
        const headers = {headers:{Authorization: `Bearer ${token}` }}
        const response = await deleteUserApi(headers,_id);
        console.log('response: ', response);
        if(response){
            setModalIsOpen(false);
        }
        if(response.data.status === "200"){
          toast.success("User deleted Succesfully!")
        }
        else{
          toast.error("User is not Deleted!")
        }
        if(response)
        getUsers();
    } catch (error) {
        console.log('error: ', error);
        
    }
}
    return(
        <div>
            <Navbar></Navbar>
        <div className="flex-users-admin">
        {
           
            allUsers.map((item)=>{
                console.log(item);
              if(item.usertype === "user")
              {
                return(
                    <div>
                    <div className="User-Profile-admin">
                    <sapn title="delete" onClick={()=>deleteUser(item)}><FaWindowClose/></sapn>
                    <div className="icon-user"><FaUserCircle/></div>
                    <p><span><FaUser></FaUser></span> <span>{item.firstName}</span></p>
                    <p><span><FaEnvelope></FaEnvelope></span> <span>{item.email}</span></p>
                    <p><span><FaMapMarkedAlt/></span> <span>{item.address}</span></p>
                    <p><span><FaPhone></FaPhone></span> <sapn>{item.phoneNumber}</sapn></p>
                   </div>
                </div>
                   
             
            )
              }
            })
        }
        
         </div>
        <Modal isOpen={modalIsOpen}
      // onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}>
      <div
        style={{
          width: "7vw",
          height: "13vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Triangle
          color="black"
          height={100}
          width={100}
        />
      </div>
         </Modal>  
  </div>
    )
}

export default Users;