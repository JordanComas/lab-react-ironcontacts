import React from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

//🏆

function App() {
  const [contacts, setContacts] = React.useState(contactsJSON.slice(0, 5));
  const [bank, setBank] = React.useState(contactsJSON.slice(5));

  const addContact = () => {
    let num = Math.floor(Math.random() * bank.length);
    let contactCopy = [...contacts];
    let bankCopy = [...bank];

    if (bank.length > 0) {
      setContacts(contactCopy.concat(bank[num]));
      bankCopy.splice(num, 1);
      setBank(bankCopy);
    }
  };

  const sortPopularity = () => {
    let concatCopy = [...contacts];
    concatCopy.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    setContacts(concatCopy);
  };

  const sortName = () => {
    let concatCopy = [...contacts];
    concatCopy.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    setContacts(concatCopy);
  };

  const remove = (contactToRemove) => {
    let filteredArr = contacts.filter(function (singleContact) {
      return contactToRemove !== singleContact;
    });
    setContacts(filteredArr);
  };

  console.log(bank);

  return (
    <div>
      <table className="main">
        <h1 className="title">Iron Contacts</h1>
        <button onClick={addContact}>Add Random Contact</button>
        <button onClick={sortPopularity}>Sort By Popularity</button>
        <button onClick={sortName}>Sort By Name</button>
        <tr className="contents">
          <td>Picture: </td>
          <td>Name: </td>
          <td>Popularity: </td>
          <td>Won an Oscar: </td>
          <td>Won an Emmy: </td>
          <td>Actions: </td>
        </tr>

        {contacts.map(function (contact) {
          return (
            <tr className="info">
              <img width="100px" src={contact.pictureUrl}></img>
              <td className="name">{contact.name}</td>
              <td className="pop">{contact.popularity.toFixed(2)}</td>
              <td className="oscar">{contact.wonOscar ? "⭐️" : ""} </td>
              <td className="emmy">{contact.wonEmmy ? "🏆" : ""} </td>
              <button className="remove" onClick={() => remove(contact)}>
                Delete
              </button>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
