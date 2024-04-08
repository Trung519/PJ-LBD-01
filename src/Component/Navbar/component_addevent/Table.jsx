import { calculateMoney } from "../util/calculator";
import VerifyButton from "./VerifyButton";
import CommentField from "./CommentField";
import { useState } from 'react';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Table({ tableData, onDeleteRow, onEdit, editingIndex }) {
    const [allIsVerified, setAllIsVerified] = useState(false);
    const [comments, setcomments] = useState([]);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    const handleTrash = (index) => {
        onDeleteRow(index);
        const updatecmt = [...comments];
        updatecmt.splice(index, 1);
        setcomments(updatecmt);
        if (allIsVerified && tableData.length === 1) {
            setAllIsVerified(false);
        }
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
            <tr className={index === editingIndex ? 'editing-row' : 'DataTable'} key={index}>
                <td className="number-column" >{index + 1} </td>
                <td className="text-column">{data.productName}</td>
                <td className="number-column">{formatter.format(data.productPrice)}</td>
                <td className="number-column">{data.productQuantity}</td>
                <td className="number-column">{formatter.format(calculateMoney(data.productPrice, data.productQuantity))}</td>
                <td className="text-column">{comments[index]}</td>
                <td>
                    <VerifyButton allVerified={allIsVerified} />
                </td>
                <td id="latest-row">
                    <div className="icon-table">
                        <FontAwesomeIcon id="trash-icon" icon={faTrash} onClick={() => handleTrash(index)} />
                        <FontAwesomeIcon id="edit-icon" icon={faPenToSquare} onClick={() => { handleEdit_Content(index) }} />
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
                        <th id="no-column">STT</th>
                        <th>Tên sản phẩm</th>
                        <th className="number-column">Giá</th>
                        <th className="number-column">Số lượng</th>
                        <th className="number-column">Tổng tiền</th>
                        <th>Ghi chú</th>
                        <th>Tình trạng</th>
                        <th>Hoạt động khác</th>
                    </tr>
                </thead>
                <tbody id="table">
                    {row}
                </tbody>
            </table>
            <div className="container-button">
                <button className="btn" onClick={handleVerifyAll}>Verify all</button>
            </div>
        </>
    );
}
