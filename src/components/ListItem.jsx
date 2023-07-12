import React, { useContext } from "react";
import { cards, useTodoContext } from "../context/Cards";
import { FaTrash, FaEdit } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
const ListItem = ({ item }) => {
  const navigate = useNavigate();
  const { deleteContacts } = useContext(cards);
  return (
    <div className="card">
      <img src={item.img} />
      <div className="card-details">
        <h3>{item.name}</h3>
        <h3>{item.lastName}</h3>
        <p>{item.age}</p>
        <p>{item.number}</p>
      </div>

      <FaTrash
        className="delete"
        onClick={() => {
          deleteContacts(item.id);
        }}
        variant="danger"
      />

      <FaEdit
        className="edit"
        onClick={() => navigate(`/edit/${item.id}`)}
        variant="primary"
      />
    </div>
  );
};

export default ListItem;
