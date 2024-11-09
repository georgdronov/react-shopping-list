import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/shoppingListSlice";
import { ListGroup, Button } from "react-bootstrap";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center bg-dark text-light">
      <span>{item.name} - Quantity: {item.quantity}</span>
      <Button variant="danger" size="sm" onClick={handleDelete}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default Item;
