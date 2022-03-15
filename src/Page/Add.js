import { Button } from '@mantine/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
function Add(props) {
    const { register, handleSubmit } = useForm()
    const { add, setAdd} = useState("")
    
    const onAdd = (data) => {
        console.log(data);
            
    }
    return (
        <form onSubmit={handleSubmit(onAdd)}>
            <div>
                <label>Tên: </label>
                <input name="name" id='name' {...register('name')}></input>
                <label>Tuổi: </label>
                <input name="age" id='age' {...register('age')}></input>
                <Button type='submit' variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>Thêm</Button>
            </div>
        </form>
    )
}

export default Add;