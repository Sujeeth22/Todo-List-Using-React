
import React, { useState } from 'react'
import{ v4 as v} from 'uuid';



const Home = () => {
  const[add,setAdd]=useState();
  
const change=(e)=>{
  setAdd(e.target.value);
}
const[data,setData]=useState([]);
const click=()=>{
  if(add.trim()!==''){
    const newItem={
      id:v(),
      text:add
    }
  setData([...data,newItem]);
  setAdd('');
  }
}
const deleteItem=(id)=>{
  const filterItems=data.filter(items=>items.id!==id)
  setData(filterItems)
};



  return (
    <><div className='header'>
      <h1>TODO LIST</h1>


    </div>
    <div className='body'>
      <label>Items 1:</label>
      <input type='text' value={add} onChange={change}></input>
      </div>
      
      <div className='bd'>
      <button onClick={click}>Add</button></div>


      <div className='table'>
        <table>
          <thead>
          <tr>
            <th>items</th>
          </tr></thead>
          <tbody>
            {data.map((value)=>(
              <tr key={value.id}>
                <td>{value.text}</td>
                <td><button onClick={()=>deleteItem(value.id)}>Delete</button></td>
                </tr>
            ))}
            
            
          </tbody>
        </table>
      </div>
      </>
  )
}

export default Home
