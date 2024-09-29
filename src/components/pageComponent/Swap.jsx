import React, { useState } from "react";

export default function Swap() {
  const [list, setList] = useState([
    { id: 1, name: "mani" },
    { id: 2, name: "vijay" },
  ]);

  const [data, setData] = useState([
    { id: 1, name: "vijaykanth" },
    { id: 2, name: "Moodumuddi" },
  ]);

  const [swap, setSwap] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  console.log(selectedItems,"selectedItems");
  
  const [originalList, setOriginalList] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const swapItems = () => {
    if (!swap) {
      // Save the original lists before swapping
      setOriginalList([...list]);
      setOriginalData([...data]);

      // Create copies of the lists to swap selected items
      const newList = [...list];
      const newData = [...data];

      selectedItems.forEach((selectedItem) => {
        const listItemIndex = newList.findIndex((item) => item.id === selectedItem.id);

        console.log(listItemIndex,"hello")
        const dataItemIndex = newData.findIndex((item) => item.id === selectedItem.id);

        console.log(dataItemIndex,"hello1")

        if (listItemIndex !== -1 && dataItemIndex !== -1) {
          // Swap the names
          [newList[listItemIndex].name, newData[dataItemIndex].name] =
            [newData[dataItemIndex].name, newList[listItemIndex].name];
        }
      });

      // Update the list and data with the swapped values
      setList(newList);
      setData(newData);
      setSwap(true);
    } else {
      // Restore the original lists
      setList(originalList);
      setData(originalData);
      setSwap(false);
    }
  };

  const handleCheckboxChange = (e, item) => {
    if (e.target.checked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
    }
  };

  return (
    <>
      <h3>List</h3>
      <ul>
        {list.map((x) => (
          <li key={x.id}>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, x)}
            />
            {x.name}
          </li>
        ))}
      </ul>

      <h3>Data</h3>
      <ul>
        {data.map((y) => (
          <li key={y.id}>{y.name}</li>
        ))}
      </ul>

      <button onClick={swapItems} disabled={selectedItems.length === 0}>
        {swap ? "Swap Back" : "Swap Items"}
      </button>

      <h2>Selected Items</h2>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
