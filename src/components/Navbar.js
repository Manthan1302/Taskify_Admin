import { React,useState } from "react";
import "../style/Navbar.css";
import { Link } from 'react-router-dom';
import Logo from "../images/Taskifylogo.png";
import "../style/Navbar.css";
import Modal from "react-modal/lib/components/Modal";
import { useDispatch } from "react-redux";
import {adminData} from "../Reducer/admin.reducer";
import { useHistory } from "react-router-dom";
import { FaArrowAltCircleRight} from "react-icons/fa";


const Navbar = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const logout = () => {
        const signupUser = { name: "", email: "", password: "", phoneNumber: "" };
        const token = "";
    
        const theUser = { signupUser, token };
    
        dispatch(adminData({ theUser }));
    
        setModalIsOpen(false);
        history.push("/signin");
      };
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
    return(
        <div className="main">
        <div className="left-nav">
            <Link to="/ADmIn/adminHome">
                <img src={Logo} alt="crashed" className="img"></img> </Link>
        </div>
        <div>
       <div className="logout-admin-nav"> <FaArrowAltCircleRight onClick={() => setModalIsOpen(true) } style={{color:"#fff",marginTop:"10px"}} /></div>
        </div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="modalbackground">
          <div className="modalcontainer">
            <div className="closebutton">
              <button className="cancel" onClick={() => setModalIsOpen(false)}>
                X
              </button>
            </div>
            <div className="body" style={{color:"black"}}>
              Are You Sure <br />
              You Want to Log out ?
            </div>
            <div className="modalbutton">
              <button className="no" onClick={() => setModalIsOpen(false)}>
                Cancel
              </button>
              <button className="yes" onClick={() => logout()}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
    )
}

export default Navbar;