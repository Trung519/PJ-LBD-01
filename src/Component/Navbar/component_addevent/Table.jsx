import { calculateMoney } from "../util/calculator";
import VerifyButton from "./VerifyButton";
import CommentField from "./CommentField";
import { useState } from 'react';
import CommentButton from "./CommentButton";
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


export default function Table({ tableData }) {


    const [allIsVerified, setAllIsVerified] = useState(false);



    function handleVerifyAll() {
        setAllIsVerified(true);
    }
    const [datas,setdatas]=useState(tableData);
    const handleTrash = (index)=>
    {
        axios.delete()
    }

    return (
        <>
            <table id="result">
                <thead>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                    <th>Tình trạng</th>
                    <th>Ghi chú</th>
                    <th>Hoạt động khác</th>
                </thead>
                <tbody id="table">
                    {tableData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.productName}</td>
                                <td>{data.productPrice}</td>
                                <td>{data.productQuantity}</td>
                                <td>{calculateMoney(data.productPrice, data.productQuantity)}</td>
                                <td>
                                </td>
                                <td>
                                    
                                </td>
                                <td id="latest-row">
                                    <div className="icon-table">
                                        <FontAwesomeIcon icon={faTrash} onClick={()=>{handleTrash(index)}}/>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                        <FontAwesomeIcon icon={faComment} />
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button className="btn" onClick={handleVerifyAll}>Verify all</button>
            <div>
                <p>Number of verified is: </p>

            </div>
        </>

    )
}