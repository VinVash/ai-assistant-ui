import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Calendar() {
  // create row objects array for data grid consisting of meetings that consist of following fields:
  // id, meeting name, meeting desc, meeting time
  const gridRows = [
    { id: 1, serNo: 1, name: 'Meeting with David', desc: 'Interview of candidate for Software Enginering Role', time: '11 AM', join: 'Zoom' },
    { id: 2, serNo: 2, name: 'Meeting with Daisy', desc: 'Project presentation and overview', time: '3 PM', join: 'Zoom'},
    { id: 3, serNo: 3, name: 'Daily Standup', desc: 'Things done today', time: '5 PM', join: 'Zoom'},
  ]

  // create column objects array for data grid consisting of following fields:
  // field, headerName, width
  const gridColumns = [
    { field: 'serNo', headerName: 'Serial No.', width: 100, type: 'string' },
    { field: 'name', headerName: 'Name', width: 300, type: 'string' },
    { field: 'desc', headerName: 'Description', width: 500, type: 'string' },
    { field: 'time', headerName: 'Time', width: 200, type: 'string' },
    {
      field: "join",
      headerName: "Join",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          alert('Joining Meeting')
        };
  
        return <button className="text-blue-500 hover:text-blue-700"onClick={onClick}>{params.row.join}</button>;
      }
    },
  ]

  return (
    
    <div className='bg-gray-100 min-h-screen'>
      <h1 className='text-4xl text-center py-10 font-semibold'>Calendar</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>

      {/* Add a section for today's meetings */}
      <div className='my-10 mx-12'>
        <h2 className='text-2xl mb-4 font-semibold text-center'>Today's Meetings</h2>
        <div className='mb-20' style={{ height: 300, width: '100%' }}>
          <DataGrid rows={gridRows} columns={gridColumns} />
        </div>
      </div>
    </div>
  )
}

export default Calendar