import React from 'react'

export default function Square({item,handleClick}){



  return (
    <>
    {item && item ? (
            <div 
                className={`box ${item.isClicked ? "green":"yellow"}`}
                 onClick={()=>handleClick(item)}
                 >
             {item.id}
            </div>
        ):(
        <div></div>
        )
    }
    </>
   
  );
}
