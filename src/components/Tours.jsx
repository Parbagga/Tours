import Tour from "./Tour";
import { useState } from "react";

const Tours = ({ data ,refresh }) => {


    const [tours,setTours]=useState(data)

    const handleDelete =(id)=>{
        const newTours = tours.filter((tour)=>tour.id !== id)
        console.log(newTours)
        setTours(newTours)
    }

 if(tours==''){
   return <div className="loading-container">

   <h5>No Tours to display</h5>
   <button type="button" className="btn" onClick={refresh} >Refresh</button>
      
   </div>
 }


  return (


    <div className="tours">

      {tours.map((item) => (
        <Tour key={item.id} item={item} handleDelete = {handleDelete}/>
      ))}
    </div>
  );
};

export default Tours;
