import { calculateMoney } from "../util/calculator";
import VerifyButton from "./VerifyButton";
import CommentField from "./CommentField";
import { useState } from 'react';
import CommentButton from "./CommentButton";

export default function Table({tableData}) {
    
    
    const [allIsVerified, setAllIsVerified] = useState(false);

    

    function handleVerifyAll() {
        setAllIsVerified(true);
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
                    <th>Chỉnh sửa</th>
                </thead>
                <tbody>
                    {tableData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.productName}</td>
                                <td>{data.productPrice}</td>
                                <td>{data.productQuantity}</td>
                                <td>{calculateMoney(data.productPrice, data.productQuantity)}</td>
                                <td>{
                                    <VerifyButton allVerified={allIsVerified} />}
                                </td>
                                <td>
                                       {<CommentField  />} 
                                </td>
                                <td>
                                    
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