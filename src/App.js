import datas from './Data';
import './App.css';
import React, { useMemo , useCallback} from 'react';


function App() {
  const [search, setSearch] = React.useState("");
  const [age, setAge] = React.useState(datas)
  const sapXep = () => {
    datas.sort((a, b) => {
      return a.age - b.age;
    });
    setAge([...age])
  }
  
  return (
    <div className="App">
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
        return <div id='data' key={data.id}>{data.name} - {data.age}</div>
      })}
    </div>
  );
}

export default App;
