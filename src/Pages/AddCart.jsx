import React from 'react'
import "./AddCart.css"

export default function AddCart({addCart,setaddCart}){
 

  function  handleDelete(index){
    let x = addCart.filter((e, id) => id != index);
        setaddCart(x)
  }



  return (<>
 
    <div className='CartContainer'>
      <div className="CartTitle">Cart</div>
      
      <div className='CartList'>
        {addCart.map((course, i) => (
          <div className='CartItem' key={i}>{course.CourseTitle} {course.CoursePrice}
          <button onClick={() => handleDelete(i)}>Delete</button>
        
          </div>

        ))}
      </div>
    </div>
  
    
    {console.log(addCart)}
  
    </>
  )
}
