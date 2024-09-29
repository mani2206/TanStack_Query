import React, { useState } from "react";

function Swapping() {
  const [listone, setListone] = useState([
    { id: 1, name: "Manikandan" },
    { id: 2, name: "Raja" },
  ]);

  const [listtwo, setListtwo] = useState([
    { id: 1, name: "vijay" },
    { id: 2, name: "vijaykanth" },
  ]);

  const [swap, setSwap] = useState(false);

  const handleCheckbox = (e, item) => {
    // console.log(item,'item')
    if (e.target.checked) {
      setSelectItem((prev) => [...prev, item]);
    } else {
      setSelectItem((prev) => prev.filter((i) => i.id !== item.id));
    }
  };

  const [selecteditem, setSelectItem] = useState([]);
  const [originalone, setOriginalOne] = useState([]);

  const [originaltwo, setOriginalTwo] = useState([]);

  const swapItem = () => {
    if (!swap) {
      setOriginalOne([...listone]);
      setOriginalTwo([...listtwo]);

      const listsfirst = [...listone];
      console.log(listsfirst, "start");

      const listsseco = [...listtwo];

      console.log(listsseco, "start2");

      selecteditem.forEach((selecteditems) => {
        const firtIndex = listsfirst.findIndex(
          (item) => item.id === selecteditems.id
        );

        console.log(firtIndex, "hello");

        const secondIndex = listsseco.findIndex(
          (item) => item.id === selecteditems.id
        );

        if (firtIndex !== -1 && secondIndex !== -1) {
          [listsfirst[firtIndex].name, listsseco[secondIndex].name] = [
            listsseco[secondIndex].name,
            listsfirst[firtIndex].name,
          ];
        }
      });
      setListone(listsfirst);
      setListtwo(listsseco);
      setSwap(true);
    } else {
      const listsfirst = [...listone];
      console.log(listsfirst, "start");

      const listsseco = [...listtwo];

      console.log(listsseco, "start2");

      selecteditem.forEach((selecteditems) => {
        const firtIndex = listsfirst.findIndex(
          (item) => item.id === selecteditems.id
        );

        console.log(firtIndex, "hello");

        const secondIndex = listsseco.findIndex(
          (item) => item.id === selecteditems.id
        );

        if (firtIndex !== -1 && secondIndex !== -1) {
          [listsfirst[firtIndex].name, listsseco[secondIndex].name] = [
            listsseco[secondIndex].name,
            listsfirst[firtIndex].name,
          ];
        }
      });

      setListone(listsfirst);
      setListtwo(listsseco);
      setSwap(false);
    }
  };
  return (
    <>
      <h4>List Item</h4>
      <div className="d-flex">
        {/* first list  */}
        <ul className="" style={{ listStyle: "none" }}>
          {listone.map((item) => (
            <li key={item.id} className="">
              <input
                type="checkbox"
                className="mx-2"
                onChange={(e) => handleCheckbox(e, item)}
              />
              {item.name}
            </li>
          ))}
        </ul>

        {/* second LIst  */}
        <ul className="" style={{ listStyle: "none" }}>
          {listtwo.map((items) => (
            <li key={items.id} className="">
              {items.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className="btn btn-info"
          onClick={swapItem}
          disabled={selecteditem.length === 0}
        >
          {swap ? "swap Back" : "swap Item"}
        </button>
      </div>
    </>
  );
}

export default Swapping;
