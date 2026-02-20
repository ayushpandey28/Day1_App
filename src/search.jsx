import { useState } from "react";
export default function search(){
    const [find,setFind]=useState("");
    const name=["Dennis","Ritchie","Paul","Frank"];
    const student=name.filter((name)=>name.toLowerCase().includes(find.toLowerCase()));
    return(
        <div>
            <h2>Demo to show search</h2>
            <input type ="text" placeholder="Enter key to search" value={find} onChange={(e)=>setFind(e.target.value)}></input>
            <ul>
                {student.map((item,index)=>(<li key={index}></li>))};
            </ul>
        </div>
    );
}