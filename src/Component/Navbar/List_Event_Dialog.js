import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
export default function Dialog_Finance(selectedEvent) {
    const handlebudghetState = (event) => {
        switch (event) {
            case 'Funded':
                return <button id='text-funded'>Đã giải ngân</button>;
            case 'Pending':
                return <button id='text-pendding'>Đang chờ</button>;
            default:
                return <div className='budget-default'>Unknown</div>;
        }
    };
    
    return (
        <>
            <DialogTitle>Thông tin chi tiết</DialogTitle>
            <DialogContent >
                    <Table >
                        <TableHead>
                            <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tên sản phẩm</TableCell>
                            <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Giá</TableCell>
                            <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Số lượng</TableCell>
                            <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tổng tiền</TableCell>
                            <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Ghi chú</TableCell>
                            <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Tình trạng</TableCell>
                            <TableCell style={{ backgroundColor: '#777', color: 'white' }}>Hoạt động khác</TableCell>
                        </TableHead>
                        <TableRow >
                            <TableCell align="right">{selectedEvent.name}</TableCell>
                            <TableCell align="right">{selectedEvent.lead}</TableCell>
                            <TableCell align="right">{selectedEvent.time}</TableCell>
                            <TableCell align="right">{handlebudghetState(selectedEvent.budgetState)}</TableCell>
                            <TableCell align="right">{selectedEvent.status}</TableCell>
                        </TableRow>
                    </Table>
            </DialogContent>
        </>
    )
}