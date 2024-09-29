import React, { useState } from "react";

const Text = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ]);
  const [item, setItem] = useState([
    { id: 1, name: "Item 3" },
    { id: 2, name: "Item 4" },
  ]);

  const [isSwapped, setIsSwapped] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [originalItem, setOriginalItem] = useState([]);

  const swapItems = () => {
    if (!isSwapped) {
      const newItems = [...items];
      const newItem = [...item];

      // Save the original state for swap back functionality
      setOriginalItems(newItems);
      setOriginalItem(newItem);

      selectedItems.forEach((selectedItem) => {
        const index1 = newItems.findIndex((i) => i.id === selectedItem.id);
        const index2 = newItem.findIndex((i) => i.id === selectedItem.id);
    
        if (index1 !== -1 && index2 !== -1) {
          [newItems[index1].name, newItem[index2].name] = [
            newItem[index2].name,
            newItems[index1].name,
          ];
        }
      });

      setItems(newItems);
      setItem(newItem);
      setIsSwapped(true);
    } else {

      const newItems = [...items];
      const newItem = [...item];

      selectedItems.forEach((selectedItem) => {
        const index1 = newItems.findIndex((i) => i.id === selectedItem.id);
        const index2 = newItem.findIndex((i) => i.id === selectedItem.id);
      
        if (index1 !== -1 && index2 !== -1) {
          [newItems[index1].name, newItem[index2].name] = [
            newItem[index2].name,
            newItems[index1].name,
          ];
        }
      });
      setItems(originalItems);
      setItem(originalItem);
      setIsSwapped(false);
    }
  };

  const handleCheckboxChange = (e, item) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, item)}
            />
            {item.name}
          </li>
        ))}
      </ul>
      <ul>
        {item.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={swapItems}  disabled={selectedItems.length === 0}>
        {isSwapped ? "Swap Back" : "Swap Items"}
      </button>

      <h2>Selected Items</h2>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Text;
