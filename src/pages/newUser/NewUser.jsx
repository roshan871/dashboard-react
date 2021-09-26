import './NewUser.css';
import React from 'react'

function NewUser() {
    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserItem'>
                    <label>Username</label>
                    <input type='text' placeholder='Roshan' />
                </div>
                <div className='newUserItem'>
                    <label>Full Name</label>
                    <input type='text' placeholder='Roshan Dahal' />
                </div>
                <div className='newUserItem'>
                    <label>Email</label>
                    <input type='text' placeholder='roshandahal747@gmail.com' />
                </div>
                <div className='newUserItem'>
                    <label>Password</label>
                    <input type='password' placeholder='Roshan@1233' />
                </div>
                <div className='newUserItem'>
                    <label>Phone</label>
                    <input type='number' placeholder='+1 720 530 7110' />
                </div>
                <div className='newUserItem'>
                    <label>Address</label>
                    <input type='text' placeholder='Colorado | USA' />
                </div>
                <div className='newUserItem'>
                    <label>Gender</label>
                    <div className='newUserGender'>
                        <input type='radio' name='gender' id='male' value='male' />
                        <label for='male'>Male</label>
                        <input type='radio' name='gender' id='female' value='female' />
                        <label for='female'>Female</label>
                        <input type='radio' name='gender' id='other' value='others' />
                        <label for='other'>Other</label> 
                    </div>
                </div>
                <div className='newUserItem'>
                    <label>Active</label>
                    <select className='newUserSelect' name='active' id='active'>
                        <option value='yes'>yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className='newUserButton'>Create</button>
            </form>
        </div>
    )
}

export default NewUser
