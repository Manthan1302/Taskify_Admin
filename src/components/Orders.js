import React from "react";
import "../style/Assignment.css";
import {Link} from "react-router-dom";
import Navbar from "./Navbar.js";
import { getAllOrderstApi } from "../OneForAll";
import  { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Triangle } from "react-loader-spinner";
import Modal from "react-modal/lib/components/Modal";
import { toast } from "react-toastify";
import Aos from "aos";

const Orders=()=>{

    useEffect(() => {
        getOrders();
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
      const [allOrders,setAllOrders]=useState([]);

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
      const getOrders= async()=>{
        setModalIsOpen(true);
            try {
                const headers = {headers:{Authorization: `Bearer ${token}` }}
                const response = await getAllOrderstApi(headers);
                console.log('response: ', response);
                if(response){
                    setModalIsOpen(false);
                }
    
                console.log('response.data.allOrder: ', response);
                setAllOrders(response.data.allOrders); 
            } catch (error) {
                console.log('error: ', error);    
            }
        };
    return(
        <div>
            <Navbar></Navbar>
            <div>
            
            <table cellPadding="10px" className="table-order " >
                <tr className="border-tr-order table-title-order">
                    <td>User Name</td>
                    <td>Client Name</td>
                    <td>Price</td>
                    <td>Status</td>
                </tr>
                {
                    allOrders.map((item)=>{
                   
                         return(
               <tr className="border-tr-order" data-aos="zoom-in-down"> 
                    <td>
                    <p>{item.user.firstName} {item.user.lastName}</p> 
                    </td>
                     <td>
                         <p>{item.client.firstName} {item.client.lastName}</p>
                     </td>
                  
                    <td>
                         <p>{item.finalPrice}</p>
                     </td>
                    <td>
                         <p>{item.workStatus}</p>
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
    )
}


export default Orders