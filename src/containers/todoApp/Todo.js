import React, { useState } from 'react'
import './todo.css'

export default (props)=>{
    const [first, setFrist]=useState('');
    const [second,setSecond]=useState([]);
    // const [edit, setEdite]=useState(true);

    const submitbutton = () =>{
        console.log('submit');
        
        const arr = [first,...second,];
        setSecond(arr);
        console.log(arr);
        
    //     const ar = second;
    //     ar.push(first); 
    //     setSecond(ar); 
      }
     const x = (a)=>{
         setFrist(a);
     }

     const editbutton=()=>{
        console.log('first');
            //   setSecond([]);
              setFrist('');
            //   setEdite(true);
          

     }

     const deletebutton=()=>{
        console.log([second]);
        // setFrist('');
        setSecond([]);
       
        
     }
    

   return (
        <div className="todolist">
         <h1 className="t2">todoApp</h1>
         <hr/>
         <p id="s">{props.nme} is nice</p>
         
         <input type="text" value={first} onChange={(el)=>{x(el.target.value)}}  id="todo" placeholder=" enter the number"/>
         <br/>
         <button onClick={submitbutton}    className="btn">submit</button>
         <br/>
         
         {/* <p>{first}</p> */}
         {
             second.map((item,index)=>{
                 return<div className="t1">
                     <button onClick={()=>{deletebutton(item.first,item.second)}} text={item} onSelect={deletebutton}  className="delete-btn" > delete </button>
                     <p>{item}</p>
                     <br/>
                     <button onClick={()=>{editbutton(item.first,item.second)}}  key={index}  text={item} className="edit-btn">edit function</button>
                     <p>{item}</p>
                     
                </div>

             }
             
             )
         }
        </div>
    )
}