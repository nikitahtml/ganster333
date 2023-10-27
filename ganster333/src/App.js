// import React,{useRef, useState } from 'react';
import './App.css';


function App(){
  
}
// function App() {
//   const list = [
//     {
//       id: 1,
//       name: "Nikita",
//       price: "80.00" ,
//       Address:"Petrovka" ,
//       Phone: "(171) 555-2421 ",  
//     },
//     {
//       id: 2,
//       name: "Danil",
//       price: "40.00" ,
//       Address:"Petrovka" ,
//       Phone: "(171) 555-2222 ",
//     },   
// ]

// const [ lists, setList] = useState(list)
// const [updateState, setUpdateState] = useState(-1)


// return(
  
//   <div className='crud'>
 
//   <div>
//   <AddList setList = {setList}/>
//   <form onSubmit = {handleSubmit}>
//   <table>
  
//       {
        
//           lists.map((current) => (
//               updateState === current.id ? <EditList current = {current} lists= {lists} setList= {setList}/> :
//               <tr>
                
                  
//                   <td>{current.name}</td> 
                                  
//                   <td>{current.price}</td>
                               
//                   <td>{current.Address}</td> 
                                   
//                   <td>{current.Phone}</td>                 
//                   <td>
                    
                     
                  
//                       <button className='edit' onClick= { () => handleEdit(current.id)}>Edit</button>
//                       <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
//                   </td>
                  
//               </tr>
//           ))
//       }
      
//   </table>
 
//   </form>
  
//   </div>
 
//   </div>
//   )

//   function handleEdit(id) {
//     setUpdateState(id)
//   }

//   function handleDelete(id) {
//     const newlist = lists.filter((li) => li.id !==id)
//     setList(newlist)
//   }

//   function handleSubmit(event){
//     event.preventDefault()
//     const name = event.target.elements.name.value
//     const price = event.target.elements.price.value
//     const newlist =   list.map((li) => (
//         li.id === updateState ? {...li, name: name, price: price} : li
//     ))
//     setList (newlist)
//     setUpdateState(-1)
//   }
// }

// function EditList({current, lists,setList}){
//   function handInputname(event){
//     const value = event.target.value;
//     const newlist =  lists.map((li) => (
//           li.id === current.id ? {...li, name:value} : li
//       ))
//       setList (newlist)

//   }
//   function handInputprice(event){
//     const value = event.target.value;
//     const newlist =  lists.map((li) => (
//           li.id === current.id ? {...li, price:value} : li
//       ))
//       setList (newlist)
//   }
//   return(
//       <tr>
//           <td><input type= "text" onChange={handInputname} name= 'name' value={current.name}/></td>
//           <td><input type= "text" onChange={handInputprice} name ='price' value={current.price}/></td>
//           <td><button type= "sambit">Update</button></td>
//       </tr>
//   )
// }

// function AddList({setList}){
//   const nameRef = useRef()
//   const priceRef = useRef()

//   function handSubmit(event){
//       event.preventDefault();
//       const name = event.target.elements.name.value;
//       const price = event.target.elements.price.value;
//       const newlist = {
//           id: 3,
//           name,
//           price
//       }
//       setList((prevlist)=> {
//           return prevlist.concat(newlist)
//       })
//       nameRef.current.value = ""
//       priceRef.current.value = ""
//   }
// return(
//   <form className='addForm' onSubmit={handSubmit}>
//       <input type ="text" name = "name" placeholder="Enter Name"  ref={nameRef}/>
//       <input type ="text" name = "price" placeholder="Enter Price" ref={priceRef} />
//       <button type="sabmit" >Add Product</button>
//   </form>
  
// )

// }
// // Add-New-Emploce
// // addForm



export default App;
