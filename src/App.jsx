import "./styles.css";
import { useState } from "react";

export default function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-1234567" }
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleNameChange = (evt) => {
    setNewName(evt.target.value);
  };

  const handlePhoneChange = (evt) => {
    setNewPhone(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    persons.find((person) => person.name === newName)
      ? alert(`${newName} already exists`)
      : setPersons((prevPersons) => [
          ...prevPersons,
          { name: newName, phone: newPhone }
        ]);

    setNewName("");
    setNewPhone("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input type="text" onChange={handleNameChange} value={newName} />
          number:{" "}
          <input type="text" onChange={handlePhoneChange} value={newPhone} />
        </div>

        <button>add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <p key={index}>
          {person.name} {person.phone}
        </p>
      ))}
    </div>
  );
}
