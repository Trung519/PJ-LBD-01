import React, { useEffect, useState } from 'react';
import './List_Event.css';
import { events01,events02 } from './Data_E_List';
export default function List_Event({  }) { 
  const handlebudghetState = (event)=>{
    switch(event) {
      case 'Funded': return <button id='text-funded'>Đã giải ngân</button>;
      case 'Pending': return <button id='text-pendding'>Đang chờ</button>;
      default:
        return <div className="budget-default">Unknown</div>;
    }
  }
  const [month, setMonth] = useState(new Date().getMonth()+1);
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    if (month===3) setEvents(events01);
    else setEvents(events02);
  },[month])
    const handleInputChange = (e) => {
        setMonth(new Date(e.target.value).getMonth()+1);
    }
  return (
    <>
    <h1 id='header-list'>Danh sách sự kiện tháng <span>{!month?"":month}</span></h1>
    <div className='tool-bar'>
      <label for='date-list'>Chọn tháng diễn ra: </label>
      <input id='date-list' type='month' onChange={handleInputChange}></input>
    </div>
    <table id="List_Table">
      <thead>
        <tr id='row-title'>
          <th className='col-stt'>STT</th>
          <th>Tên sự kiện</th>
          <th>Người phụ trách</th>
          <th>Thời gian diễn ra</th>
          <th>Tình trạng giải ngân</th>
          <th>Tiến độ</th>
        </tr>
      </thead>
      <tbody id='table'>
        {events.map((event, index) => (
          <tr key={index}>
            <td className='col-stt'>{index + 1}</td>
            <td>{event.name}</td>
            <td>{event.lead}</td>
            <td>{event.time}</td>
            <td>{handlebudghetState(event.budgetState)}</td>
            <td>{event.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}
