import { Routes, Route } from 'react-router';
import React, { useMemo, useCallback, useRef } from 'react';
import { Button } from '@mantine/core';
import datas from './Data';
import './App.css';
import Edit from './Page/Edit';
import Add from './Page/Add';



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


  const sua = () => {

    
  }
  return (
    <div className="App">
      <div>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        <a href='/'>Home</a>
      </Button>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
        <a href='/Add'>Thêm</a>
      </Button>
      </div>
      <input type="text" placeholder='Search...' onChange={(e) => {
        setSearch(e.target.value)
      }}></input>

      <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} onClick={sapXep}>Sắp xếp theo tuổi</Button>
      {datas.filter((val) => {
        if (search === "") {
          return val;
        } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
          return val
        }
      }).map((data) => {
        return <div id='data' key={data.id}>{data.name} - {data.age} 
          
          <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} onClick={sua} > <a href="/edit">Sửa</a> </Button>
          <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} onClick={xoa}> Xóa </Button>

        </div>
      })}
      
      <Routes>
        <Route path='/edit' element={<Edit />} />
        <Route path='/add' element={<Add /> } />
      </Routes>
    </div>
  );
}

export default App;
