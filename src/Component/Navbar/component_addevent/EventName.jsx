import { useState } from "react"
import Input from "./Input,";
export default function EventName() {
    const [Header, setHeader] = useState("");
    return (
        <>
            <h1 id="E-Header">{!Header ? "------------" : Header}</h1>
            <div id="E-name">
                <div>
                    <Input label="Tên sự kiện: " id="event-input" type="text" onChange={(e) => { setHeader(e.target.value) }}></Input>
                </div>

                <div>
                    <Input label="Người phụ trách:  " id="event-input" type="text" ></Input>
                </div>
                <div>
                    <Input label="Thời gian diễn ra:   " id="event-input" type="date" ></Input>
                </div>
                <div>
                    <button id="btn-save">Save</button>
                </div>
            </div>
        </>
    )




}