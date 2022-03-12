import datas from './Data';
import './App.css';
import React, { useMemo, useCallback, useRef } from 'react';


function App() {
  const [search, setSearch] = React.useState("");
  const [age, setAge] = React.useState(datas)
  
  const sapXep = () => {
    datas.sort((a, b) => {
      return a.age - b.age;
    });
    setAge([...age])
    console.log("sap xep")
  }
  

  const xoa = React.useCallback((id) => {
    datas.splice(id, 1)
    setAge([...age])
    console.log("xoa")
  }, [age])
  const obj = {
    name: "",
    age: "",
  }
  const [x, setX] = React.useState(obj)
  const inputRef = useRef()

  const sua = () => {
    
    inputRef.current.focus()
  }
  return (
    <div className="App">
      <label>Tên: </label>
      <input ref={inputRef} name="name" id='name' value={x.name}></input>
      <label>Tuổi: </label>
      <input name="age" id='age' value={x.age}></input>
      <input type="text" placeholder='Search...' onChange={(e) => {
        setSearch(e.target.value)
      }}></input>

      <button onClick={sapXep}>Sắp xếp theo tuổi</button> 
      {datas.filter((val) => {
        if (search === "") {
          return val;
        } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
          return val
        }
      }).map((data) => {
        return <div id='data' key={data.id}>{data.name} - {data.age}
          <button onClick={sua}> Sửa </button>
          <button onClick={xoa}> Xóa </button>
          
        </div>
      })}
    </div>
  );
}

export default App;
