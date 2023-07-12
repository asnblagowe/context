import React, { useEffect, useState } from "react";
import { useTodoContext } from "../context/Cards";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");
  const [number, setNumber] = useState("");

  const { getOneContact, editContact, oneContact } = useTodoContext();

  const { id } = useParams();
  useEffect(() => {
    getOneContact(id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setLastName(oneContact.lastName);
      setAge(oneContact.age);
      setImg(oneContact.img);
      setNumber(oneContact.number);
    }
  }, [oneContact]);

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
        editContact(id, newContact);
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
        Save
      </button>
    </form>
  );
};

export default Edit;
