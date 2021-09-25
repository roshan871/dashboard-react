import './UserList.css';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from "react-router-dom";
import { useState } from 'react';

function UserList() {
      const [data, setData] = useState(userRows)

      const handleDelete = (id) => {
          setData(data.filter( (item) => item.id !== id));
     }
    const columns = [
        { field: 'id', headerName: 'ID', width: 92 },
        { field: 'user', headerName: 'User', width: 130, renderCell: (params) => {
            return (
                <div className='useListUser'>
                    <img className='userListImg' src={params.row.avatar} alt='' />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'transaction volume',
            width: 160,
          },
          {
              field: 'action',
              headerName: 'Action',
              width: 150,
              renderCell:(params) => {
                  return(
                    <>
                        <Link to={'/user/' + params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline
                            className='userListDelete'
                             onClick={ () => handleDelete(params.row.id)}
                         />
                    </>
                  )
              }
          },
    ];
      
     
      
    return (
        <div className='userList'>
            <div style={{ height: 560, width: '55rem' }}>
                <DataGrid
                    disableSelectionOnClick
                    rows={data}                 // data is set to userRows as initial data
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default UserList;
