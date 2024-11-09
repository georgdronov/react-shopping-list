// src/components/ItemForm/ItemForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/shoppingListSlice";
import { Form, Button } from "react-bootstrap";

export const ItemForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && quantity) {
      dispatch(addItem({ name, quantity: parseInt(quantity) }));
      setName("");
      setQuantity("");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="itemName">
        <Form.Label className="text-light">Item Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="itemQuantity">
        <Form.Label className="text-light">Quantity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Add Item
      </Button>
    </Form>
  );
};
