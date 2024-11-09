import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/shoppingListSlice";
import ItemForm from "../ItemForm/ItemForm";
import Item from "../Item/Item";
import { ListGroup, Container } from "react-bootstrap";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingList.items);
  const status = useSelector((state) => state.shoppingList.status);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <Container className="d-flex flex-column align-items-center vh-100">
      <ItemForm />

      <div
        className="p-4 bg-dark rounded border border-light mt-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        {status === "loading" && (
          <p className="text-light text-center">Loading...</p>
        )}
        {status === "failed" && (
          <p className="text-danger text-center">Failed to load items.</p>
        )}

        <ListGroup variant="flush" className="bg-secondary text-light rounded">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default ShoppingList;
