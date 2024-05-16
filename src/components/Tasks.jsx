import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Tasks() {
  const rows = [
    { id: 1, serNo: 1, name: 'Submit project report by today EOD',
    desc: 'Visualization tool library for React, built on top of D3.js. It is a declarative library that leverages the composability of React components.',
    done: false },
    { id: 2, serNo: 2, name: 'Submit project timesheet by this week', desc: 'Machine Learning pipeline development using Generative AI tools.', done: false },
    { id: 3, serNo: 3, name: 'Configure tools on new system',
    desc: 'Setup tools like VS Code, Git, Node.js, and other development tools on the new system. System configuration: Windows 10, 16GB RAM, 512GB SSD, i7 10th Gen Processor',
     done: true },
  ];

  const columns = [
    { field: 'serNo', headerName: 'Serial No.', width: 100, type: 'string' },
    { field: 'name', headerName: 'Name', width: 300, type: 'string' },
    { field: 'desc', headerName: 'Description', width: 500, type: 'string' },
    { field: 'done', headerName: 'Done?', width: 200, type: 'boolean' },
  ];

  const [gridRows, setGridRows] = React.useState(rows);
  const [gridColumns, setGridColumns] = React.useState(columns);
  const [open, setOpen] = React.useState(false);

  const [taskName, setTaskName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [taskDone, setTaskDone] = React.useState(false);

  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Big heading Tasks */}
      <h1 className='text-4xl text-center pt-10 font-semibold'>Tasks</h1>

      {/* Add a vast menu consisting of buttons for adding tasks */}
      <div className='mx-4 flex flex-row items-center gap-5 mt-10 justify-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setOpen(true)}>
          New Task
        </button>
        </div>

      {/* Add a section for tasks in the form of a data grid */}
      <div className='mt-10 mx-12'>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={gridRows} columns={gridColumns} />
        </div>
      </div>

      {/* Add a section for Dialog box that opens up to create new task */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Create New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new task, please fill in the details below.
          </DialogContentText>
          <div>
            {/* Add form fields for task name, description, and done status */}
            <div className='mt-5'>
              <label className='block text-sm font-medium text-gray-700'>Task Name</label>
              <input type='text' name='taskName' id='taskName' onChange={(e) => setTaskName(e.target.value)} className='mt-1 p-2 border border-gray-300 rounded w-full' />
            </div>
            <div className='mt-5'>
              <label className='block text-sm font-medium text-gray-700'>Description</label>
              <textarea onChange={(e) => setDescription(e.target.value)}  name='description' id='description' className='mt-1 p-2 border border-gray-300 rounded w-full'></textarea>
            </div>
            <div className='mt-5'>
              <label className='block text-sm font-medium text-gray-700'>Done?</label>
              <input onChange={() => setTaskDone(!taskDone)} type='checkbox' name='done' id='done' className='mt-1' />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={() => setOpen(false)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            Cancel
          </button>
          <button onClick={() => {
            // Add logic to save the task to the runColumns array
            const newTask = {
              id: gridRows.length + 1,
              serNo: gridRows.length + 1,
              name: taskName,
              desc: description,
              done: taskDone,
            }
            setGridRows([...gridRows, newTask]);

            // Reset the form fields
            setTaskName('');
            setDescription('');
            setTaskDone(false);

            setOpen(false)}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Save
          </button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default Tasks