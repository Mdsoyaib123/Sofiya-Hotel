import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyBookingUpdate = () => {
    const loader = useLoaderData()
    const {_id} = loader ;
    
    const [updateDate,setUpdateDate] = useState()
    
    const date = {updateDate}
    console.log(date);
    const handleUpdate=(_id)=>{
        axios.put(`http://localhost:5000/api/v1/bookingData/${_id}`,date,)
        .then(res=>{
            console.log(res.data);
        })
       
    }
    return (
        <div>
             <div className="modal-box mx-auto mt-10">
                    <h2 className="text-center text-3xl font-bold">Update date </h2>
                    <form method="dialog" >
                    <div className="text-center">

                        <input id="myDate" onChange={(e)=>setUpdateDate(e.target.value)} className="px-10  py-2 border border-black my-6"  type="date"  /><br></br>

                        <div className="flex gap-5 justify-center">
                        <button className="btn mt-10 px-10 btn-outline btn-accent text-white">Cancel</button>   
                        <button onClick={()=>handleUpdate(_id)} className="btn mt-10 px-10 bg-blue-600 text-white">Update</button>
                        
                        </div>
                    </div>
                    </form>
               </div>
        </div>
    );
};

export default MyBookingUpdate;