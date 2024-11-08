import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Provider store={store}>
      <Container className="p-3">
        <h1 className="text-center text-light">Shopping List</h1>
        <ShoppingList />
      </Container>
    </Provider>
  );
}

export default App;
