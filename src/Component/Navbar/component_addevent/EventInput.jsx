import { useState } from "react"
import Input from "./Input.jsx"

export default function EventInput() {
    const [Header, setHeader] = useState("");
    return (
        <>
            <h1 id="E-Header">{!Header ? "------------" : Header}</h1>
            <div id="E-name">
                <form id="event-input">
                    <div className="input-group">
                        <p>
                            <Input label="Tên sự kiện: " id="event-input" type="text" onChange={(e) => { setHeader(e.target.value) }}></Input>
                        </p>

                        <p>
                            <Input label="Người phụ trách:  " id="event-input" type="text" ></Input>
                        </p>
                        <p>
                            <Input label="Thời gian diễn ra:   " id="event-input" type="date" ></Input>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )




}