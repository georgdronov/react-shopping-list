import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Provider store={store}>
      <Container className="p-3 bg-dark text-light min-vh-100">
        <h1 className="text-center">Shopping List</h1>
        <ShoppingList />
      </Container>
    </Provider>
  );
};

export default App;
