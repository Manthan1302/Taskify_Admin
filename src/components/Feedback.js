import React from "react";
import "../style/Assignment.css";
import {Link} from "react-router-dom";
import Navbar from "./Navbar.js";
import { getFeedbackUserApi } from "../OneForAll";
import  { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Triangle } from "react-loader-spinner";
import Modal from "react-modal/lib/components/Modal";
import Aos from "aos";

const Feedback =()=>{

    useEffect(() => {
        getUserFeedback();
      }, []);
      useEffect(()=>{
        Aos.init({duration:1000});
      },[]);

      const [modalIsOpen, setModalIsOpen] = useState(false);
      const customStyles2 = {
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
      const [allUserfeedback,setAllUserFeedback]=useState([]);



           //style
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

      const getUserFeedback = async()=>{
        setModalIsOpen(true);
            try {
                const headers = {headers:{Authorization: `Bearer ${token}` }}
                const response = await getFeedbackUserApi(headers);
                console.log('response: ', response);
                if(response){
                    setModalIsOpen(false);
                }
    
                console.log('response: ', response);
                setAllUserFeedback(response.data.allFeedback); 
            } catch (error) {
                console.log('error: ', error);    
            }
        };
    return(
        <div>
            <Navbar/>
            <table cellPadding="10px" className="table-order " >
            <tr className="border-tr-order table-title-order">
                <td>User Name</td>
                <td>User Phone No</td>
                <td>User Address</td>
                <td>Feedback</td>
            </tr>
            {
                allUserfeedback.map((item)=>{
                    if(item.user)
                    {
               console.log("item",item);
                     return(
           <tr className="border-tr-order" data-aos="zoom-in-down"> 
                <td>
                     <p>{item.user.firstName} {item.user.lastName}</p>
                </td>
                <td>
                <p>{item.user.phoneNumber}</p> 
                </td>
                 <td>
                     <p>{item.user.address}</p>
                 </td>
              
                <td>
                     <p>{item.feedback}</p>
                 </td>
               
             </tr>
   
                     )}
                 
                })

            }
            </table>

        </div>
    )
}

export default Feedback;