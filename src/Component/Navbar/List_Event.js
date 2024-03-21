import React from 'react';
import './List_Event.css';
export default function List_Event({ events }) { 
  return (
    <table id="DataTable">
      <thead>
        <tr id='result'>
          <th>STT</th>
          <th>Tên sự kiện</th>
          <th>Người phụ trách</th>
          <th>Thời gian diễn ra</th>
          <th>Tình trạng giải ngân</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody id='table'>
        {events.map((event, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{event.name}</td>
            <td>{event.lead}</td>
            <td>{event.time}</td>
            <td>{event.budgetState}</td>
            <td>{event.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
