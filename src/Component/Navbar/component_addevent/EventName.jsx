import { useState } from "react"

export default function EventName() {
    const [Header,setHeader] =useState("");
    return (
        <>
            <h1 id="E-Header">{!Header?"------------":Header}</h1>
            <div id="E-name">
                <div>
                    <label id="event-name" >Tên sự kiện: </label>
                    <input id="event-input" type="text" onChange={(e)=>{setHeader(e.target.value)}}></input>
                </div>
                <div>
                    <button id="btn-save">Save</button>
                </div>
            </div>
        </>
    )




}