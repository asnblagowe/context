import React, { useContext, useState } from "react";
import { cards } from "../context/Cards";

const Add = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");
  const [number, setNumber] = useState("");
  const { addContacts } = useContext(cards);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newContact = {
          name,
          lastName,
          age,
          img,
          number,
        };
        addContacts(newContact);
        setName("");
        setLastName("");
        setAge("");
        setImg("");
        setNumber("");
      }}
      className="add"
    >
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="bg-dark"
        type="text"
        id="input1"
        placeholder="name"
        required
      />
      <input
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        className="bg-dark"
        type="text"
        id="input2"
        placeholder="lastName"
        required
      />
      <input
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
        className="bg-dark"
        type="text"
        id="input3"
        placeholder="img"
        required
      />
      <input
        value={img}
        onChange={(e) => {
          setImg(e.target.value);
        }}
        className="bg-dark"
        type="number"
        id="input4"
        placeholder="age"
        required
      />
      <input
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        className="bg-dark"
        type="number"
        id="input5"
        placeholder="number"
        required
      />
      <button className="bg-success" type="submit">
        Add
      </button>
    </form>
  );
};

export default Add;
