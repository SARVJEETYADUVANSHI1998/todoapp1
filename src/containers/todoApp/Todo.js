import React, { useState } from 'react'
import './todo.css'

export default (props)=>{
    const [first, setFirst]=useState('');
    const [second,setSecond]=useState([]);
    // const [edit, setEdite]=useState(true);

    const submitbutton = () =>{
        console.log('submit');
        //  console.log(editbutton);
        const arr = [first,...second,];
        setSecond(arr);
        console.log(arr);
        
        
    //     const ar = second;
    //     ar.push(first); 
    //     setSecond(ar); 
      }
     const x = (a)=>{
         setFirst(a);
     }

     const editbutton=()=>{
        console.log(first);
              const y =[];
              setFirst(y);
            //  console.log(y);
               setSecond(y);
     }

     const deletebutton=()=>{
        console.log(second);
        
       const ar =[];
       setSecond(ar);
       setFirst(ar);
    //    console.log(ar);
     }

        

   return (
        <div className="todolist">
         <h1 className="t2">todoApp</h1>
         <hr/>
         <p id="s">{props.nme} is nice</p>
         
         <input type="text" value={first} onChange={(el)=>{x(el.target.value)}}  id="todo" placeholder=" enter the number"/>
         <br/>
         <button onClick={submitbutton}    className="btn">submit</button>
         
         
         {/* <p>{first}</p> */}
         {
             second.map((item,index)=>{
                 return<div className="t1">
                     <button onClick={()=>{deletebutton()}}  className="delete-btn" > delete </button>
                     
                     
                     <button onClick={()=>{editbutton()}}  className="edit-btn">Edit</button>
                     <p>{item}</p>
                     
                </div>

             }
             
             )
         }
        </div>
    )
}