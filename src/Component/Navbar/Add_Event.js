import './Add_Event.css';
import { useState } from 'react';
import Table from './component_addevent/Table.jsx';
import UserInput from './component_addevent/UserInput.jsx';
import EventName from './component_addevent/EventName.jsx';
function Add_Event() {

  const [userInput, setUserInput] = useState({
    productName: '',
    productQuantity: 0,
    productPrice: 0
  });

  const [tableData, setTableData] = useState([]);

  const handleSubmit = (event) => { 
    event.preventDefault();
    if (!editingIndex){
    const dataObj = (data) => [...data, userInput];
    setTableData(dataObj);
    const isEmpty = { productName: '', productQuantity: 0, productPrice: 0 };
    setUserInput(isEmpty);
    }
    else
    {
        handleSaveEdit();
    }
  }

  const handleChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setUserInput(value);
  };

  const handleDeleteRow = (index) => {
    // Remove the element at the given index from tableData
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index); // Lưu chỉ số của hàng đang chỉnh sửa
    setUserInput(tableData[index]);
    // Không cần xóa hàng vì chúng ta muốn giữ thông tin để chỉnh sửa
  };

  // Hàm mới để lưu các thay đổi sau khi chỉnh sửa
  const handleSaveEdit = () => {
    const updatedData = [...tableData];
    updatedData[editingIndex] = userInput; // Cập nhật thông tin mới
    setTableData(updatedData);
    setEditingIndex(null); // Xóa chỉ số chỉnh sửa sau khi lưu
    setUserInput({ productName: '', productQuantity: 0, productPrice: 0 }); // Đặt lại trạng thái nhập liệu
  };
  return (
    <>
      <div className='container-add-event'>
        <h1>{EventName.userInput}</h1>
        <EventName />
        <UserInput userInput={userInput} onChange={handleChange} onSubmit={handleSubmit} />
        <Table tableData={tableData} onDeleteRow={handleDeleteRow} onEdit={handleEdit} editingIndex={editingIndex} />
      </div>
    </>

  );
}

export default Add_Event;
