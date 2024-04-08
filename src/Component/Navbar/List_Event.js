import React, { useEffect, useState } from 'react';
import './List_Event.css';
<<<<<<< HEAD
import { events01, events02 } from './Data_E_List';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { data } from './Data_E_Dialog';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function List_Event({ }) {
  const handlebudghetState = (event) => {
    switch (event) {
      case 'Funded':
        return <button id='text-funded'>Đã giải ngân</button>;
      case 'Pending':
        return <button id='text-pendding'>Đang chờ</button>;
=======
import { events01,events02 } from './Data_E_List';
export default function List_Event() { 
  const handlebudghetState = (event)=>{
    switch(event) {
      case 'Funded': return <button id='text-funded'>Đã giải ngân</button>;
      case 'Pending': return <button id='text-pendding'>Đang chờ</button>;
>>>>>>> 32c22887932887f1301c26b4828f8d1c0e6ad76e
      default:
        return <div className='budget-default'>Unknown</div>;
    }
  };

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [dataD, setdataD] = useState(data);

  useEffect(() => {
    if (month === 3) setEvents(events01);
    else setEvents(events02);
  }, [month]);

  const handleInputChange = (e) => {
    setMonth(new Date(e.target.value).getMonth() + 1);
  };

  const handleOpenDialog = (event) => {
    setSelectedEvent(event);
  }
  const handleCloseDialog = () => {
    setSelectedEvent(null);
  }

  return (
    <>
      <h1 id='header-list'>
        Danh sách sự kiện tháng <span>{!month ? '' : month}</span>
      </h1>
      <div className='tool-bar'>
        <label htmlFor='date-list'>Chọn tháng diễn ra: </label>
        <input id='date-list' type='month' onChange={handleInputChange}></input>
      </div>
      <Table id='List_Table'>
        <TableHead>
          <TableCell className='col-stt' style={{ backgroundColor: '#777', color: 'white' }}>STT</TableCell>
          <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tên sự kiện</TableCell>
          <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Người phụ trách</TableCell>
          <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Thời gian diễn ra</TableCell>
          <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tình trạng giải ngân</TableCell>
          <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tiến độ</TableCell>
        </TableHead>
        <TableBody id='table'>
          {events.map((event, index) => (
            <TableRow key={index} onClick={() => handleOpenDialog(event)}>
              <TableCell className='col-stt'>{index + 1}</TableCell>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.lead}</TableCell>
              <TableCell>{event.time}</TableCell>
              <TableCell>{handlebudghetState(event.budgetState)}</TableCell>
              <TableCell>{event.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


      <Dialog open={selectedEvent != null} onClose={handleCloseDialog} fullScreen>
        <DialogTitle>Thông tin chi tiết</DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <>
              <div id='des_close'style={{ display: 'flex', justifyContent: 'space-between', alignItems:'end' }}>
                <Button onClick={handleCloseDialog} >
                  <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                </Button>
              </div>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tên sản phẩm</TableCell>
                    <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Giá</TableCell>
                    <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Số lượng</TableCell>
                    <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tổng tiền</TableCell>
                    <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Ghi chú</TableCell>
                    <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tình trạng</TableCell>
                    <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Hoạt động khác</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataD.map((dt, index) => (
                    <TableRow key={index}>
                      <TableCell id='DialogRow'>{dt.name}</TableCell>
                      <TableCell id='DialogRow'>{dt.price}</TableCell>
                      <TableCell id='DialogRow'>{dt.num}</TableCell>
                      <TableCell id='DialogRow'>{dt.all}</TableCell>
                      <TableCell id='DialogRow'>{dt.note}</TableCell>
                      <TableCell id='DialogRow'>{dt.status}</TableCell>
                      <TableCell id='DialogRow'>{dt.other}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
