import React, {useState} from 'react'
import image from '../assets/default_dp.jpeg'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Profile() {
  const [open, setOpen] = useState(false)

  const [name, setName] = useState('Shahrukh Khan')
  const [email, setEmail] = useState('srk@gmail.com')
  const [phone, setPhone] = useState(9998889999)
  const [country, setCountry] = useState('India')

  return (
    <div className='bg-gray-100 min-h-screen'>
      <h1 className='text-4xl text-center py-10 font-semibold'>Profile</h1>

      {/* Add a section for profile photo view/edit with a circle */}
      <div className='flex justify-center items-center gap-12'>
        <div className='w-36 h-36 bg-gray-300 rounded-full'>
          <img src={image} alt='profile' className='w-36 h-36 rounded-full' />
        </div>

        <div>
          {/* add section for displaying the name, emailid, phone no. and country */}
          <h2 className='text-2xl font-semibold mt-5'>{name}</h2>
          <p className='text-gray-500'>{email}</p>
          <p className='text-gray-500'>{phone}</p>
          <p className='text-gray-500'>{country}</p>

          
        </div>

      </div>

      <div className='text-center mt-12'>
        <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5' onClick={() => setOpen(true)}>
            Edit
        </button>
      </div>

      {/* Add a section for user details */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please edit the details below
          </DialogContentText>
          <div>
            {/* add form fields for name, email id, photo upload, phone no. and country */}
            <div className='mt-5'>
              <label className='block text-sm font-medium text-gray-700'>Name</label>
              <input onChange={(e) => setName(e.target.value)} type='text' name='name' id='name' className='mt-1 p-2 border border-gray-300 rounded w-full' />
            </div>
            <div className='mt-5'>
              <label className='block text-sm font-medium text-gray-700'>Email ID</label>
              <input onChange={(e) => setEmail(e.target.value)} type='email' name='email' id='email' className='mt-1 p-2 border border-gray-300 rounded w-full' />
            </div>
            <div className='mt-5'>
              <label className='block text-sm font-medium text-gray-700'>Phone No.</label>
              <input onChange={(e) => setPhone(e.target.value)} type='tel' name='phone' id='phone' className='mt-1 p-2 border border-gray-300 rounded w-full' />
            </div>
            <div className='mt-5'>
              <label className='block text-sm font-medium text-gray-700'>Country</label>
              <input onChange={(e) => setCountry(e.target.value)} type='text' name='country' id='country' className='mt-1 p-2 border border-gray-300 rounded w-full' />
            </div>

          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={() => setOpen(false)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            Cancel
          </button>
          <button onClick={() => {
            // Close the dialog box
            setOpen(false)}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Save
          </button>
        </DialogActions>
      </Dialog>


    </div>
  )
}

export default Profile