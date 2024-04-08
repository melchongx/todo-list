import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleItemCheck(updatedItem) {
    setItems((prevItems) =>
      prevItems.map((i) => (i.id === updatedItem.id ? updatedItem : i))
    );
  }

  function updateItem(updatedItem) {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  }

  function handleDeleteItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  return (
    <div className="App">
      <Header />
      <Form onAddItem={handleAddItems} />
      <ItemList
        items={items}
        onItemCheck={handleItemCheck}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
