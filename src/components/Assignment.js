import React from "react";
import "../style/Assignment.css";
import {Link} from "react-router-dom";
import Navbar from "./Navbar.js";
import { getAssignmentApi } from "../OneForAll";
import  { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Triangle } from "react-loader-spinner";
import Modal from "react-modal/lib/components/Modal";
import { toast } from "react-toastify";
import Aos from "aos";
const Assignment = () => {

    useEffect(() => {
        getAssignment();
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
      const [allAssignment,setAllAssignment]=useState([]);

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

      const getAssignment = async()=>{
        setModalIsOpen(true);
            try {
                const headers = {headers:{Authorization: `Bearer ${token}` }}
                const response = await getAssignmentApi(headers);
                console.log('response: ', response);
                if(response){
                    setModalIsOpen(false);
                }
    
                console.log('response.data.allOrder: ', response);
                setAllAssignment(response.data.allAssignments); 
            } catch (error) {
                console.log('error: ', error);    
            }
        };
    return <div>
    <Navbar></Navbar>
    <div>
            
        <table cellPadding="10px" className="table-order " >
            <tr className="border-tr-order table-title-order">
                <td>Assignment Image</td>
                <td>Assignment Name</td>
                <td>Assignment Type</td>
                <td>Description</td>
                <td>Assignment Budget</td>
                <td>Client Name</td>
                <td>Client Phone No</td>
                <td>Assignment Status</td>
                <td></td>
              
            </tr>
            {
                allAssignment.map((item)=>{
               
                     return(
           <tr className="border-tr-order" data-aos="zoom-in-down"> 
                <td>
                     <img src={item.attachments[0]} alt="noImage"/>
                </td>
                <td>
                <p>{item.assignmentName}</p> 
                </td>
                 <td>
                     <p>{item.assignmentType}</p>
                 </td>
              
                <td>
                     <p>{item.description}</p>
                 </td>
                <td>
                     <p>{item.assignmentBudget}</p>
                </td>
                <td>
                    <p>{item.client.firstName} {item.client.lastName}</p>
                </td>
                <td>
                    <p>{item.client.contactNumber}</p>
                </td>
                <td>
                    <p>{item.assignmentStatus}</p>
                </td>
             </tr>
   
                     )
                 
                })

            }
            </table>
        </div>
        
        
             
                <Modal
        isOpen={modalIsOpen}
        
        style={customStyles2}
      >
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
}

export default Assignment