import React, { useContext, useEffect } from "react";
import { cards } from "../context/Cards";
import ListItem from "../components/ListItem";

const Home = () => {
  const { getContacts, contacts } = useContext(cards);
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className="container list">
      {contacts.map((item) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Home;
