import { calculateMoney } from "../util/calculator";
import VerifyButton from "./VerifyButton";
import CommentField from "./CommentField";
import { useEffect, useState } from 'react';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Table({ tableData, onDeleteRow, onEdit }) {
    const [allIsVerified, setAllIsVerified] = useState(false);
    const [comments, setcomments] = useState([]);
    const handleTrash = (index) => {
        onDeleteRow(index);
        const updatecmt = [...comments];
        updatecmt.splice(index,1);
        setcomments(updatecmt);
    };
    const handleEdit_Content = (index) => {
        onEdit(index);
    };

    function handleVerifyAll() {
        setAllIsVerified(allIsVerified => !allIsVerified);
    }

    const handleComment = (newComment, index) => {
        const updatedComments = [...comments];
        updatedComments[index] = newComment;
        setcomments(updatedComments);
    }
    

    const row = tableData.map((data, index) => {
        return (
            <tr className="DataTable" key={index}>
                <td>{index + 1}</td>
                <td>{data.productName}</td>
                <td>{data.productPrice}</td>
                <td>{data.productQuantity}</td>
                <td>{calculateMoney(data.productPrice, data.productQuantity)}</td>
                <td>{comments[index]}</td>
                <td><VerifyButton allVerified={allIsVerified} /></td>
                <td id="latest-row">
                    <div className="icon-table">
                        <FontAwesomeIcon icon={faTrash} onClick={() => handleTrash(index)} />
                        <FontAwesomeIcon icon={faPenToSquare} onClick={() => { handleEdit_Content(index) }} />
                        <CommentField
                            onChangeComment={(newComment) => handleComment(newComment, index)}
                            comment={comments[index]}
                        />
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
            <div className="container-vertifyall">
                <button className="btn" onClick={handleVerifyAll}>Verify all</button>
            </div>
        </>
    );
}
