import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  const del = props.delfunc;

  const renderthecontactList = props.contacts.map((item) => {
    return <ContactCard contactname={item} deletefun={(e)=>del(e)} />;
  });
  return (
    <div className="container pt-3">
      <h2>Contact List:</h2>
      {renderthecontactList}
      <hr />
    </div>
  );
}

export default ContactList;
