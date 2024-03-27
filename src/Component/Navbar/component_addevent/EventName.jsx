import { useState } from "react"
import Input from "./Input";
export default function EventName() {
    const [Header, setHeader] = useState("");
    return (
        <>
            <h1 id="E-Header">{!Header ? "Event Name" : Header}</h1>
            <div id="E-name">
                <div>
                    <Input label="Tên sự kiện: " className="event-input" type="text" onChange={(e) => { setHeader(e.target.value) }}></Input>
                </div>

                <div>
                    <Input label="Người phụ trách:  " className="event-input" type="text" ></Input>
                </div>
                <div>
                    <Input label="Thời gian diễn ra:   " className="event-input" type="date" ></Input>
                </div>
            </div>
            <div className="container-button">
                <button className="btn" id="btn-save">Save</button>
            </div>
        </>
    )




}