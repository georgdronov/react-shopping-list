// src/components/ShoppingList/ShoppingList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/shoppingListSlice";
import ItemForm from "../ItemForm/ItemForm";
import Item from "../Item/Item";
import { ListGroup } from "react-bootstrap";

export const ShoppingList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingList.items);
  const status = useSelector((state) => state.shoppingList.status);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="mt-4">
      <ItemForm />
      {status === "loading" && <p className="text-light">Loading...</p>}
      {status === "failed" && (
        <p className="text-danger">Failed to load items.</p>
      )}
      <ListGroup variant="flush">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ListGroup>
    </div>
  );
};
