import React, { useEffect, useState } from "react";
import { useAuth } from "../Store/Auth";
const AdminContact = () => {
  const [contact, setContact] = useState([]);

  const { authorizationToken } = useAuth();

  const getContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/contact", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setContact(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <div>
      {contact.length > 0 ? (
        contact.map((cont, index) => (
          <h1 key={index}>{cont}</h1> // Assuming 'cont' is a string or has a string property
        ))
      ) : (
        <div>No contacts available</div>
      )}
    </div>
  );
};

export default AdminContact;
