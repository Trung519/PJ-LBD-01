import './Add_Event.css';
import { useState } from 'react';
import Table from './component_addevent/Table.jsx';
import UserInput from './component_addevent/UserInput.jsx';
import EventInput from './component_addevent/EventInput.jsx';
function Add_Event() {

  const [userInput, setUserInput] = useState({
    productName: '',
    productQuantity: 0,
    productPrice: 0
  });

  const [tableData, setTableData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataObj = (data) => [...data, userInput];
    setTableData(dataObj);
    const isEmpty = { productName: '', productQuantity: 0, productPrice: 0 };
    setUserInput(isEmpty);
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

  const handleEdit = (index) => {
      setUserInput(tableData[index]);
      handleDeleteRow(index);
  }
  return (
    <>
    <div className='container-add-event'>
        <h1>{EventInput.userInput}</h1>
        <EventInput />
        <Table tableData={tableData} onDeleteRow={handleDeleteRow} onEdit={handleEdit}/>
        <UserInput userInput={userInput} onChange={handleChange} onSubmit={handleSubmit} />
      </div>
    </>

  );
}

export default Add_Event;