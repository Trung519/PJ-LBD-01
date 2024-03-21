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

  return (
    <>
    <div className='container-add-event'>
        <h1>{EventName.userInput}</h1>
        <EventName />
        <Table tableData={tableData} />
        <UserInput userInput={userInput} onChange={handleChange} onSubmit={handleSubmit} />
      </div>
    </>

  );
}

export default Add_Event;
