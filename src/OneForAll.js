import axios from "axios";
const host = "https://taskify-backend-server.onrender.com";

export const loginUserService = async (data) => {
    console.log("data: ", data);
    const url = "/logIn";
    try {
      const link = host + url;
      const receive = await axios.post(link, data);
  
      return { receive };
    } catch (error) {
      console.log("error: ", error);
  
      return { error };
    }
  };


  export const getUserApi = async (headers) => {
    console.log("headers: ", headers);
    const url = "/getAllUsers";
    const host = "http://localhost:4000";
    const link = host + url;
    try {
      const result = await axios.get(link, headers);
      return result;
    
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };


  export const deleteUserApi = async (headers, _id) => {
    try {
      const url = `/deleteUser/${_id}`;
      const link = host + url;
      const response = await axios.delete(link, headers);
      return response;
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };


  export const getClientApi = async (headers) => {
    console.log("headers: ", headers);
    const url = "/getAllClients";
    const host = "http://localhost:4000";
    const link = host + url;
    try {
      const result = await axios.get(link, headers);
      return result;
    
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };


  
  export const deleteClientApi = async (headers, _id) => {
    try {
      const url = `/deleteClient/${_id}`;
      const link = host + url;
      const response = await axios.delete(link, headers);
      return response;
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };


  export const getAssignmentApi = async (headers) => {
    console.log("headers: ", headers);
    const url = "/adminAssignments";
    const host = "http://localhost:4000";
    const link = host + url;
    try {
      const result = await axios.get(link, headers);
      return result;
    
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };


  export const getFeedbackUserApi = async (headers) => {
    console.log("headers: ", headers);
    const url = "/getUserFeedback";
    const host = "http://localhost:4000";
    const link = host + url;
    try {
      const result = await axios.get(link, headers);
      return result;
    
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };


  

  export const getFeedbackClientApi = async (headers) => {
    console.log("headers: ", headers);
    const url = "/getClientFeedback";
    const host = "http://localhost:4000";
    const link = host + url;
    try {
      const result = await axios.get(link, headers);
      return result;
    
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };


  export const getAllOrderstApi = async (headers) => {
    console.log("headers: ", headers);
    const url = "/getOrders";
    const host = "http://localhost:4000";
    const link = host + url;
    try {
      const result = await axios.get(link, headers);
      return result;
    
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };