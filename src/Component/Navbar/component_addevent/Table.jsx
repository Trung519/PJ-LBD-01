import { calculateMoney } from "../util/calculator";
import VerifyButton from "./VerifyButton";
import CommentField from "./CommentField";
import { useEffect, useState } from 'react';
import CommentButton from "./CommentButton";
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

export default function Table( {tableData, onDeleteRow, onEdit} ) {
    const [allIsVerified, setAllIsVerified] = useState(false);

    const handleTrash = (index) => {
        onDeleteRow(index); 
    };
    const handleEdit_Content = (index)=>{
        onEdit(index);
    };

    const row = tableData.map((data, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.productName}</td>
                <td>{data.productPrice}</td>
                <td>{data.productQuantity}</td>
                <td>{calculateMoney(data.productPrice, data.productQuantity)}</td>
                <td></td>
                <td><VerifyButton /></td>
                <td id="latest-row">
                    <div className="icon-table">
                        <FontAwesomeIcon icon={faTrash} onClick={() => handleTrash(index)} />
                        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{handleEdit_Content(index)}}/>
                        <FontAwesomeIcon icon={faComment} />
                    </div>
                </td>
            </tr>
        );
    });

    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th>Ghi chú</th>
                        <th>Tình trạng</th>
                        <th>Hoạt động khác</th>
                    </tr>
                </thead>
                <tbody id="table">
                    {row}
                </tbody>
            </table>
            <button className="btn" onClick={() => setAllIsVerified(true)}>Verify all</button>
            
        </>
    );
}
