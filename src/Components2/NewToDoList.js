import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const getLocalItems = () => {
  let list = localStorage.getItem("viranchee")
  if (list) {
    return JSON.parse(localStorage.getItem("viranchee"));
  }
  else {
    return []
  }
}

const TodoList = () => {
  const [activity, setActivity] = useState();
  const [listData, setListData] = useState(getLocalItems());
  const [togglesubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addActivity = () => {
    if (!activity) { }
    if (activity && !togglesubmit) {
      setListData(listData.map((elem) => {
        if (elem.id === isEditItem) {
          return { ...elem, name: activity }
        }
        return elem;
      })
      )
      setToggleSubmit(true);
      setActivity("");
      setIsEditItem(null);
    }
    else {
      const allInputData = { id: new Date().getTime().toString(), name: activity }
      setListData([...listData, allInputData]);
      setActivity('');
    }
  }

  const removeActivity = (id) => {
    const updatedListData = listData.filter((elem) => {
      return id !== elem.id;
    })
    setListData(updatedListData);
  }

  const removeAll = () => {
    setListData([]);
  }

  const editActivity = (id) => {
    let newEditItem = listData.find((elem) => {
      return elem.id === id;

    })
    setToggleSubmit(false);
    setActivity(newEditItem.name);
    setIsEditItem(id);
  }

  // add items in localStorage
  useEffect(() => {
    localStorage.setItem("viranchee", JSON.stringify(listData))
  }, [listData])

  return (
    <>
      <div className='container'>
        <div className='header'>
          TODO LIST
        </div>
        <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => { setActivity(e.target.value) }}></input>
        {
          togglesubmit ? <button onClick={addActivity}> Add </button> :
            <button onClick={addActivity}> Edit </button>
        }
        <p className='List-data'>Here is your list</p>
        {listData !== [] && listData.map((elem) => {
          return <>
            <p key={elem.id}>
              <div style={{ backgroundColor: "green",color:"white", width: "20%", marginBottom: "-25px" }}>{elem.name}</div>
              <button style={{ width: "10%", marginLeft: "230px" }} onClick={() => editActivity(elem.id)}> Edit </button>
              <button style={{ width: "10%", marginLeft: "2px" }} onClick={() => removeActivity(elem.id)}> Remove</button>
            </p>
          </>
        })}
        {listData.length >= 1 && <button onClick={removeAll}> Remove All</button>}
      </div>
    </>
  )
}

export default TodoList

