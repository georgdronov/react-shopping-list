import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/shoppingListSlice";
import { Form, Button, Container } from "react-bootstrap";

const ItemForm = () => {
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
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <div
        className="p-4 bg-dark rounded border border-light"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <Form onSubmit={handleSubmit} className="mb-4">
          <Form.Group controlId="itemName" className="mb-3">
            <Form.Label className="text-light">Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-dark text-light"
            />
          </Form.Group>
          <Form.Group controlId="itemQuantity" className="mb-3">
            <Form.Label className="text-light">Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="bg-dark text-light"
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="success" type="submit" className="btn-lg mt-3">
              Add Item
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default ItemForm;
