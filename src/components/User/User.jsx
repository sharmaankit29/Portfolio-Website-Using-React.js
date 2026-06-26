import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {id}= useParams()
    return(
        <div className="bg-gray-600 text-white text-lg sm:text-2xl md:text-3xl p-3 sm:p-4 m-2 sm:m-5 rounded-md" >
          User: {id}
        </div>
    )
}
export default User 