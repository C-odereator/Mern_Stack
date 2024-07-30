import React, { useEffect } from "react";
import { useAuth } from "../Store/Auth";
const AdminContact = () => {
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
      console.log(data);
      // res.status(200).json(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <div>
      <h1>AdminCOntact</h1>
    </div>
  );
};

export default AdminContact;
