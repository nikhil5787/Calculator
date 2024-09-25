import React, { useState } from 'react'
import "./TicTac.css";

const TicTac = () => {

    const [action,SetAction]=useState('');

    const array=['0','1','2','3','4','5','6','7','8','9','=','-',"*",'+','.',"C","%","/"]

    const ChangeHandle=(e)=>{
        SetAction(e.target.value)
        console.log(action)

    }

    const clickHandle=(e)=>{
     const  id=e.target.id;
       if(id==="C"){
        SetAction('')

       }else if(id==="="){
        handleSubmit();


       }
       else{
        SetAction((prev)=>(prev+id))
       }
       console.log(id);
    }

    const handleSubmit=()=>{
        try {
            const res=eval(action)
            SetAction(res);
            
        } catch (error) {
            alert("invaild")
            
        }
    }



  return (
    <>
      <h1>Calculator</h1>
    <div className='container' onClick={clickHandle}>
      
        <div className="input" onSubmit={handleSubmit}>
            <input type="text" value={action} onChange={ChangeHandle} />
        </div>
        <div className='input-data'>
        { array.map((item,i)=>(
         
            <button className='btn' id={item} key={i}>{item}  </button>
           

        ))

        }
        </div>
    </div>
    </>
  )

}

export default TicTac




   
    
   