import React from "react";
import { useSelector } from "react-redux";
import "../style/Users.css";
import {Link} from "react-router-dom";
import Navbar from "./Navbar.js";
import  { useEffect, useState } from "react";
import { getClientApi,deleteClientApi } from "../OneForAll";
import { Triangle } from "react-loader-spinner";
import Modal from "react-modal/lib/components/Modal";
import { toast } from "react-toastify";
import { FaUserCircle, FaWindowClose,FaUser,FaEnvelope,FaMapMarkedAlt,FaPhone } from "react-icons/fa";


const Users=()=>{
    useEffect(() => {
        getClient();
      }, []);
    const [allClient,setAllClient] = useState([]);
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
  const getClient = async ()=>{
    setModalIsOpen(true);
      try {
      const headers = {headers:{Authorization: `Bearer ${token}` }} 
      const response = await getClientApi(headers);
      console.log(response);
      if(response){
          setModalIsOpen(false);
      }
  
      setAllClient(response.data.clients);
          
      } catch (error) {
          console.log('error: ', error);
      }
  }

  const deleteClient= async(item)=>{
    setModalIsOpen(true);

    try {
        const{_id} = item;
        const headers = {headers:{Authorization: `Bearer ${token}` }}
        const response = await deleteClientApi(headers,_id);
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
        getClient();
    } catch (error) {
        console.log('error: ', error);
        
    }
}
    return(
        <div>
            <Navbar></Navbar>
        <div className="flex-users-admin">
        {
           
           allClient.map((item)=>{
                console.log(item);
              if(item.usertype == "client")
              {
                return(
                    <div>
                    <div className="User-Profile-admin">
                    <sapn title="delete" onClick={()=>deleteClient(item)}><FaWindowClose/></sapn>
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