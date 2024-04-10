import React, { useEffect, useState } from 'react';
import { events01, events02 } from './Data_E_List';
import { Paper, TableContainer, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { data } from './Data_E_Dialog';
import TablePagination from '@mui/material/TablePagination';
import Button from 'react-bootstrap/Button';
import 'react-bootstrap'
import './List_Event.css'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function List_Event({ }) {
  const handlebudghetState = (event) => {
    switch (event) {
      case 'Funded':
        return <button id='text-funded' className=''>Đã giải ngân</button>;
      case 'Pending':
        return <button id='text-pendding'>Đang chờ</button>;
      default:
        return <div className='budget-default'>Unknown</div>;
    }
  };
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [dataD, setdataD] = useState(data);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [ename, setEname] = useState("");
  const [dprice, setdprice] = React.useState(0);
  const [dnum, setdnum] = React.useState(0);
  const [callAll, setcallAll] = React.useState(0);
  const [color, setColor] = React.useState('#4e79a7');
  const [all_money, setall_money] = useState(dataD.map(index => index.all))
  const [showchart, setshowchart] = useState(false)

  const chartsParams = {
    margin: { bottom: 20, left: 80, right: 50 },
    height: 300,
  };
  useEffect(() => {
    if (month === 3) setEvents(events01);
    else setEvents(events02);
  }, [month]);

  const handleInputChange = (newDate) => {
    setMonth(newDate + 1); // Lấy tháng từ ngày mới và cập nhật state 'month'
  };
  const handleOpenDialog = (event) => {
    setSelectedEvent(event);
    setEname(event.name);
  }
  const handleCloseDialog = () => {
    setSelectedEvent(null);
  }

  // The function to set limit page in window
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleprice = (e, index) => {
    setdprice(Number(e));
    setcallAll(dnum * dprice);
    const updatedAllMoney = [...all_money];
    updatedAllMoney[index] = dnum * dprice;
    setall_money(updatedAllMoney);
  }
  const handlenum = (e, index) => {
    setdnum(Number(e));
    setcallAll(dnum * dprice);
    all_money[index] = dnum * dprice;
    const updatedAllMoney = [...all_money];
    updatedAllMoney[index] = dnum * dprice;
    setall_money(updatedAllMoney);
    console.log("asdasd",all_money, typeof(all_money),"babehello",updatedAllMoney,"upupupupupup",all_money[index])
  }
  return (
    <>
      <h1 id='header-list'>
        Danh sách sự kiện tháng <span>{!month ? '' : month}</span>
      </h1>
      <div className=''>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer components={['DesktopDatePicker']}>
            <DemoItem label="Chọn thời gian:" >
              <DesktopDatePicker defaultValue={null}
                onChange={(newDate) => {
                  handleInputChange(newDate.month())
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className='body_listname'>
        <Paper sx={{ width: '100%', overflow: 'hidden' }} id='PaperTable' >
          <TableContainer className='TableContainer'>
            <Table id='List_Table' stickyHeader aria-label="sticky table">
              <TableHead id='Table_Header'>
                <TableCell sx={{ backgroundColor: '#d5d1defe' }}>STT</TableCell>
                <TableCell sx={{ backgroundColor: '#d5d1defe' }}>Tên sự kiện</TableCell>
                <TableCell sx={{ backgroundColor: '#d5d1defe' }}>Người phụ trách</TableCell>
                <TableCell sx={{ backgroundColor: '#d5d1defe' }}>Thời gian diễn ra</TableCell>
                <TableCell sx={{ backgroundColor: '#d5d1defe' }}>Tình trạng giải ngân</TableCell>
                <TableCell sx={{ backgroundColor: '#d5d1defe' }}>Tiến độ</TableCell>
              </TableHead>
              <TableBody id='table'>
                {events.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((event, index) => (
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
          </TableContainer>
          <TablePagination
            labelRowsPerPage="Số dòng của trang"
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={events.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

      {/* ---------------DIALOG------------------------------------------------------------------*/}
      <div className='DiaLog' >
        <Dialog open={selectedEvent != null} onClose={handleCloseDialog} fullWidth maxWidth="xxl">
          <DialogTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p>Thông tin chi tiết {ename} </p>
            <Button onClick={handleCloseDialog} variant="warning">Close</Button>{''}
          </DialogTitle>
          <div className='row'>
            <div className='col-md-6 mb-4 '>
              <DialogContent >
                {selectedEvent && (
                  <>
                    <Paper >
                      <TableContainer sx={{ maxHeight: 550 }}>
                        <Table stickyHeader aria-label="sticky table">
                          <TableHead >
                            <TableRow >
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tên sản phẩm</TableCell>
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Giá</TableCell>
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Số lượng</TableCell>
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tổng tiền</TableCell>
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Ghi chú</TableCell>
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tình trạng</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {dataD.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((dt, index) => (
                              <TableRow key={index}>
                                <TableCell id='DialogRow'>{dt.name}</TableCell>
                                <TableCell id='DialogRow'>{dt.price}</TableCell>
                                <TableCell id='DialogRow'>{dt.num}</TableCell>
                                <TableCell id='DialogRow'>{dt.all}</TableCell>
                                <TableCell id='DialogRow'>{dt.note}</TableCell>
                                <TableCell id='DialogRow'>{dt.status}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <TablePagination
                        labelRowsPerPage="Số dòng của trang"
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={events.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </Paper>
                  </>
                )}
              </DialogContent>
            </div>

            {/* ------------------------Bảng có khả năng edit -----------------------------*/}
            <div className='col-md-6 mb-4'>
              <DialogContent>
                {selectedEvent && (
                  <>
                    <Paper>
                      <TableContainer sx={{ maxHeight: 550 }}>
                        <Table stickyHeader aria-label="sticky table">
                          <TableHead>
                            <TableRow>
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tên sản phẩm</TableCell>
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Giá</TableCell>
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Số lượng</TableCell>
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tổng tiền</TableCell>
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Ghi chú</TableCell>
                              <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tình trạng</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {dataD.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((dt, index) => (
                              <TableRow key={index}>
                                <TableCell contentEditable={true} id='DialogRow'>{dt.name}</TableCell>
                                <TableCell contentEditable={true} onInput={(e, index) => { handleprice(e.currentTarget.textContent) }} id='DialogRow'>{dt.price}</TableCell>
                                <TableCell contentEditable={true} onInput={(e, index) => { handlenum(e.currentTarget.textContent) }} id='DialogRow'>{dt.num}</TableCell>
                                <TableCell contentEditable={false} id='DialogRow'>{callAll == 0 ? dt.all : callAll}</TableCell>
                                <TableCell contentEditable={true} id='DialogRow'>{dt.note}</TableCell>
                                <TableCell contentEditable={true} id='DialogRow'>{dt.status}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <TablePagination
                        labelRowsPerPage="Số dòng của trang"
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={events.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </Paper>
                  </>
                )}
              </DialogContent>
            </div>
          </div >
          {/*-------------------------------------------------------------------- */}
          <Button onClick={() => setshowchart(!showchart)}>Showchart</Button>
          {showchart &&
            <Stack direction="column" spacing={2} alignItems="center" sx={{ width: '100%' }}>
              <LineChart
                {...chartsParams}
                series={[
                  {
                    data: all_money,
                    label: 'Bảng 1',
                    color,
                  },
                  {
                    data: [770000, 880000, 550000, 450000, 600000, 220000, 300000, 900000,
                      770000, 880000, 550000, 450000, 600000, 220000, 300000, 900000,
                      770000, 880000, 550000, 450000],
                    label: 'Bảng 2',
                    color: 'red',
                  }
                ]}
              />
            </Stack>
          }
        </Dialog>
      </div>
    </>
  );
}
