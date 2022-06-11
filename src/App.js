import './App.css';
import React,{useState} from 'react';
import Main from './components/Main';
import ContactList from './components/ContactList';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // console.log(uuidv4());
  const [contact, setcontacts] = useState([]);

  const contactfunction = (e)=>{
    setcontacts([...contact,{
      id:uuidv4(),
      name:e.name,
      phone:e.phone,
      email:e.email
    }])
  };
  const deletefunction = (de) => {
    const newContactList = contact.filter((c)=>{
      return c.id !== de
    })
    setcontacts(newContactList);
  };

  return (
    <div className="App">
      <Header/>
      <Main tempfuncall ={contactfunction}/>
      <ContactList contacts = {contact} delfunc={deletefunction} />
    </div>
  );
}

export default App;
