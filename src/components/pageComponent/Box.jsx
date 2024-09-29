import React from 'react'
import { useState,useEffect } from 'react'
import Square from './Square'

function Box() {
    const [queue,setQueue]=useState([])
    const [grid,setGrid]=useState([
        {
            id:1,
            isClicked:false,
            isVisible:true
        },
        {
            id:2,
            isClicked:false,
            isVisible:true
        },
        {
            id:3,
            isClicked:false,
            isVisible:true
        }
    ])

    useEffect(() => {
        if (queue.length === 3) {
            let copyQueue = [...queue];
            console.log(copyQueue,"heloo");
            const timeOut = [];
    
            copyQueue.forEach((item, index) => {
                const timeOutId =  setTimeout(() => {
                    setGrid((prevGrid) =>
                         
                        prevGrid.map((gridItem) =>
                           
                            gridItem.id === item.id ? { ...gridItem, isClicked: false } : gridItem,
                            console.log(prevGrid,"prevGrid"),
                        )
                    );
    
                    if (index === copyQueue.length - 1) {
                        setQueue([]);
                    }
                }, index * 1000);
                timeOut.push(timeOutId);
            });
            return ()=>{
                timeOut.forEach((timeOutId)=>clearTimeout(timeOutId))
            }
        }
       
    }, [queue]);
    

    const handleClick = (item)=>{
       
        if (!queue.some(queueItem => queueItem.id === item.id)) {
            setQueue(prevQueue => [...prevQueue, item]);
            console.log(setQueue,"setQueue");
        }

        setGrid(
            grid.map((gridItem) => 
                gridItem.id === item.id ? { ...gridItem, isClicked: true } : gridItem
            )
        );   
    }
  return (
   <>
   <div className='App'>
    <div className='container'>
        {
            grid.map((item,id)=>{
                return(
                    <Square item={item} key={item.id} handleClick={handleClick}/>
                )
            })
        }
    </div>
   </div>
   </>
  )
}

export default Box