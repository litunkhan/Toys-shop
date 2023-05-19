/* eslint-disable no-unused-vars */
import { useContext, useEffect,useState } from "react";
import { AuthContext } from "../../Authprobijder/Authprobider";
import Toyses from "./Toyses";



const Mytoys = () => {
    const {user}= useContext(AuthContext)
    const [mytoys,setmytoys] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/mytoys?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setmytoys(data)
        })

    },[user.email])
    return (
        <div className="my-10">
           <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         Remove
        </th>
        <th>Name</th>
        <th>Quantity/Price</th>
        <th>Seller name</th>
        <th>Category</th>
        <th>Details</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      
      
      {
      mytoys.map(toys=>{
         return <><Toyses toyss={toys} key={toys._id}></Toyses></>
      })
      }
    </tbody>
    
   
    
  </table>
</div>
        </div>
    );
};

export default Mytoys;