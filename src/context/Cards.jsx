import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../utils/Api";

export const cards = createContext();
export function useTodoContext() {
  return useContext(cards);
}

const Cards = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState({});

  const navigate = useNavigate();

  async function getContacts() {
    const { data } = await axios(API);
    setContacts(data);
  }

  async function addContacts(newContact) {
    const { data } = await axios.post(API, newContact);
    navigate("/");
  }
  async function deleteContacts(id) {
    const { data } = await axios.delete(`${API}/${id}`);
    getContacts();
  }
  async function editContact(id, newContact) {
    await axios.patch(`${API}/${id}`, newContact);
    getContacts();
    navigate("/");
  }
  async function getOneContact(id) {
    const { data } = await axios(`${API}/${id}`);

    setOneContact(data);
  }
  const value = {
    getContacts,
    contacts,
    addContacts,
    deleteContacts,
    getOneContact,
    editContact,
    oneContact,
  };

  return <cards.Provider value={value}>{children}</cards.Provider>;
};

export default Cards;
