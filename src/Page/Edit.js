import { Button } from '@mantine/core';
import React, {  useRef } from 'react';

function Edit() {
    const obj = {
        name: "",
        age: "",
      }
      const inputRef = useRef()
    return (
        <div>
            <label>Tên: </label>
            <input ref={inputRef} name="name" id='name' ></input>
            <label>Tuổi: </label>
            <input name="age" id='age' ></input>
            <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Sửa</Button>
        </div>
    )
}
export default Edit;